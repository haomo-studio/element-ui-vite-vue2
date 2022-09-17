<template>
  <div>
    <HmElementSkeleton :animated="true" :count="1" :loading="true" :rows="4" :throttle="0">
      <template slot="template">
        <el-skeleton-item variant="image" />
        <el-skeleton-item variant="text" style="margin-right: 16px;" />
        <el-skeleton-item variant="text" style="width: 30%;" />
      </template>
    </HmElementSkeleton>
  </div>
</template>

<script>
import HmElementSkeleton from "/@/components/built-in/element-vue2/HmElementSkeleton.vue";
export default {
  components: {
    HmElementSkeleton,
  },
  data() {
    return {
    };
  },
  methods: {
  
  },
};
</script>

<style></style>
