<template>
  <!-- 堆叠面积图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmEchartsAreaStack",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function () {
        return {
          title: {
            text: "ECharts 堆叠区域图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
          dataset: {
            dimensions: [
              "day",
              "邮件营销",
              "联盟广告",
              "视频广告",
              "直接访问",
              "搜索引擎",
            ],
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "line",
              stack: "总量",
              label: {
                show: true,
                position: "top",
              },
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
            },
          ],
        };
      },
    },
    /**
     * 数据项
     */
    data: {
      type: Array,
      default: function () {
        return [
          {
            day: "周一",
            邮件营销: 120,
            联盟广告: 220,
            视频广告: 150,
            直接访问: 320,
            搜索引擎: 420,
          },
          {
            day: "周二",
            邮件营销: 132,
            联盟广告: 182,
            视频广告: 232,
            直接访问: 332,
            搜索引擎: 432,
          },
          {
            day: "周三",
            邮件营销: 101,
            联盟广告: 191,
            视频广告: 201,
            直接访问: 301,
            搜索引擎: 401,
          },
          {
            day: "周四",
            邮件营销: 134,
            联盟广告: 234,
            视频广告: 154,
            直接访问: 334,
            搜索引擎: 434,
          },
          {
            day: "周五",
            邮件营销: 90,
            联盟广告: 290,
            视频广告: 190,
            直接访问: 390,
            搜索引擎: 590,
          },
          {
            day: "周六",
            邮件营销: 230,
            联盟广告: 330,
            视频广告: 330,
            直接访问: 330,
            搜索引擎: 430,
          },
          {
            day: "周日",
            邮件营销: 210,
            联盟广告: 310,
            视频广告: 410,
            直接访问: 320,
            搜索引擎: 520,
          },
        ];
      },
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300",
    },
  },
  data() {
    return {
      cOption: {},
      cWidth: "300px",
      cHeight: "300px",
    };
  },
  watch: {
    option(value) {
      let dataset = JSON.parse(JSON.stringify(this.cOption.dataset));
      this.cOption = value;
      this.cOption.dataset = dataset;
    },
    data: {
      handler: function (value, oldValue) {
        this.cOption.dataset.source = value;
        this.$refs.chart.setOption(this.cOption, true);
        console.log(`setOption:`, this.cOption);
      },
      deep: true,
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        this.getData(this.url, value);
      },
      deep: true,
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);

    this.cOption = this.option;
    if (typeof this.cOption.dataset === "undefined") {
      this.cOption.dataset = {};
    }
    this.cOption.dataset.source = this.data;
    this.getData();
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      getAction(url, params).then((resp) => {
        this.cOption.dataset.source = resp.result.records
          ? resp.result.records
          : resp.result;
        this.$refs.chart.setOption(this.cOption, true);
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>