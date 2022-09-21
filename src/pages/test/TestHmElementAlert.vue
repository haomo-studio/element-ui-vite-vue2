<template>
  <div>
    <HmElementAlert
      title="这是一个标题"
      type="error"
      description="这是一个辅助性文字"
      :closable="true"
      :center="true"
      close-text="关闭"
      :show-icon="true"
      effect="dark"
      @close="onClose"
    >
      <template #title>
        <slot>这是一个新的标题</slot>
      </template>
    </HmElementAlert>
  </div>
</template>

<script>
import HmElementAlert from "/@/components/built-in/element-vue2/HmElementAlert.vue";
export default {
  components: {
    HmElementAlert,
  },
  data() {
    return {
    };
  },
  methods: {
  onClose: function (e) {
      this.$emit("close", e);
    },
  },
};
</script>

<style></style>
