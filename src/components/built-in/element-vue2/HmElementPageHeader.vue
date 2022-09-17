<template>
  <div>
    <el-page-header
      :title="title"
      :content="content"
      @back="onBack"
    >
    <template slot="title"></template>
    <template slot="content"></template>
    </el-page-header>
  </div>
</template>
<script>
export default {
  name: 'HmElementPageheader',
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "返回",
    },
    /**
     * 内容
     */
    content: {
      type: String,
      default: "内容",
    },
  },
  methods: {
    onBack(e) {
      this.$emit('back',e)
    },
  },
}
</script>
<style lang="less" scoped>

</style>
