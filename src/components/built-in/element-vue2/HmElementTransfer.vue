<template>
  <el-transfer
    v-model="cValue"
    :data="data"
    :filterable="filterable"
    :sifilter-placeholderze="filterPlaceholder"
    :filter-method="filterMethod"
    :target-order="targetOrder"
    :titles="titles"
    :button-texts="buttonTexts"
    :format="format"
    :right-default-checked="rightDefaultChecked"
    :left-default-checked="leftDefaultCecked"
    @clearQuery="onClearQuery"
  ></el-transfer>
</template>

<script>
export default {
  name: "HmElementTransfer",
  props: {
    /**
     * Transfer数据源
     */
     data: {
      type: Array[{ key, label, disabled }],
      default: [],
    },
    /**
     * 是否可搜索
     */
     filterable: {
      type: Boolean,
      default:false
    },
    /**
     * 搜索方法
     *
     */
     filterMethod: {
      type: Function,
    },
    /**
     * 搜索框占位符
     */
     filterPlaceholder: {
      type: String,
      default:'请输入搜索内容'
    },
      /**
     * 排序策略
     * @type Enum
     * @options ["original","push", "unshift"]
     */
     targetOrder: {
      type: String,
      default:'original'
    },
    /**
     * 自定义列表标题
     */
     titles: {
      type: Array,
      default: ['列表 1', '列表 2'],
    },
    /**
     * 自定义按钮文案
     */
     buttonTexts: {
      type: Array,
      default: [],
    },
    /**
     * 列表顶部勾选
     */
     format: {
      type: Object,
      default:  {noChecked: '${checked}/${total}'},
    },
    
    /**
     * 左侧列表已勾选项
     */
    leftDefaultCecked:{
      type: Array,
      default: [],
    },
    /**
     * 右侧列表已勾选项
     */
     rightDefaultChecked: {
      type: Array,
      default: [],
    },
   
  },
  data() {
    return {
      cValue:[],
    };
  },
  watch:{
    vModel(value){
          this.cValue = value
      },
  },
  methods: {
    onClearQuery: function (left) {
      this.$emit("clearQuery", left);
    },
    onClearQuery: function (right) {
      this.$emit("clearQuery", right);
    },
  },
};
</script>
<style scoped></style>
