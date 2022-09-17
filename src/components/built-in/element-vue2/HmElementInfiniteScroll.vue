<template>
  <ul
    v-infinite-scroll="load"
    :infinite-scroll-disabled="infiniteScrollDisabled"
    :infinite-scroll-delay="infiniteScrollDelay"
    :infinite-scroll-distance="infiniteScrollDistance"
    :infinite-scroll-immediate="infiniteScrollImmediate"
  >
 
  </ul>
</template>
<script>
export default {
  name: "HmElementInfiniteScroll",
  props: {
          /**
     * 是否禁用
     */
    infiniteScrollDisabled: {
      type: Boolean,
      default: false,
    },
       /**
     * 节流时延
     */
    infiniteScrollDelay: {
      type: Number,
      default: 200,
    },
         /**
     * 	触发加载距离
     */
    infiniteScrollDistance: {
      type: Number,
      default: 0,
    },
        /**
     * 是否立即加载
     */
    infiniteScrollImmediate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      count: 0
    };
  },

  methods: {
 load () {
        this.count += 2
      }
  },
};
</script>
<style scoped>
</style>