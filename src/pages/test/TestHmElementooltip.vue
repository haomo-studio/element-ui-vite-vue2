<template>
  <div>
    <HmElementTooltip
      effect="appear"
      content="提示内容"
      placement="top"
      :offset="30"
      :disabled="false"
      :open-delay="5"
      :hide-after="5"
      :enterable="false"
    >
      11111
    </HmElementTooltip>
  </div>
</template>

<script>
import HmElementTooltip from '/@/components/built-in/element-vue2/HmElementTooltip.vue'
export default {
  components: {
    HmElementTooltip,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
