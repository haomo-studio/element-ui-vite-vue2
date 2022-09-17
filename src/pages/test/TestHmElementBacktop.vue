<template>
  <div class="wrap">
    这是回到顶部
    <HmElementBacktop :right="100" :bottom="50" :visibility-height="200"></HmElementBacktop>
  </div>
</template>

<script>
import HmElementBacktop from "/@/components/built-in/element-vue2/HmElementBacktop.vue";
export default {
  components: {
    HmElementBacktop,
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>
.wrap {
  height: 1000px;
  width: 100%;
}
</style>
