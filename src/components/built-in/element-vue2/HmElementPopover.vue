<template>
  <el-popover
  :trigger="trigger"
  :placement="placement"
    :title="title"
    :content="content"
    :width="width"
    :disabled="disabled"
    :v-model="cValue"
    :offset="offset"
    :transition="transition"
    :visible-arrow="visibleArow"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    @show="show"
    @after-enter="afterEnter"
    @hide="hide"
    @after-leave="afterLeave"
  >
      <el-button slot="reference">{{text}}</el-button>
  </el-popover>
</template>

<script>
export default {
  name: "HmElementPopover",
  props: {
    /**
     * 按钮文字
     */
     text: {
      type: String,
      default: "激活",
    },
    /**
     * 触发方式
     */
     trigger: {
      type: String,
      default: "click",
    },
    /**
     * 出现位置
     */
     placement: {
      type: String,
      default: "bottom",
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "标题",
    },
    /**
     * 显示的内容
     */
     content	: {
      type: String,
      default: "这是一段内容",
    },
    /**
     * 宽度
     */
     width: {
      type: String,
      default: "150px",
    },
    /**
     * 是否可用
     */
     disabled: {
      type: Boolean,
      default: false,
    },
   /**
     * 状态是否可见
     * @model
     */
     value: {
      type: Boolean,
      default: false,
    },
    /**
     * 位置的偏移量
     */
     offset: {
      type: Number,
      default: -200,
    },
    /**
     * 定义渐变动画
     */
     transition: {
      type: String,
      default: "fade-in-linear",
    },
     /**
     * 是否显示箭头
     */
     visibleArow: {
      type: Boolean,
      default: true,
    },
    /**
     *显示延迟
     */
     openDelay: {
      type: Number,
      default: 0,
    },
    /**
     *隐藏延迟
     */
     closeDelay: {
      type: Number,
      default: 200,
    },
  },
  data() {
    return {
      cValue:"",
      visible: false,
    };
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
  },
  mounted() {
    this.cValue = this.value;
  },
  methods: {
    show(e) {
      this.$emit("show", e);
    },
    afterEnter(e) {
      this.$emit("after-enter", e);
    },
    hide(e) {
      this.$emit("hide", e);
    },
    afterLeave(e) {
      this.$emit("after-leave", e);
    },
  },
};
</script>

<style scoped>
</style>