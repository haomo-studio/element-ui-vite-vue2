<template>
  <div>
    <hm-element-badge></hm-element-badge>
    <hm-element-badge
      :value="88"
      :max="99"
      :isDot="false"
      :hidden="false"
      type="primary"
    ></hm-element-badge>
    <hm-element-badge
      :value="800"
      :max="99"
      :isDot="true"
      :hidden="false"
      type="success"
    ></hm-element-badge>
  </div>
</template>

<script>
import HmElementBadge from '/@/components/built-in/element-vue2/HmElementBadge.vue'
export default {
  components: { HmElementBadge },
}
</script>

<style lang="less" scoped></style>
