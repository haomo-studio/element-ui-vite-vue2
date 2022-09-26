<template>
  <div class="page">
    <div class="title">{{title}}</div>
    <el-cascader
      :options="options"
      v-model="Model"
      :props="props"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :clearable="clearable"
      :show-all-levels="showAllLevels"
      :collapse-tags="collapseTags"
      :separator="separator"
      :filterable="filterable"
      :debounce="debounce"
      :popperClass="popperClass"
      @change="onChange"
      @expand-change="expandChange"
      @blur="onblur"
      @focus="onFocus"
      @visible-change="expandChange"
      @remove-tag="removeTag"
      @getCheckedNodes="onGetCheckedNodes"
    ></el-cascader>
  </div>
</template>

<script>
export default {
  name: "HmElementCascader",
  props: {
    /**
     * 默认值
     * @model
     */
    vModel: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
        type: String,
        default: "级联选择器："
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请选择",
    },
    /**
     * 大小
     * @type Enum
     * @options ["medium","small","mini"]
     */
    size: {
      type: String,
    },
    
    /**
     * 	是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 	是否支持清空选项
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * 	输入框中是否显示选中值的完整路径
     */
    showAllLevels: {
      type: Boolean,
      default: true,
    },
    /**
     * 多选模式下是否折叠Tag
     */
    collapseTags: {
      type: Boolean,
      default: false,
    },
    /**
     * 选项分隔符
     */
    separator: {
      type: String,
      default: "/",
    },
    /**
     * 是否可搜索选项
     */
    filterable: {
      type: Boolean,
    },
    /**
     * 搜索关键词输入的去抖延迟(毫秒)
     */
    debounce: {
      type: Number,
      default: 300,
    },
    /**
     * 自定义浮层类名
     */
    popperClass: {
      type: String,
    },
    /**
     * 数据源
     */
    options: {
        type: Array,
        default:()=> [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ]
    },
    /**
     * 配置选项
     */
     props: {
      type: Object,
      default: function () {
        return {
          expandTrigger: 'hover'
        };
       }
      }
 
  },
  data() {
    return {
      Model:[]
    };
  },
  watch: {
      vModel(value){
          this.Model = value
      },
      Model(val){
        this.$emit("getStr",val)
      }
  },
  methods: {
    onChange:function (e) {
      this.$emit("change",e)
    },
    expandChange:function(e){
      this.$emit("expandChange",e)
    },
    onblur:function (e) {
      this.$emit("blur",e)
    },
    onFocus:function(e){
      this.$emit("focus",e)
    },
    expandChange:function (e) {
      this.$emit("expandChange",e)
    },
    removeTag:function (e) {
      this.$emit("removeTag",e)
    },
    onGetCheckedNodes:function (leafOnly) {
      this.$emit("getCheckedNodes",leafOnly)
    }
  },
};
</script>

<style scoped>
</style>