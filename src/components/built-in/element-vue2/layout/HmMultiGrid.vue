<template>
  <div>
    <a-row v-for="row in cols" :key="row.key" type="flex" 
      :align="align" :justify="justify" class="hm-grid" ref="hmGrid">
      <a-col v-for="col in row.cols" :key="col.key" :span="col.span">
        <div class="ant-col-slot">
          <slot :name="`ant-col-slot-${col.key}`">
            <div class="hm-slot" :data-slot-name="`ant-col-slot-${col.key}`"><div class="sortable-list"></div></div>
          </slot>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
/**
 * 宫格组件
 */
export default {
  name: "HmMultiGrid",
  components: {
  },
  props: {
    /**
     * 行数
     */
    rowNum: {
      type: Number,
      default: 3
    },
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
      type: Array,
      default: function() {
        return [
          '8 8 8',
          '8 8 8',
          '8 8 8'
        ]
      } 
    },
    /**
     * 垂直对齐
     */
    align: {
      type: String,
      default: 'middle'
    },
    /**
     * 水平排列
     */
    justify: {
      type: String,
      default: 'space-between'
    }
  },
  data() {
    return {
      cRowNum: 3,
      cColNum: 3,
      cColSpans: [
        '8 8 8',
        '8 8 8',
        '8 8 8'
      ],
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
      for(let r=0; r<this.cColSpans.length; r++) {
        let cols = [];
        let spans = this.cColSpans[r].split(' ')
        for(let c=0; c < spans.length; c++) {
          cols.push({
            key: c,
            span: spans[c]
          })
        }
        ret.push({
          key: r,
          cols: cols
        });
      }
      console.log(`cols: `, ret);
      return ret;
    }
  },
  mounted() {
    this.cRowNum = this.rowNum;
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