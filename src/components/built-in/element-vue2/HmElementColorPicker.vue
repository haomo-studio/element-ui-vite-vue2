<template>
  <div>
    <el-color-picker
      v-model="cValue"
      :disabled="disabled"
      :size="size"
      :show-alpha="showAlpha"
      :color-format="colorFormat"
      :popper-class="popperClass"
      :predefine="predefine"
      @change="onChange"
      @active-change="onActiveChange"
    ></el-color-picker>
  </div>
</template>
<script>
export default {
  name: "HmElementColorPicker",
  props: {
    /**
     * 绑定值
     * @model
     */
     value: {
      type: String,
      default: "",
    },
        /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
        /**
     * 尺寸
     * @type Enum
     * @options ["medium","small","mini"]
     */
    size: {
      type: String,
       default: "medium"
    },
        /**
     * 是否支持透明
     */
    showAlpha: {
      type: Boolean,
      default: false,
    },
            /**
     * 颜色的格式
     * @type Enum
     * @options ["hsl","hsv","hex","rgb"]
     */
    colorFormat: {
      type: String,
       default: "hex"
    },
    /**
     * 下拉框的类名
     */
    popperClass: {
      type: String,
      default: "",
    },
       /**
     * 预定义颜色
     */
    predefine: {
      type: Array,
      default:function (){
          return []
      }
    },
  },
  data() {
    return {
      cValue:"",
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
     onChange(e) {
      this.$emit("change", e);
         
    },
    onActiveChange(e) {
      this.$emit("activeChange", e);
      
    },
  },
};
</script>
<style scoped>
</style>