<template>
  <div>
    <HmElementCalendar
     :range="range" :first-day-of-week="3"
    ></HmElementCalendar>
  </div>
</template>

<script>
import HmElementCalendar from "/@/components/built-in/element-vue2/HmElementCalendar.vue";
export default {
  components: {
    HmElementCalendar,
  },
  data() {
    return {
        range:['2022-10-29', '2022-11-09']
    };
  },
  methods: {
 
  },
};
</script>

<style></style>
