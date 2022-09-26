<template>
  <el-descriptions
   
    :border="border"
    :column="column"
    :direction="direction"
    :size="size"
    :title="title"
    :extra="extra"
    :colon="colon"
  >
    <template #title>
      <slot :name="`title_left`"></slot>
    </template>
    <template #extra>
      <slot :name="`extra_right`"></slot>
    </template>
    <el-descriptions-item
      :label="item.type"
      :span="span"
      v-for="(item, index) in testList"
      :key="index"
    >{{ item.text }}</el-descriptions-item>
  </el-descriptions>
</template>

<script>
export default {
  name: "HmElementDescriptions",
  props: {
    /**
     * 内容数据
     */
    testList: {
      type: Array,
      default: function() {
        return [
          { type: "用户名", text: "kooriookami" },
          { type: "手机号	", text: "18100000000" },
          { type: "居住地", text: "苏州市" },
          { type: "备注", text: "学校" },
          { type: "联系地址", text: "江苏省苏州市吴中区吴中大道 1188 号" },
          { type: "用户名", text: "kooriookami" },
          { type: "手机号	", text: "18100000000" },
          { type: "居住地", text: "苏州市" },
          { type: "备注", text: "学校" },
          { type: "联系地址", text: "江苏省苏州市吴中区吴中大道 1188 号" }
        ];
      }
    },
    /**
     * 是否带有边框
     */
    border: {
      type: Boolean,
      default: true
    },
    /**
     * 一行数量
     */
    column: {
      type: Number,
      default: 3
    },
     /**
     * 列的数量
     */
     span: {
      type: Number,
      default: 1
    },
    /**
     * 排列的方向
     * @type Enum
     * @options ["vertical","horizontal"]
     */
    direction: {
      type: String,
      default: "horizontal"
    },
    /**
     * 列表的尺寸
     * @type Enum
     * @options ["large"," default","small"]
     */
    size: {
      type: String,
      default: "default"
    },
    /**
     * 标题文本
     */
    title: {
      type: String,
      default: "用户信息"
    },
    /**
     * 操作区文本
     */
     extra: {
      type: String,
      default: ""
    },
    /**
     * 是否显示冒号
     */
    colon: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style lang="less" scoped>
</style>