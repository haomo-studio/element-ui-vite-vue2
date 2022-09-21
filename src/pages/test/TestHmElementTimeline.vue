<template>
  <div>
    <HmElementTimeline
        :hide-timestamp="true" 
        placement="top"
        type="info"
        color="hex"
        size="normal"
        v-for="(item, index) in dataList"
        :key="index"
        :timestamp="item.timestamp"
    ></HmElementTimeline>
  </div>
</template>

<script>
import HmElementTimeline from '/@/components/built-in/element-vue2/HmElementTimeline.vue'
export default {
  components: {
    HmElementTimeline
  },
  props:{
    dataList: {
      type: Array,
      default: function () {
        return [
          {
            content: 'Event start',
            timestamp: '2018-04-15',
          },
          {
            content: 'Approved',
            timestamp: '2018-04-13',
          },
          {
            content: 'Success',
            timestamp: '2018-04-11',
          },
        ]
      },
    },
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