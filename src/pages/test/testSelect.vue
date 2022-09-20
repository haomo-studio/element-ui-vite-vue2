<template>
  <HmElementSelect :options="options" :url="'/api/restify/sysUser/list'" :params="params" :dataMap="dataMap" />
</template>

<script>
import HmElementSelect from '/@/components/built-in/element-vue2/HmElementSelect.vue'

export default {
  components: {
    HmElementSelect
  },
  data() {
    return {
      options: [
        {
          lable: "十四",
          value: "1232"
        },{
          lable: "十s是",
          value: "123sd"
        },{
          lable: "十是的",
          value: "12aa3"
        },
      ],
      params: {
        "databaseId": ""
      },
      dataMap: {
        label: "realname",
        value: "username",
      }
    }
  }
}
</script>

<style>

</style>