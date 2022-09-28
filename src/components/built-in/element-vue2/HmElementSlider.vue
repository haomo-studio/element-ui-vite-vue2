<template>
  <div>
  <el-slider
  v-model="cValue"
    :min="min"
    :max="max"
    :disabled="disabled"
    :step="step"
    :show-input="showInput"
    :show-input-controls="showInputControls"
    :input-size="inputSize"
    :show-stops="showStops"
    :show-tooltip="showTooltip"
    :range="range"
    :vertical="vertical"
    :height="height"
    :debounce="debounce"
    @change="onChange"
    @input="onInput"
  ></el-slider>
</div>
</template>

<script>


export default {
  name: "HmElementSlider",
  props: {
     /**
     * 默认值
     * @model
     */
     value: {
      type: Number,
    },
    /**
     * 最小值
     */
     min: {
      type: Number,
      default: 0
    },
    /**
     * 最大值
     */
     max: {
      type: Number,
      default:100
    },
    /**
     * 是否禁用
     */
     disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 步长
     */
     step: {
      type: Number,
      default: 1
    },
    /**
     * 显示输入框
     */
     showInput: {
      type: Boolean,
      default: false
    },
    /**
     * 控制按钮
     */
     showInputControls: {
      type: Boolean,
      default: true
    },
    /**
     * 输入框的尺寸
     * @type Enum
     * @options ["large","medium","small","mini"]
     */
     inputSize: {
      type: String,
      default: 'small'
    },
     /**
     * 显示间断点
     */
     showStops: {
      type: Boolean,
      default: false
    },
     /**
     * 显示 tooltip
     */
     showTooltip: {
      type: Boolean,
      default: true
    },
    /**
     * 竖向模式
     */
     vertical: {
      type: Boolean,
      default: false
    },
    /**
     * 范围选择
     */
     range: {
      type: Boolean,
      default: false
    },
  
    /**
     *高度
     */
     height: {
      type: String,
      default: ''
    },
    /**
     *去抖延迟
     */
     debounce: {
      type: Number,
      default: 300
    },
  },
  data(){
    return{
      cValue:0,
    };
  },
watch:{
value(val){
  this.cValue=val
}
},
  methods: {
    onChange(){
      this.$emit("change");
    },
    onInput(){
      this.$emit("input");
    }
  }
};
</script>

<style lang="less" scoped>
</style>