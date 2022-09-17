<template>
  <div>
     <ul
    v-infinite-scroll="load"
    :infinite-scroll-disabled="false"
    :infinite-scroll-delay="500"
    :infinite-scroll-distance="20"
    :infinite-scroll-immediate="true"
  >
    <li v-for="(i,index) in count" :key="index">{{ i }}</li>
  </ul>
  </div>
</template>

<script>
import HmElementInfiniteScroll from "/@/components/built-in/element-vue2/HmElementInfiniteScroll.vue";
export default {
  components: {
    HmElementInfiniteScroll,
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

<style></style>
