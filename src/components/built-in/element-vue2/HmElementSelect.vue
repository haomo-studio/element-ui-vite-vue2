<template>
  <div class="select-class">
    <div
      class="select-title"
      v-if="title != ''"
      :style="{ width: labelWidth + 'px' }"
    >
      {{ title }}:
    </div>
    <el-select
      v-model:value="cValue"
      class="el-select"
      :multiple="multiple"
      :placeholder="placeholder"
      :size="size"
      :filterable="showSearch"
      :remote="showSearch"
      :disabled="disabled"
      :clearable="allowClear"
      @focus="focus"
      ref="select"
      @blur="onBlur"
      @change="handleChange"
      @inputKeydown="onInputKeydown"
      :remote-method="searchByInput"
    >
      <el-option
        v-for="item in cOptions"
        :key="item.value"
        :value="item.value"
        :label="item.label"
        >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import {
  getAction,
  postAction,
  deleteAction,
  putAction,
} from "/@/request/http";
import { debounce, cloneDeep } from 'lodash'

export default {
  name: "HmAntSelect",
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * GET URL
     */
    url: {
      type: String,
      default: "",
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 搜索过滤字段
     */
    filterKey: {
      type: String,
    },
    /**
     * 远程数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          label: "label",
          value: "value",
        };
      },
    },
    /**
     * 分页参数映射
     */
    paginationMap: {
      type: Object,
      default: function () {
        return {
          pageNo: 'pageNo',
          pageSize: 'pageSize'
        }
      }
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "选择",
    },
    /**
     * 支持多选
     */
     multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请选择",
    },
    /**
     * 选项内容
     * @model
     */
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 支持远程搜索
     */
    showSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否支持清除
     */
    allowClear: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 大小
     * @type Enum
     * @default default
     * @options ["medium","small","mini"]
     */
    size: {
      type: String,
      default: "medium",
    },
    /**
     * 选择框宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number,
    },
  },
  data() {
    return {
      notFoundContent: "暂无数据",
      cWidth: "200px",
      cValue: undefined,
      cOptions: [],
      fetching: false,
    };
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    url(value) {
      if (!this.showSearch) {
        this.getData(value);
      }
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          return;
        }
        if (!this.showSearch) {
          this.getData(null, value);
        }
      },
      deep: true,
    },
    options: {
      handler: function (value, oldValue) {
        this.cOptions = this.mapData(value);
      },
      deep: true,
    },
  },
  mounted() {
    // 解决value初始化不为数组的问题
    if (!this.value && this.multiple) {
      this.cValue = [];
    } else {
      this.cValue = this.value;
    }
    // this.cValue = this.value;
    this.cWidth = this.getCssUnit(this.width);
    this.cOptions = this.options;
    if (!this.showSearch) {
      this.getData();
    }
  },
  methods: {
    click: function (e) {
      this.$emit("change", e);
    },
    onBlur: function (e) {
      this.$emit("onBlur", e);
    },
    focus: function (e) {
      this.$emit("focus", e);
    },
    handleChange: function (e) {
      this.$emit("update:value", this.cValue);
      this.$emit("change", e,this.cOptions);
    },
    onInputKeydown: function (e) {
      this.$emit("inputKeydown", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    //查询过滤数据
    searchByInput: debounce(function(val) {
      console.log(val,'val');
      if (!val) return
      this.fetching = true
      const searchParams = {
        ...(this.params ? cloneDeep(this.params) : {})
      }
      const filterKey = this.filterKey || this.dataMap.label
      searchParams[filterKey] = `*${val}*`
      this.getData(null, searchParams)
    }),
    //将查询接口的数据渲染到list中
    getData(url, params) {
      let self = this;
      url = url || this.url;
      params =
        params || (this.params ? cloneDeep(this.params) : {});
      params[this.paginationMap.pageNo] = 1
      params[this.paginationMap.pageSize] = 10
      if (!url) return;
      console.log("getData", url, params);
      getAction(url, params).then((resp) => {
        console.log("res", resp);
        //查询数据库的数组
        self.cOptions = [];
        let data = [];
        if (resp.data) {
          if(resp.data.list){
            data = resp.data.list;
          }
          if(resp.data.records){
            data = resp.data.records;
          }
        }
        if (resp.result) {
          data = resp.result.records || resp.result;
        }
        if (resp.list) {
          data = resp.list;
        }
        self.cOptions = self.mapData(data);
        self.$emit("getData", self.cOptions)
        self.fetching = false
      });
      //console.log("请求使用的url和参数", url, params);
    },
    // filterOption(input, option) {
    //   console.log(input,option);
    //   return this.cOptions.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    // },
    //处理数据
    mapData(data) {
      let self = this;
      if (!this.dataMap || Object.keys(this.dataMap).length == 0) {
        return data;
      }
      let keys = Object.keys(this.dataMap);
      data.forEach((item) => {
        keys.forEach((key) => {
          item[key] = item[self.dataMap[key]];
        });
      });
      console.log("data", data);
      return data;
    },
  },
};
</script>

<style scoped>
.select-class {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.select-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.el-select {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}

</style>
