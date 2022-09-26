<template>
  <el-tooltip
    class="item"
    :effect="effect"
    :content="content"
    :placement="placement"
    :offset="offset"
    :disabled="disabled"
    :transition="transition"
    :open-delay="openDelay"
    :popper-class="popperClass"
    :hide-after="hideAfter"
    :enterable="enterable"
  >
    <el-button>{{ text }}</el-button>
  </el-tooltip>
</template>

<script>
export default {
  name:"HmElementTooltip",
  props: {
    /**
     * 文本内容
     */
    text: {
      type: String,
      default: "tooltip will appear",
    },
    /**
     * 主题
     * @type Enum
     * @options ["dark","light"]
     */
    effect: {
      type: String,
      default: "dark",
    },
    /**
     *提示内容
     */
    content: {
      type: String,
      default: "提示内容",
    },
    /**
     * 提示出现位置
     * @type Enum
     * @options ["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right-start","right-end","right",]
     */
    placement: {
      type: String,
      default: "bottom",
    },
    /**
     * 位置的偏移量
     */
    offset: {
      type: Number,
      default: 0,
    },
    /**
     * 定义渐变动画
     */
    transition: {
      type: String,
      default: "el-fade-in-linear",
    },
    /**
     * 延迟出现
     */
    openDelay: {
      type: Number,
      default: 0,
    },
    /**
     *  添加类名
     */
    popperClass: {
      type: String,
      default: "",
    },
    /**
     * 延迟隐藏
     */
    hideAfter: {
      type: Number,
      default: 0,
    },
     /**
     * 鼠标是否可进入
     */
     enterable: {
      type: Boolean,
      default: true,
    },
     /**
     *是否可用
     */
     disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>