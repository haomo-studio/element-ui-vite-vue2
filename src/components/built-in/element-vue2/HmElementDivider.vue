<template>
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <el-divider
      :direction="direction"
      :content-position="contentPosition"
      ></el-divider>
      <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  </div>
</template>

<script>
export default {
  name: "HmElementDivider",
  props: {
    /**
     * 分割线方向
     */
     direction: {
      type: String	,
      default: 'horizontal',
    },
    /**
     * 分割线文案的位置
     */
     contentPosition: {
      type: String,
      default: 'center',
    }
  },
};
</script>
<style scoped></style>
