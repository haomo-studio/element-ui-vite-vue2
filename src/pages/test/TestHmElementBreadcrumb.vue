<template>
  <div>
    <HmElementBreadcrumb separator="//" :testList="testList"></HmElementBreadcrumb>
  </div>
</template>

<script>
import HmElementBreadcrumb from "/@/components/built-in/element-vue2/HmElementBreadcrumb.vue";
export default {
  components: {
    HmElementBreadcrumb,
  },
  data() {
    return {
         testList: [
        { to: "HmElementNavMenu", text: "首页" },
          { to: "HmElementMessageBox", text: "活动管理" },
          { to: "HmElementNavMenu", text: "首页" },
          { to: "HmElementMessageBox", text: "活动管理" },
          { to: "HmElementNavMenu", text: "首页" },
          { to: "HmElementMessageBox", text: "活动管理" }
      ]
    };
  },
  methods: {
 
  },
};
</script>

<style></style>
