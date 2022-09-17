<template>
  <div>
    <el-calendar v-model="cValue" :range="range" :first-day-of-week="firstDayOfWeek">
        <template slot="date"></template>
    </el-calendar>
  </div>
</template>
<script>
export default {
  name: "HmElementCalendar",
  props: {
          /**
     * 绑定值
     * @model
     */
     value: {
      type: String,
      default: "",
    },
           /**
     * 显示时间范围
     */
    range: {
      type: Array,
      default:function (){
          return ['2022-09-29', '2022-10-09']
      }
    },
            /**
     * 周起始日
     */
    firstDayOfWeek: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
         cValue:"",
    };
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
  },
  mounted() {
    this.cValue = this.value;
  },
  methods: {
  
  },
};
</script>
<style scoped>
</style>