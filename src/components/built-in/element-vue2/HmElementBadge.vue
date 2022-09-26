<template>
  <div>
    <el-badge
      class="item"
      :value="value"
      :max="max"
      :is-dot="isDot"
      :hidden="hidden"
      :type="type"
    >
      <span>{{ text }}</span>
    </el-badge>
  </div>
</template>

<script>
export default {
  name: 'HmElementBadge',
  props: {
    /**
     * 内容
     */
    text: {
      type: String,
      default: '默认',
    },
    /**
     * 显示值
     */
    value: {
      type: Number,
      default: 200,
    },
    /**
     * 	最大值
     */
    max: {
      type: Number,
      default: 99,
    },
    /**
     * 小圆点
     */
    isDot: {
      type: Boolean,
      default: false,
    },
    /**
     * 隐藏 badge
     */
    hidden: {
      type: Boolean,
      default: false,
    },
    /**
     *类型
     * @type Enum
     * @options ["primary ","success  ","warning ","none","info"]
     */
    type: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
<style>
.item {
  margin-top: 20px;
  margin-right: 110px;
}
</style>
