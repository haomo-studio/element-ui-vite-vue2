
<template>
  <div>
    <HmElementSteps
    space="50px" 
        direction="vertical"
        :active="1"
        processStatus="finish"
        finishStatus="error"
        :alignCenter="true"
        :simple="true"
    >
      <el-step
      v-for="(item, index) in title"
        :key="index"
        :title="item.title"
      ></el-step>
    </HmElementSteps>
    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
  </div>
</template>

<script>
import HmElementSteps from '/@/components/built-in/element-vue2/HmElementSteps.vue'
export default {
  components: {
    HmElementSteps
  },
  props:{
    title: {
      type: Array,
      default: function () {
        return [{ title: "步骤1" }, { title: "步骤2" }, { title: "步骤3" }]
      },
    },
  },
  data(){
    return{
    }
  },
  methods: {
     
    },
}
</script>

<style>

</style>