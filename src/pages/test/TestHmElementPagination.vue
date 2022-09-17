<template>
  <div>
    <HmElementPagination
      :small="false"
      :background="true"
      :page-size="20"
      :total="300"
      :pager-count="5"
      :current-page="2"
      layout="total,sizes,prev,pager,next,jumper"
      :page-sizes="pageSizes"
      popper-class
      prev-text=""
      next-text=""
      :disabled="false"
      :hide-on-single-page="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="prevClick"
      @next-click="nextClick"
    ></HmElementPagination>
  </div>
</template>

<script>
import HmElementPagination from "/@/components/built-in/element-vue2/HmElementPagination.vue";
export default {
  components: {
    HmElementPagination,
  },
  data() {
    return {
        pageSizes:["30", "50", "100", "200"]
    };
  },
  methods: {
 handleSizeChange(e) {
      this.$emit("handleSizeChange", e);
    },
    handleCurrentChange(e) {
      this.$emit("handleCurrentChange", e);
    },
    prevClick(e) {
      this.$emit("prevClick", e);
    },
    nextClick(e) {
      this.$emit("nextClick", e);
    },
  },
};
</script>

<style></style>
