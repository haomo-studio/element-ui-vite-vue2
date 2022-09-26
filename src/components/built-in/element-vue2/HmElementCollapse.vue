<template>
  <div class="demo-collapse">
    <el-collapse v-model="cModelValue" :accordion="accordion" @change="onChange">
      <el-collapse-item
        :title="item.value"
        :name="index"
        v-for="(item,index) in testList"
        :key="index"
      >
        <slot :name="`collapse-slot-${index}`">
          <div class="hm-slot" :data-slot-name="`collapse-slot-${index}`">
            <div class="sortable-list"></div>
          </div>
        </slot>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "HmElementCollapse",
  props: {
    /**
   * 当前打开面板
   * @model
   */
    modelValue: {
      type: [String, Array]
    },
    /**
     * 数据
     */
    testList: {
      type: Array,
      default: function() {
        return [
          { value: "用户名" },
          { value: "手机号" },
          { value: "用户名" },
          { value: "手机号" }
        ];
      }
    },
    /**
     * 是否手风琴
     */
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cModelValue: []
    };
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    onChange(e) {
      console.log("onChange", e);
      this.$emit("update:modelValue", this.cModelValue)
      this.$emit("change", e);
    },
  }
};
</script>
<style lang="less" scoped>
.item {
  margin-top: 20px;
  margin-right: 110px;
}
.hm-slot {
  background-color: rgb(235, 238, 240);
  width: 100%;
  height: 100px;
}
</style>