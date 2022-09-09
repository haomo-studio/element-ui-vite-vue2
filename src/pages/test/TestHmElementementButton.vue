<template>
  <div>
    <HmElementementButton
    :native-type="submit"
    :type="success"
    :size="small"
    :icon="el-icon-search"
    :plain="true"
    :round="true"
    :circle="false"
    :loading="false"
    :disabled="true"
    :autofocus="true"
    ></HmElementementButton>
  </div>
</template>

<script>
import HmElementementButton from '/@/components/built-in/element-vue2/HmElementementButton.vue'
export default {
  components: {
    HmElementementButton
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