<template>
  <div>
    <HmElementColorPicker
      v-model="color"
      :disabled="false"
      size="small"
      :show-alpha="false"
      color-format="hsl"
      popper-class="popperClass"
      :predefine="predefine"
    ></HmElementColorPicker>
  </div>
</template>

<script>
import HmElementColorPicker from "/@/components/built-in/element-vue2/HmElementColorPicker.vue";
export default {
  components: {
    HmElementColorPicker,
  },
  data() {
    return {
        color: 'rgba(255, 69, 0, 0.68)',
        predefine:[ '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',]
    };
  },
  methods: {
  
  },
};
</script>

<style></style>
