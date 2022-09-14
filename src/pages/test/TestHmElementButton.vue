<template>
  <div>
    <HmElementButton
    :native-type="submit"
    :type="success"
    :size="small"
    icon="el-icon-search"
    :plain="true"
    :round="true"
    :circle="false"
    :loading="false"
    :disabled="true"
    :autofocus="true"
    ></HmElementButton>
  </div>
</template>

<script>
import HmElementButton from '/@/components/built-in/element-vue2/HmElementButton.vue'
export default {
  components: {
    HmElementButton
  },
  data(){
    return{
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>