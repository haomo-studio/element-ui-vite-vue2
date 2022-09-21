<template>
  <div>
    <el-skeleton
      :animated="animated"
      :count="count"
      :loading="loading"
      :rows="rows"
      :throttle="throttle"
    >
      <template slot="template">
        <el-skeleton-item :variant="variant" />
      </template>
    </el-skeleton>
  </div>
</template>
<script>
export default {
  name: "HmElementSkeleton",
  props: {
  /**
     * 是否使用动画
     */
    animated: {
      type: Boolean,
      default: false,
    },
      /**
     * 渲染多少模板
     */
    count: {
      type: Number,
      default: 1,
    },
     /**
     * 是否显示骨架
     */
    loading: {
      type: Boolean,
      default: true,
    },
         /**
     * 段落数量
     */
    rows: {
      type: Number,
      default: 5,
    },
         /**
     * 延迟占位时间
     */
    throttle: {
      type: Number,
      default: 0,
    },
          /**
     * 占位元素样式
     * @type Enum
     * @options ["p","text","h1","h3","text","caption","button","image","circle","rect"]
     */
    variant: {
      type: String,
       default: "text"
    },
  },
  methods: {
     
  },
};
</script>
<style scoped>
</style>