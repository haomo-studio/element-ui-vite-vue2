<template>
  <!-- 阶段仪表盘 -->
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
  name: "HmEchartsGaugeStage",
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
            text: "ECharts 阶段仪表盘",
          },
          dataset: {},
          series: [
            {
              type: "gauge",
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.3, "#67e0e3"],
                    [0.7, "#37a2da"],
                    [1, "#fd666d"],
                  ],
                },
              },
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: "#fff",
                  width: 4,
                },
              },
              axisLabel: {
                color: "auto",
                distance: 40,
                fontSize: 20,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value} km/h",
                color: "auto",
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
        return [{ value: 50 }];
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