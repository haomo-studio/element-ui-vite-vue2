<template>
  <div>
    <el-alert
      :title="title"
      :type="type"
      :description="description"
      :closable="closable"
      :center="center"
      :close-text="closeText"
      :show-icon="showIcon"
      :effect="effect"
      @close="onClose"
    >
    <template #title>
        <slot></slot>
      </template>
    </el-alert>
  </div>
</template>

<script>
export default {
  name:"HmElementAlert",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: '标题标题标题标题标题',
    },
       /**
     * 主题
     * @type Enum
     * @options ["success","warning","info","error"]
     */
    type: {
      type: String,
       default: "success"
    },
    /**
     * 辅助性文字
     */
    description: {
      type: String,
      default: '辅助性文字辅助性文字'
    },
    /**
     * 是否可关闭
     */
    closable: {
      type: Boolean,
      default: true,
    },
    /**
     * 文字是否居中
     */
    center: {
      type: Boolean,
      default: true,
    },
    /**
     * 关闭按钮自定义文本
     */
    closeText: {
      type: String,
       default: ""
    },
    /**
     * 是否显示图标
     */
    showIcon: {
      type: Boolean,
      default: false,
    },
       /**
     * 选择提供的主题
     * @type Enum
     * @options ["light","dark"]
     */
    effect: {
      type: String,
       default: "light"
    },
  },
  methods: {
    onClose: function (e) {
      this.$emit("close", e);
    },
  },
}
</script>

<style scoped>
</style>