<template>
  <div>
    <HmElementCheckbox
      :checkboxList="checkboxList2"
      :border="true"
      size="small"
      :disabled="true"
      @onChange="onChange"
    ></HmElementCheckbox>
  </div>
</template>

<script>
import HmElementCheckbox from "/@/components/built-in/element-vue2/HmElementCheckbox.vue";
export default {
  components: {
    HmElementCheckbox,
  },
  data() {
    return {
      checkboxList2: [
        {
          checked: true,
          value: "raido1",
        },
        {
          checked: true,
          value: "raido2",
        },
        {
          checked: true,
          value: "raido3",
        },
      ],
    };
  },
  methods: {
    onChange: function (e, num) {
      console.log("点击的监听值", e, num);
    },
  },
};
</script>

<style></style>
