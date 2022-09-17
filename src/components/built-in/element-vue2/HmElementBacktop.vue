<template>
  <div>
    <el-backtop
      :target="target"
      :right="right"
      :bottom="bottom"
      :visibility-height="visibilityHeight"
      @click="onClick"
    ></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'HmElementBacktop',
  props: {
          /**
     * 触发滚动对象
     */
    target: {
      type: String,
      default: "",
    },
    /**
     * 出现参数值
     */
    visibilityHeight: {
      type: Number,
      default: 100,
    },
    /**
     * 右边距
     */
    right: {
      type: Number,
      default: 40,
    },
    /**
     * 底部距离
     */
    bottom: {
      type: Number,
      default: 40,
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style lang="less" scoped>
</style>
