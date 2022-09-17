<template>
  <div>
    <HmElementPageheader title="这是一个标题" content="这是内容部分" @back="onBack"></HmElementPageheader>
  </div>
</template>

<script>
import HmElementPageheader from "/@/components/built-in/element-vue2/HmElementPageheader.vue";
export default {
  components: {
    HmElementPageheader,
  },
  data() {
    return {
    };
  },
  methods: {
onBack(e) {
      this.$emit('back',e)
      console.log("点击");
      
    },
  },
};
</script>

<style></style>
