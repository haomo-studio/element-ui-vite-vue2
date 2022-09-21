<template>
  <div>
    <el-timeline>
      <el-timeline-item
        :hide-timestamp="hideTimestamp"
        :center="center"
        :placement="placement"
        :type="type"
        :color="color"
        :size="size"
        :icon="icon"
        v-for="(item, index) in dataList"
        :key="index"
        :timestamp="item.timestamp"
      >
        {{ item.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: 'HmElementTimeline',
  props: {
    /**
     * 菜单内容
     */
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
    /**
     * 时间戳
     */
    timestamp: {
      type: String,
      default: '',
    },
    /**
     * 隐藏时间戳
     */
    hideTimestamp: {
      type: Boolean,
      default: false,
    },
    /**
     *时间戳位置
     * @type Enum
     * @options ["top","bottom"]
     */
    placement: {
      type: String,
      default: 'bottom',
    },
    /**
     *节点类型
     * @type Enum
     * @options ["primary","success","warning","danger","info"]
     */
    type: {
      type: String,
      default: 'primary',
    },
    /**
     *节点颜色
     * @type Enum
     * @options ["hsl","hsv","hex","rgb"]
     */
    color: {
      type: String,
      default: 'rgb',
    },
    /**
     *节点尺寸
     * @type Enum
     * @options ["normal","large"]
     */
    size: {
      type: String,
      default: 'large',
    },
    /**
     *自定义图标
     */
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="less" scoped>
.el-timeline {
  width: 100px;
}
</style>
