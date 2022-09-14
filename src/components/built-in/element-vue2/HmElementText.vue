<template>
  <div class="hm-bg-text">
    <span @click="onClick">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "HmElementText",
  components: {},
  props: {
    /**
     * 文字
     */
    text: {
      type: String,
      default: "文字",
    },
    /**
     * 文字大小
     */
    fontSize: {
      type: String,
      default: "20px",
    },

    /**
     * 文字颜色
     * @type Color
     */
    color: {
      type: String,
      default: "rgba(0,0,0,1)",
    },
    /**
     * 对齐
     * @type Enum
     * @options ["left", "center", "right"]
     */
    textAlign: {
      type: String,
      default: "center",
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: "5",
    }
  },
  data() {
    return {
      cPadding: "5px",
      cTextAlign: "left",
      cFontSize: "18px",
      cColor: "rgba(0,0,0,1)",
    };
  },
  watch: {
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    fontSize(value) {
      this.cFontSize = this.getCssUnit(value);
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    color(value) {
      this.cColor = value;
    }
  },
  computed: {},
  mounted() {
    this.cPadding = this.getCssUnit(this.padding);
    this.cFontSize = this.getCssUnit(this.fontSize);
    this.cTextAlign = this.textAlign;
    this.cColor = this.color;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick() {
      //console.log("click");
      this.$emit("onClick");
    },
  },
};
</script>

<style scoped>
.hm-bg-text {
  display: inline-flex;
  padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
  font-size: v-bind(cFontSize);
  color: v-bind(cColor);
}
</style>