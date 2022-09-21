<template>
  <div class="table-div">
    <el-table row-key="id" :scroll="scroll" :data="cData" :stripe="stripe" :border="border"
      :row-class-name="rowClassName.class || function () { return null }" :span-method="spanMethod"
      :default-expand-all="false" @select="onSelect" @select-all="onSelectAll" @selection-change="onSelectionChange"
      @row-click="onRowClick" @cell-click="onCellClick" @sort-change="onSortChange" @filter-change="onFilterChange"
      @expand-change="onExpandChange">
      <el-table-column v-for="column in columns" v-bind="getColumnProps(column)">
        <template v-if="column.children && column.type != 'action' && column.type != 'selection'" #default="scope">
          <!-- 多级表头（最多支持三级） -->
          <el-table-column v-if="column.children" v-for="column1 in column.children" v-bind="getColumnProps(column1)">

            <template v-if="column1.children" #default="scope1">
              <el-table-column v-if="column1.children" v-for="column2 in column1.children"
                v-bind="getColumnProps(column2)">
              </el-table-column>

              <span>{{ scope1.row[column1.prop] }}</span>
            </template>
          </el-table-column>

          <span>{{ scope.row[column.prop] }}</span>
        </template>

        <!-- 展开行 -->
        <template v-if="column.type == 'expand'" #default="scope">
          <slot v-if="column.type == 'expand'" name="embeded"></slot>
        </template>

        <!-- 操作按钮 -->
        <template v-if="column.type == 'action'" #default="scope">
          <el-button v-if="column.type == 'action' && isFlatAction" v-for="action in cActions"
            v-bind="getActionProps(action)" @click="action.callback(scope.row)">{{ action.name }}</el-button>

          <!-- TODO: 增加下拉选择的多按钮 -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from 'lodash';
import jp from "jsonpath";
import JSONfn from "/@/utils/jsonfn";
import {
    getAction,
    postAction,
    deleteAction,
    putAction,
} from "/@/request/http";

