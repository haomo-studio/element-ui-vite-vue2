<template>
  <div>
    <HmElementAvatar
      icon="el-icon-user-solid"
      size="medium"
      shape="square"
      src="http://img.wxcha.com/m00/f0/f5/5e3999ad5a8d62188ac5ba8ca32e058f.jpg"
      srcset="srcset"
      alt="alt"
      fit="cover"
      @error="errorHandler"
    ></HmElementAvatar>
  </div>
</template>

<script>
import HmElementAvatar from "/@/components/built-in/element-vue2/HmElementAvatar.vue";
export default {
  components: {
    HmElementAvatar,
  },
  data() {
    return {
    };
  },
  methods: {
  errorHandler(e) {
      this.$emit("error", e);
    },
  },
};
</script>

<style></style>
