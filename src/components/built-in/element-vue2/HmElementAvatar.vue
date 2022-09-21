<template>
  <div>
    <el-avatar
      :icon="icon"
      :size="size"
      :shape="shape"
      :src="src"
      :srcSet="srcSet"
      :alt="alt"
      :fit="fit"
      @error="errorHandler"
    >
      <template #default>
        <slot></slot>
      </template>
    </el-avatar>
  </div>
</template>
<script>
export default {
  name: "HmElementAvatar",
  props: {
      /**
     * 头像图标类型
     */
    icon: {
      type: String,
      default: "el-icon-user-solid",
    },
      /**
     * 头像的大小
     * @type Enum
     * @options ["number","large","medium","small"]
     */
    size: {
      type: String,
       default: "large"
    },
   /**
     * 头像的形状
     * @type Enum
     * @options ["circle","square"]
     */
    shape: {
      type: String,
       default: "circle"
    },
     /**
     * 图片头像地址
     */
    src: {
      type: String,
      default: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    },
          /**
     * 逗号分隔图像
     */
    srcSet: {
      type: String,
      default: "",
    },
         /**
     * 图像替换文本
     */
    alt: {
      type: String,
      default: "",
    },
          /**
     * 图片自适应
     * @type Enum
     * @options ["fill","contain","cover","none","scale-down"]
     */
    fit: {
      type: String,
       default: "cover"
    },
  },
  methods: {
     errorHandler(e) {
      this.$emit("error", e);
    },
  },
};
</script>
<style scoped>
</style>