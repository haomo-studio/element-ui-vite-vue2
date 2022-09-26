<template>
<div>
  <Hm-Element-Tag></Hm-Element-Tag>
  <Hm-Element-Tag
    type="success"
    :closable="true"
    :disable-transitions="false"
    :hit="true"
    color="#f56c6c"
    size="medium"
    effect="light"
    :tags="tags"
  ></Hm-Element-Tag>
</div>
</template>

<script>
import HmElementTag from "/@/components/built-in/element-vue2/HmElementTag.vue";

export default {
  components: {
    HmElementTag,
  },
  data() {
    return {
      tags: ["Tag 1", "Tag 2", "Tag 3"],
    };
  },
};
</script>

<style scoped>
</style>