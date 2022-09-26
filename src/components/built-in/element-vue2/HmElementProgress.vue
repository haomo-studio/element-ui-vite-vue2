<template>
  <div>
  <el-progress
    :percentage="initPercentage"
    :type="type"
    :stroke-width="strokeWidth"
    :text-inside="textInside"
    :status="status"
    :color="color"
    :width="width"
    :format="format"
    :show-text="showText"
    :indeterminate="indeterminate"
    :duration="duration"
    @close="onClose"
  ></el-progress>
</div>
</template>

<script>
export default {
  name: "HmElementProgress",
  props: {
    /**
     * 进度值
     */
    percentage: {
      type: Number,
      default: 50
    },
    /**
     * 环形画布宽度
     */
     width: {
      type: Number,
      default: 126
    },
    /**
     * 类型
     * @type Enum
     * @options ["line","circle","dashboard"]
     */
    type: {
      type: String,
      default: "line"
    },
    /**
     * 宽度
     */
    strokeWidth: {
      type: Number,
      default: 10
    },
    /**
     * 是否文字内置
     */
    textInside: {
      type: Boolean,
      default: false
    },
    /**
     * 是否显示文字
     */
    showText: {
      type: Boolean,
      default: true
    },
    /**
     * 颜色
     */
    color: {
      type: Array,
      default: function() {
        return [
          { color: "#f56c6c", percentage: 20 },
          { color: "#e6a23c", percentage: 40 },
          { color: "#5cb87a", percentage: 60 },
          { color: "#1989fa", percentage: 80 },
          { color: "#6f7ad3", percentage: 100 }
        ];
      }
    },
    /**
     * 状态
     * @type Enum
     * @options ["","success","exception","warning"]
     */
    status: {
      type: String,
      default: "success"
    },
    /**
     *动画进度条
     */
    indeterminate: {
      type: Boolean,
      default: true
    },
    /**
     *动画速度
     */
    duration: {
      type: Number,
      default: 10
    },
    /**
     *自定义文字
     */
    formatText: {
      type: Object,
      default: function() {
        return {
          progressing: "%",
          finish: "Full"
        };
      }
    }
  },
  computed: {
    initPercentage() {
      return this.percentage >= 1 && this.percentage <= 100
        ? this.percentage
        : this.percentage > 100
        ? 100
        : 0;
    }
  },
  methods: {
    onClose(){
      this.$emit("close");
    },
    format(percentage) {
      return percentage == 100
        ? this.formatText.finish
        : percentage + this.formatText.progressing;
    }
  }
};
</script>

<style lang="less" scoped>
</style>