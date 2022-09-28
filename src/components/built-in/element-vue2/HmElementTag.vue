<template>
  <div>
    <el-tag
      v-for="(item, index) in cTags"
      class="alTags"
      :key="index"
      :type="type"
      :closable="closable"
      :disable-transitions="disableTransitions"
      :hit="hit"
      :color="color"
      :size="size"
      :effect="effect"
      @click="onClick(item, index)"
      @close="onClose(item, index)"
    >{{ item }}</el-tag>
  </div>
</template>

<script>
export default {
  name: "HmElementTag",
  props: {
    /**
     * 数据
     */
    tags: {
      type: Array,
      default: function() {
        return ["Tag 1", "Tag 2", "Tag 3"];
      }
    },
    /**
     * 类型
     * @type Enum
     * @options ["success","info ","warning","danger"]
     */
    type: {
      type: String,
      default: "success"
    },
    /**
     * 是否可关闭
     */
    closable: {
      type: Boolean,
      default: false
    },
    /**
     * 边距
     */
    margin: {
      type: String,
      default: "10px"
    },
    /**
     * 是否禁用渐变
     */
    disableTransitions: {
      type: Boolean,
      default: false
    },
    /**
     * 是否边框描边
     */
    hit: {
      type: Boolean,
      default: false
    },
    /**
     * 背景色
     */
    color: {
      type: String,
      default: ""
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
     * 主题
     * @type Enum
     * @options ["dark","light","plain"]
     */
    effect: {
      type: String,
      default: "dark"
    }
  },
  data() {
    return {
      cTags: [],
      cMargin: ""
    };
  },
  mounted() {
    this.cTags = this.tags;
    this.cMargin = this.margin;
  },
  watch: {
    tags: {
      handler: function(value, oldValue) {
        this.cTags = value;
      },
      deep: true
    },
    margin(value) {
      this.cMargin = getCssUnit(value);
    }
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onClick(item, index) {
      //console.log(item, index);
      this.$emit("click", { item, index });
    },
    onClose(item, index) {
      //console.log(item, index);
      this.cTags.splice(this.cTags.indexOf(item), 1);
      this.$emit("close", { item, index });
    }
  }
};
</script>

<style lang="less" scoped>
.alTags {
  margin-left: v-bind(cMargin);
}
</style>