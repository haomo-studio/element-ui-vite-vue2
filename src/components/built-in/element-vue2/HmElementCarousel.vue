<template>
  <el-carousel
    :height="cHeight"
    :initial-index="initialIndex"
    :trigger="trigger"
    :autoplay="autoplay"
    :interval="interval"
    :indicator-position="indicatorPosition"
    :arrow="arrow"
    :type="type"
    :loop="loop"
    :direction="direction"
    @change="onChange()"
  >
    <el-carousel-item v-for="(item, index) in imgList" :key="index">
      <img :src="item" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "HmElementCarousel",
  props: {
    /**
     * 数据
     */
    imgList: {
      type: Array,
      default: function() {
        return [
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F111R0144Z0%2F20111Q44Z0-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=9fbdefb221691a5f11a8aaf2a3f6ae56",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F022221105922%2F210222105922-7-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=8abdb7284aa21e05169e4bd377f80574",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F011621113142%2F210116113142-10-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=4d40d86c82c09d98e509aaad0aefee2a",
          "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1114%2F050221114535%2F210502114535-5-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659786717&t=db51ae291ec9b0e412183496be2cddc0"
        ];
      }
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "500px"
    },
    /**
     * 初始状态页
     */
    initialIndex: {
      type: Number,
      default: 0
    },
    /**
     * 触发方式
     * @type Enum
     * @options ["click"]
     */
    trigger: {
      type: String,
      default: "click"
    },
    /**
     * 是否自动切换
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * 切换时间间隔
     */
    interval: {
      type: Number,
      default: 3000
    },
    /**
     * 指示器位置
     * @type Enum
     * @options ["outside","none"]
     */
    indicatorPosition: {
      type: String,
      default: "outside"
    },
    /**
     * 切换箭头显示
     * @type Enum
     * @options ["always","hover","never"]
     */
    arrow: {
      type: String,
      default: "hover"
    },
    /**
     * 类型
     * @type Enum
     * @options ["card",""]
     */
    type: {
      type: String,
      default: ""
    },
    /**
     * 是否循环
     */
    loop: {
      type: Boolean,
      default: true
    },
    /**
     * 展示方向
     * @type Enum
     * @options ["horizontal","vertical"]
     */
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  data() {
    return {
      cHeight: ""
    };
  },
  mounted() {
    this.cHeight = this.getCssUnit(this.height);
  },
  watch: {
    height(value) {
      this.cHeight = this.getCssUnit(value);
    }
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  }
};
</script>
<style>
</style>