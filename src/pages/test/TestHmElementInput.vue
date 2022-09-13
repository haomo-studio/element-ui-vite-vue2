<template>
  <div>
    <HmElementInput
      type="textarea"
      maxlength=200
      minlength=0
      :show-word-limit=true
      placeholder="占位文本"
      :clearable=true
      :show-password=false
      size="mini"
      prefix-icon="el-icon-search"
      suffix-icon="el-icon-edit"
      :rows="4"
      :autosize=false
      autocomplete="on"
      :disabled=false
      :readonly=false
    ></HmElementInput>
  </div>
</template>

<script>
import HmElementInput from "/@/components/built-in/element-vue2/HmElementInput.vue";
export default {
  components: {
    HmElementInput,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
