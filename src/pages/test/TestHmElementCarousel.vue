<template>
  <div>
    <HmElementCarousel
    height="200px"
    :initial-index="1"
    trigger="click"
    :autoplay="true"
    :interval="1000"
    indicator-position="none"
    arrow="hover"
    type="card"
    :loop="false"
    direction="vertical"
    @change="onChange()"
    ><el-carousel-item v-for="(item, index) in imgList" :key="index">
      <img :src="item" />
    </el-carousel-item>
  </HmElementCarousel>
  </div>
</template>

<script>
import HmElementCarousel from '/@/components/built-in/element-vue2/HmElementCarousel.vue'
export default {
  components: {
    HmElementCarousel
  },
  props:{
    imgList: {
      type: Array,
      default: function() {
        return [
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F111R0144Z0%2F20111Q44Z0-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=9fbdefb221691a5f11a8aaf2a3f6ae56",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F022221105922%2F210222105922-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=8abdb7284aa21e05169e4bd377f80574",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F011621113142%2F210116113142-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=4d40d86c82c09d98e509aaad0aefee2a",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F050221114535%2F210502114535-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=db51ae291ec9b0e412183496be2cddc0"
        ];
      }
    },
  },
  data() {
    return {
      cHeight: ""
    };
  },
  mounted() {
    this.cHeight = this.getCssUnit(this.height);
  },
  watch: {
    height(value) {
      this.cHeight = this.getCssUnit(value);
    }
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  }
}
</script>

<style>

</style>