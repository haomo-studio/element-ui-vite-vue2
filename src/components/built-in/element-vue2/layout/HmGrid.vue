<template>
  <a-row type="flex" :align="align" :justify="justify" class="hm-grid" ref="hmGrid">
    <a-col v-for="col in cols" :key="col.key" :span="col.span">
      <div class="ant-col-slot">
        <slot :name="`ant-col-slot-${col.key}`">
          <div class="hm-slot" :data-slot-name="`ant-col-slot-${col.key}`"><div class="sortable-list"></div></div>
        </slot>
      </div>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "HmGrid",
  components: {
  },
  props: {
    /**
     * 列数
     */
    colNum: {
      type: Number,
      default: 3
    },
    /**
     * 列宽span
     */
    colSpans: {
      type: String,
      default: '8 8 8'
    },
    /**
     * 垂直对齐
     * @type Enum
     * @options ["top", "middle", "bottom"]
     */
    align: {
      type: String,
      default: 'middle'
    },
    /**
     * 水平排列
     * @type Enum
     * @options ["flex-start", "flex-end", "center", "space-between", "space-around"]
     */
    justify: {
      type: String,
      default: 'space-between'
    }
  },
  data() {
    return {
      cColNum: 3,
      cColSpans: '8 8 8',
      cJustify: 'space-between'
    }
  },
  watch: {
    colSpans(value) {
      this.cColSpans = value;
    }
  },
  computed: {
    cols() {
      let ret = [];
      let spans = this.cColSpans.split(' ')
      for(let i=0; i < this.cColNum; i++) {
        ret.push({
          key: i,
          span: spans[i]
        })
      }
      console.log(`cols: `, ret)
      return ret;
    }
  },
  mounted() {
    this.cColNum = this.colNum;
    this.cColSpans = this.colSpans;
    this.cJustify = this.justify;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped>
.hm-grid {
  width: 100%;
  min-width: 50vw;
  min-height: 10vh;
}

.ant-col-slot {
  min-height: 10vh;
  width: 100%;
}

.hm-grid .ant-col {
  display: flex;
  height: 100%;
}

.hm-grid .ant-col:hover {
  background: rgba(253,71,52,.1) !important;
}

.hm-grid .ant-col:empty {
  min-height: 10vh;
  background-color: white;
  border:1px dashed #eee;
}
</style>