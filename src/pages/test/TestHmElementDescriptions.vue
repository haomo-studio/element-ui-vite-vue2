<template>
  <div>
    <Hm-Element-Descriptions></Hm-Element-Descriptions>
    <Hm-Element-Descriptions
      title="这是一个用户信息"
      :border="false"
      :column="2"
      direction="horizontal"
      :colon="true"
      :testList="testList"
    ></Hm-Element-Descriptions>
  </div>
</template>

<script>
import HmElementDescriptions from "/@/components/built-in/element-vue2/HmElementDescriptions.vue";

export default {
  components: {
    HmElementDescriptions
  },
  data() {
    return {
      testList: [
        { type: "用户名", text: "111111111" },
        { type: "手机号	", text: "18100000000" },
        { type: "居住地", text: "北京市" },
        { type: "备注", text: "学校" },
        { type: "联系地址", text: "北京市昌平区黄河北街一号院" }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>