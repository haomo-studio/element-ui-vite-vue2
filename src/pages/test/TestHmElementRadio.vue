<template>
  <div>
    <HmElementRadio
      :raidoLIst="raidoLIst"
      :border="true"
      :size="small"
      :disabled="true"
      @onChange="onChange"
    ></HmElementRadio>
  </div>
</template>

<script>
import HmElementRadio from "/@/components/built-in/element-vue2/HmElementRadio.vue";
export default {
  components: {
    HmElementRadio,
  },
  data() {
    return {
      raidoList: [
        {
          label: 1,
          value: "A",
        },
        {
          label: 2,
          value: "B",
        },
        {
          label: 3,
          value: "C",
        },
      ],
    };
  },
  methods: {
    onChange: function (e, num) {
      console.log("点击的监听值", e, num);
    },
  }
};
</script>

<style></style>
