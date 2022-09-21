<template>
  <div class="content">
    <el-input
      v-model:value="cValue"
      :type="type"
      :maxlength="maxlength"
      :minlength="minlength"
      :show-word-limit="showWordLimit"
      :placeholder="placeholder"
      :clearable="clearable"
      :show-password="showPassword"
      :size="size"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :rows="rows"
      :autosize="autosize"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :readonly="readonly"
      @blur="onBlur"
      @focus="onFocus"
      @change="onChange"
      @input="onInput"
      @clear="onClear"
      @select="onSelect"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "HmElementInput",
  props: {
    /**
     * 输入值
     * @model
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * 类型
     * @type Enum
     * @options ["text","textarea"]
     */
    type: {
      type: String,
      default: "text",
    },
    /**
     * 提示信息
     */
    placeholder: {
      type: String,
      default: "提示文字",
    },
    /**
     * 最大长度
     */
    maxlength: {
      type: String,
    },
    /**
     * 最小长度
     */
    minlength: {
      type: String,
    },
    /**
     * 显示字数统计
     */
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否可清空
     */
    clearable: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示密码图标
     */
    showPassword: {
      type: Boolean,
      default: false,
    },
    /**
     * 输入框尺寸
     * @type Enum
     * @options ["medium","small", "mini"]
     */
    size: {
      type: String,
    },
    /**
     * 前缀图标
     */
    prefixIcon: {
      type: String,
    },
    /**
     * 后缀图标
     */
    suffixIcon: {
      type: String,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 输入框行数
     */
    rows: {
      type: Number,
      default: 2,
    },
    /**
     * 自适应高度
     */
    autosize: {
      type: Boolean,
      default: false,
    },
    /**
     * 自动补全
     * @type Enum
     * @options ["on","off"]
     */
    autocomplete: {
      type: String,
      default: "off",
    },
    /**
     * 是否只读
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: "260",
    },
  },
  data() {
    return {
      cValue: "",
      cWidth: "260px",
    };
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cValue = this.value;
    this.cWidth = this.getCssUnit(this.width);
  },
  methods: {
    onBlur: function (e) {
      this.$emit("blur", e);
    },
    onChange: function (e) {
      this.$emit("change", e);
      this.$emit("update:value", this.cValue);
      console.log("change", this.cValue);
    },
    onInput: function (e) {
      this.$emit("update:value", this.cValue);
      this.$emit("oninput", e);
      console.log("oninput", this.cValue);
    },
    onClear: function (e) {
      this.$emit("clear", e);
    },
    onFocus: function (e) {
      this.$emit("focus", e);
    },
    onSelect: function (e) {
      this.$emit("select", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style scoped>
.content {
  width: v-bind(cWidth);
}
</style>
