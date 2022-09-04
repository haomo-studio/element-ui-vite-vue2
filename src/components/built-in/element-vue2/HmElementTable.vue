<template>
  <div class="table-div">
    <el-table
      row-key="id"
      :scroll="scroll"
      :data="cData"
      :stripe="stripe"
      :border="border"
      :row-class-name="rowClassName.class || function () { return null }"
      :span-method="spanMethod"
      :default-expand-all="false"
      @select="onSelect"
      @select-all="onSelectAll"
      @selection-change="onSelectionChange"
      @row-click="onRowClick"
      @cell-click="onCellClick"
      @sort-change="onSortChange"
      @filter-change="onFilterChange"
      @expand-change="onExpandChange"
    >
      <el-table-column v-for="column in columns" v-bind="getColumnProps(column)">
        <template v-if="column.children && column.type != 'action' && column.type != 'selection'" #default="scope">
          <!-- 多级表头（最多支持三级） -->
          <el-table-column v-if="column.children" v-for="column1 in column.children" 
            v-bind="getColumnProps(column1)">

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
          <el-button
            v-if="column.type == 'action' && isFlatAction"
            v-for="action in cActions"
            v-bind="getActionProps(action)"
            @click="action.callback"
          >{{ action.name }}</el-button>

          <!-- TODO: 增加下拉选择的多按钮 -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import _ from 'lodash';

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
      default: function (row, column, rowIndex, columnIndex) {}
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
  },
  methods: {
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