export default {
  name: "HmElementTable",
  components: {},
  props: {
    /**
     * 列定义
     */
    columns: {
      type: Array,
      default: function () {
        return [
          {
            type: "selection"
          },
          {
            label: "姓名",
            prop: "name",
            children: [{
              label: "姓",
              prop: "familyName",
              columnid: "familyName",
              fixed: true
            }, {
              label: "名",
              prop: "givenName",
              columnid: "givenName",
              fixed: true
            }]
          },
          {
            label: "年龄",
            prop: "age",
            columnid: "age",
            width: 80,
          },
          {
            label: "地址",
            prop: "address",
            columnid: "address",
            ellipsis: true,
          },
          {
            label: "性别",
            prop: "sexual",
            columnid: "sexual",
          },
          {
            label: "毕业院校",
            prop: "school",
            columnid: "school",
          },
          {
            label: "操作",
            type: 'action',
          },
        ];
      },
    },
    /**
     * 数据
     */
    data: {
      type: Array,
      default: function () {
        return [
          {
            id: "1",
            name: "李四",
            familyName: '李',
            givenName: '四',
            age: 32,
            address: "北京",
            sexual: "男",
            school: "加里敦大学",
          },
          {
            id: "2",
            name: "张三",
            familyName: '张',
            givenName: '三',
            age: 42,
            address: "北京",
            sexual: "男",
            school: "加里敦大学",
          },
          {
            id: "3",
            name: "王五",
            familyName: '王',
            givenName: '五',
            age: 32,
            address: "深圳",
            sexual: "男",
            school: "加里敦大学",
          },
        ];
      },
    },
    /**
     * 是否为斑马纹
     */
    stripe: {
      type: Boolean,
      default: false
    },
    /**
     * 是否纵向边框
     */
    border: {
      type: Boolean,
      default: false
    },
    /**
     * 隐藏翻页控件
     */
    paginationHidden: {
      type: Boolean,
      default: false
    },
    /**
     * 翻页参数
     */
    pagination: {
      type: Object,
      default: function () {
        return {
          current: 1,
          pageSize: 10,
        };
      },
    },
    /**
     * 显示序号列
     */
    showColumnNo: {
      type: Boolean,
      default: false
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 请求结果映射
     * @desc list为列表数据路径；total为总数路径。路径采用JSONPath格式（去掉前面的 $.）
     */
    getDataMap: {
        type: Object,
        default: function () {
            return {
                list: '',
                total: ''
            }
        }
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
     * 可选择行
     */
    rowSelectFlag: {
      type: Boolean,
      default: false,
    },
    /**
     * 带边框
     */
    bordered: {
      type: Boolean,
      default: true,
    },
    /**
     * 操作按钮
     */
    actions: {
      type: Array,
      default: function () {
        return [
          {
            name: "编辑",
            type: 'primary',
            callback: function (item) {
              console.log("点击编辑: ", item);
            },
          },
          {
            name: "删除",
            type: 'danger',
            callback: function (item) {
              console.log("点击删除: ", item);
            },
          },
        ];
      },
    },
    /**
     * 操作按钮展开
     */
    isFlatAction: {
      type: Boolean,
      default: true,
    },
    /**
     * 固定行列
     */
    scroll: {
      type: Object,
      default: function () {
        return {
          x: "100%",
        };
      },
    },
    /**
     * 合并行列方法
     */
    spanMethod: {
      type: Function,
      default: function (row, column, rowIndex, columnIndex) { }
    },
    /**
     * 清空过滤排序
     */
    clearFiltersAndSortersFlag: {
      type: Boolean,
      default: false
    },
    /**
     * 行高
     */
    rowHeight: {
      type: String,
      default: '42'
    },
    /**
     * 表格背景颜色
     * @type Color
     * */
    backgroundColor: {
      type: String,
      default: ""
    },
    /**
     * 行类名
     */
    rowClassName: {
      type: Object,
      default: function () {
        return {
          class: null
        }
      }
    }
  },
  data() {
    return {
      cData: [],
      cActions: [],
      cRowHeight: '42px',
      rowSelection: {},
      cPagination: {
        current: 1,
        pageSize: 10,
      },
      sorter: {},
      filters: {},
      cBackgroundColor: ''
    };
  },
  watch: {
    data: {
      handler: function (value, oldValue) {
        this.cData = _.cloneDeep(value);
      },
      deep: true
    },
    actions: {
      handler: function (value, oldValue) {
        console.log('watch actions');
        this.cActions = this.convertActions(value);
      },
      deep: true
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        if (JSON.stringify(value) == JSON.stringify(oldValue)) {
          // 修复相等的情况下也调用watch的bug
          return;
        }
        console.log('watch params');
        this.getData(null, value);
      },
      deep: true
    },
    rowHeight(value) {
      this.cRowHeight = this.getCssUnit(value);
    },
    backgroundColor(value) {
      this.cBackgroundColor = value;
    }
  },
  computed: {
  },
  mounted() {
    this.cData = _.cloneDeep(this.data);
    this.cActions = this.convertActions(this.actions);
    this.getData();
  },
  methods: {
    getData(url, params) {
      let self = this;
      self._getData(url, params);
    },
    _getData(url, params) {
      let self = this;
      url = url || this.url;

      if (!url) {
        return;
      }

      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});

      // 跟表格自带的翻页过滤排序功能结合
      // 翻页
      if (typeof this.cPagination !== "boolean") {
        params = Object.assign(params, {
          [this.paginationMap.pageNo]: this.cPagination.current,
          [this.paginationMap.pageSize]: this.cPagination.pageSize,
        });
      }

      // 排序
      if (this.sorter && this.sorter.field) {
        params.column = this.sorter.field;
        params.order = this.sorter.order === "descend" ? "desc" : "asc";
      }

      // 过滤
      if (this.filters) {
        params = Object.assign(params, this.filters);
        Object.entries(this.filters).forEach(e => {
          if (typeof e[1] === 'object') {
            params[e[0]] = e[1].join(",")
          }
        })
      }

      // 加载全部，默认为最多加载100万条
      if (Number.isNaN(params.pageSize)) {
        params.pageNo = 1;
        params.pageSize = 1000000;
        self.cPagination.current = 1;
        self.cPagination.pageSize = params.pageSize;
      }

      if (Number.isNaN(params.pageNo)) {
        params.pageNo = 1;
      }

      getAction(url, params).then((resp) => {
        console.log(`get table data: `, resp);
        self.cData = [];
        setTimeout(() => {
          self.cData = self.getDataList(resp);
          if (typeof self.cPagination !== "boolean") {
            self.cPagination.total = self.getDataTotal(resp);
          }
          _.each(self.cData, (item, index) => {
            item.hmNo = index + 1;
          });
        }, 0);
      });
    },
    /**
     * 从接口返回结果里取到数组
     */
    getDataList(resp) {
      if (this.getDataMap.list) {
        let listPath = this.getDataMap.list;
        listPath = listPath.indexOf('$') === 0 ? listPath : `$.${listPath}`;
        return jp.query(resp, listPath)[0];
      }

      if (resp.result) {
        return resp.result.records || resp.result;
      }

      if (resp.data) {
        return resp.data;
      }
    },
    /**
     *  从接口返回结果里取到总数
     */
    getDataTotal(resp) {
      if (this.getDataMap.total) {
        let totalPath = this.getDataMap.total;
        totalPath = totalPath.indexOf('$') === 0 ? totalPath : `$.${totalPath}`;
        return jp.query(resp, totalPath)[0];
      }
      if (resp.result) {
        return resp.result.total || this.cPagination.pageSize;
      }
      if (resp.data) {
        return resp.total || this.cPagination.pageSize;
      }
      return this.cPagination.pageSize;
    },
    onSelect(selection, row) {
      this.$emit("select", selection, row);
    },
    onSelectAll(selection) {
      this.$emit("select-all", selection);
    },
    onSelectionChange(selection) {
      this.$emit("selection-change", selection);
    },
    onRowClick(row, column, event) {
      this.$emit("row-click", row, column, event);
    },
    onCellClick(row, column, cell, event) {
      this.$emit("cell-click", row, column, cell, event);
    },
    onSortChange(row, column, cell, event) {
      this.$emit("sort-change", row, column, cell, event);
    },
    onFilterChange(row, column, cell, event) {
      this.$emit("filter-change", row, column, cell, event);
    },
    onExpandChange(row, column, cell, event) {
      this.$emit("expand-change", row, column, cell, event);
    },
    convertActions(actions) {
      let ret = [];
      _.each(actions, (action) => {
        if (
          action.callback &&
          typeof action.callback === "string" &&
          action.callback.indexOf("function") === 0
        ) {
          try {
            action.callback = eval(`(${action.callback})`);
          } catch (error) {
            console.error('action.callback error: ', action);
          }
        }
        ret.push(action);
      });
      return ret;
    },
    getActionProps(action) {
      let actionProps = _.cloneDeep(action);
      delete actionProps.callback;
      return actionProps;
    },
    getColumnProps(column) {
      let columnProps = _.cloneDeep(column);
      if (columnProps.children) {
        delete columnProps.children;
      }
      return columnProps;
    },
    /**
     * 单元格渲染函数
     * @param {*} column 
     * @param {*} data 
     */
    getCustomRender(row, column, data, index) {
      if (column.formatter) {
        return column.formatter(row, column, data, index);
      }
      return `<span>${data[column.prop]}</span>`;
    }
  },
};
</script>

<style scoped>
.table-div {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;
  width: 100%;
}
</style>