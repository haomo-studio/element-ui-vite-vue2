<template>
  <div class="rate-div">
    <div class="rate-title" v-if="title" :style="{ width: labelWidth + 'px' }">
      {{ title }}:
    </div>
    <el-rate
      class="rate-body"
      :disabled="disabled"
      :max="count"
      :allowHalf="allowHalf"
      :low-threshold="lowThreshold"
      :high-threshold="highThreshold"
      :colors="colors"
      :void-color="voidColor"
      :disabled-void-color="disabledVoidColor"
      :icon-classes="iconClasses"
      :void-icon-class="voidIconClass"
      :disabled-void-icon-class="disabledVoidIconClass"
      :show-text="showText"
      :show-score="showScore"
      :text-color="textColor"
      :texts="texts"
      :score-template="scoreTemplate"
      v-model:value="cvalue"
      @change="onChange"
    ></el-rate>
  </div>
</template>

<script>
export default {
  name: 'HmAntRate',
  props: {
    
    /**
     * 值
     * @model
     */
    value: {
      type: Number,
    },
     /**
     * 标题宽度
     */
     labelWidth: {
      type: Number,
      default: 100,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: '评分',
    },
    /**
     * 最大分值
     */
    count: {
      type: Number,
      default: 5,
    },
    /**
     * 是否为只读
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 允许半选
     */
    allowHalf: {
      type: Boolean,
      default: true,
    },
    /**
     * 低分中等分界值
     */
    lowThreshold: {
      type: Number,
      default: 2,
    },
    /**
     * 高分中等分界值
     */
    highThreshold: {
      type: Number,
      default: 4,
    },
    /**
     * icon颜色
     */
    colors: {
      type: Array,
      default: function () {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A']
      },
    },
    /**
     * 未选择icon颜色
     */
    voidColor: {
      type: String,
      default: '#C6D1DE',
    },
    /**
     * 只读未选择icon颜色
     */
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7',
    },

    /**
     * icon 的类名
     */
    iconClasses: {
      type: Array,
      default: function () {
        return ['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']
      },
    },
    /**
     * 未选择icon类名
     */
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off',
    },
    /**
     * 只读未选择icon类名
     */
    disabledVoidIconClass: {
      type: String,
      default: 'el-icon-star-on',
    },

    /**
     * 显示辅助文字
     */
    showText: {
      type: Boolean,
      default: true,
    },
    /**
     * 显示当前分数
     */
    showScore: {
      type: Boolean,
      default: false,
    },

    /**
     * 辅助文字颜色
     */
    textColor: {
      type: String,
      default: '#1F2D3D',
    },
    /**
     * 辅助文字数组
     */
    texts: {
      type: Array,
      default: function () {
        return ['极差', '失望', '一般', '满意', '惊喜']
      },
    },
    /**
     * 分数显示模板
     */
    scoreTemplate: {
      type: String,
      default: '{value}',
    },
  },
  data() {
    return {
      cvalue: 0,
    }
  },
  watch: {
    value(value) {
      this.cvalue = value
    },
  },
  mounted() {
    this.cvalue = this.value
  },
  methods: {
    onChange: function (e) {
      this.$emit('update:value', this.cvalue)
      this.$emit('onChange', e)
      console.log('e', e)
    },
  },
}
</script>

<style scoped>
.rate-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.rate-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
</style>