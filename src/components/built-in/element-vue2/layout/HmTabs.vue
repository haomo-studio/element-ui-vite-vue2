<template>
  <el-tabs
    v-model="activeKey"
    :tabPosition="tabPosition"
    :type="tabType"
    class="hm-tabs"
    @change="onChange"
  >
    <el-tab-pane v-for="tab in tabs" :key="tab.key" :name="tab.key" :label="tab.name">
      <template #tab>
        <span>{{ tab.name }}</span>
      </template>
      <div class="tab-slot">
        <slot :name="`tab-slot-${tab.key}`">
          <div class="hm-slot" :data-slot-name="`tab-slot-${tab.key}`">
            <div class="sortable-list"></div>
          </div>
        </slot>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "HmTabs",
  components: {},
  props: {
    /**
     * 标签名
     */
    tabNames: {
      type: Array,
      default: function() {
        return ["标签一", "标签二", "标签三"]
      }
    },
    /**
     * 页签位置
     * @type Enum
     * @default top
     * @options ["top","right","bottom","left"]
     */
    tabPosition: {
      type: String,
      default: "top"
    },
    /**
     * 样式
     * @type Enum
     * @default card
     * @options ["card","border-card"]
     */
    tabType: {
      type: String,
      default: "card"
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: "8"
    },
    /**
     * 水平阴影
     */
    boxShadowHShadow: {
      type: String,
      default: "0"
    },
    /**
     * 垂直阴影
     */
    boxShadowVShadow: {
      type: String,
      default: "2"
    },
    /**
     * 模糊距离
     */
    boxShadowBlur: {
      type: String,
      default: "12"
    },
    /**
     * 阴影大小
     */
    boxShadowSpread: {
      type: String,
      default: "0"
    },
    /**
     * 阴影颜色
     * @type Color
     */
    boxShadowColor: {
      type: String,
      default: "rgba(0,0,0,0.04)"
    }
  },
  data() {
    return {
      activeKey: 0,
      cTabNames: ["标签一", "标签二", "标签三"],
      cBorderRadius: "8px",
      cBoxShadowHShadow: "0px",
      cBoxShadowVShadow: "2px",
      cBoxShadowBlur: "12px",
      cBoxShadowSpread: "0px",
      cBoxShadowColor: "rgba(0,0,0,0.04)"
    };
  },
  watch: {
    tabNames: {
      handler: function(value, oldValue) {
        this.cTabNames = value;
      },
      deep: true
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    boxShadowHShadow(value) {
      this.cBoxShadowHShadow = this.getCssUnit(value);
    },
    boxShadowVShadow(value) {
      this.cBoxShadowVShadow = this.getCssUnit(value);
    },
    boxShadowBlur(value) {
      this.cBoxShadowBlur = this.getCssUnit(value);
    },
    boxShadowSpread(value) {
      this.cBoxShadowSpread = this.getCssUnit(value);
    },
    boxShadowColor(value) {
      this.cBoxShadowColor = value;
    }
  },
  computed: {
    tabs() {
      let ret = [];
      for (let i = 0; i < this.cTabNames.length; i++) {
        ret.push({
          key: i,
          name: this.cTabNames[i],
        });
      }
      console.log(`tabs: `, ret);
      return ret;
    }
  },
  mounted() {
    this.cTabNames = this.tabNames;
    this.cBorderRadius = this.getCssUnit(this.borderRadius);
    this.cBoxShadowHShadow = this.getCssUnit(this.boxShadowHShadow);
    this.cBoxShadowVShadow = this.getCssUnit(this.boxShadowVShadow);
    this.cBoxShadowBlur = this.getCssUnit(this.boxShadowBlur);
    this.cBoxShadowSpread = this.getCssUnit(this.boxShadowSpread);
    this.cBoxShadowColor = this.boxShadowColor;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onChange(value) {
      console.log(`tab change: `, value);
      this.activeKey = value;
      this.$emit("change", value);
    }
  }
};
</script>

<style scoped>
.tab-slot {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  min-height: 150px;
}

.ant-tabs {
  width: 100%;
  border-radius: v-bind(cBorderRadius);
  box-shadow: v-bind(cBoxShadowHShadow) v-bind(cBoxShadowVShadow)
    v-bind(cBoxShadowBlur) v-bind(cBoxShadowSpread) v-bind(cBoxShadowColor);
}

.tab-slot > .hm-slot {
  width: 100%;
  height: 100%;
}

.tab-slot > .hm-slot:hover {
  background: rgba(253, 71, 52, 0.1) !important;
}

.hm-tabs /deep/ .ant-tabs-top-content {
  height: 100%;
}
</style>