<template>
  <div>
    <el-empty :image="image" :image-size="imageSize" :description="description">
    </el-empty>
  </div>
</template>

<script>
export default {
  name: "HmElementEmpty",
  props: {
    /**
     * 图片地址
     */
    image: {
      type: String,
      default:
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
    },
    /**
     * 图片大小
     */
    imageSize: {
      type: Number,
      default: 0,
    },
    /**
     * 图片描述
     */
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
</style>
