<template>
  <div>
    <HmElementRadio
      :raidoList="raidoList2"
      :border="true"
      size="small"
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
      raidoList2: [
        {
          label: 1,
          checked: true,
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
