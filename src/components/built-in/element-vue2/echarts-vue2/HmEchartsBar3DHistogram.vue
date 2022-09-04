<template>
  <!-- 3D柱状图 -->
  <ECharts ref="chart" :option="cOption" />
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmEchartsBar3DHistogram",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  data() {
    return {
      cOption: {},
      cWidth: "300px",
      cHeight: "300px",
    };
  },
  props: {
    /**
     * 属性
     */
    option: {
      type: Object,
      default: function () {
        return {
          title: {
            text: "ECharts 3D柱状图",
          },
          tooltip: {},
          visualMap: {
            max: 20,
            inRange: {
              color: [
                "#313695",
                "#4575b4",
                "#74add1",
                "#abd9e9",
                "#e0f3f8",
                "#ffffbf",
                "#fee090",
                "#fdae61",
                "#f46d43",
                "#d73027",
                "#a50026",
              ],
            },
          },
          xAxis3D: {
            type: "category",
            data: [
              "12a",
              "1a",
              "2a",
              "3a",
              "4a",
              "5a",
              "6a",
              "7a",
              "8a",
              "9a",
              "10a",
              "11a",
              "12p",
              "1p",
              "2p",
              "3p",
              "4p",
              "5p",
              "6p",
              "7p",
              "8p",
              "9p",
              "10p",
              "11p",
            ],
          },
          yAxis3D: {
            type: "category",
            data: [
              "Saturday",
              "Friday",
              "Thursday",
              "Wednesday",
              "Tuesday",
              "Monday",
              "Sunday",
            ],
          },
          zAxis3D: {
            type: "value",
          },
          grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            viewControl: {
              // projection: 'orthographic'
            },
            light: {
              main: {
                intensity: 1.2,
                shadow: true,
              },
              ambient: {
                intensity: 0.3,
              },
            },
          },
          series: [
            {
              type: "bar3D",
              data: [],
              shading: "lambert",

              label: {
                fontSize: 16,
                borderWidth: 1,
              },

              emphasis: {
                label: {
                  fontSize: 20,
                  color: "#900",
                },
                itemStyle: {
                  color: "#900",
                },
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
        let optionData = [
          [0, 1, 5],
          [0, 1, 1],
          [0, 2, 0],
          [0, 3, 0],
          [0, 4, 0],
          [0, 5, 0],
          [0, 6, 0],
          [0, 7, 0],
          [0, 8, 0],
          [0, 9, 0],
          [0, 10, 0],
          [0, 11, 2],
          [0, 12, 4],
          [0, 13, 1],
          [0, 14, 1],
          [0, 15, 3],
          [0, 16, 4],
          [0, 17, 6],
          [0, 18, 4],
          [0, 19, 4],
          [0, 20, 3],
          [0, 21, 3],
          [0, 22, 2],
          [0, 23, 5],
          [1, 0, 7],
          [1, 1, 0],
          [1, 2, 0],
          [1, 3, 0],
          [1, 4, 0],
          [1, 5, 0],
          [1, 6, 0],
          [1, 7, 0],
          [1, 8, 0],
          [1, 9, 0],
          [1, 10, 5],
          [1, 11, 2],
          [1, 12, 2],
          [1, 13, 6],
          [1, 14, 9],
          [1, 15, 11],
          [1, 16, 6],
          [1, 17, 7],
          [1, 18, 8],
          [1, 19, 12],
          [1, 20, 5],
          [1, 21, 5],
          [1, 22, 7],
          [1, 23, 2],
          [2, 0, 1],
          [2, 1, 1],
          [2, 2, 0],
          [2, 3, 0],
          [2, 4, 0],
          [2, 5, 0],
          [2, 6, 0],
          [2, 7, 0],
          [2, 8, 0],
          [2, 9, 0],
          [2, 10, 3],
          [2, 11, 2],
          [2, 12, 1],
          [2, 13, 9],
          [2, 14, 8],
          [2, 15, 10],
          [2, 16, 6],
          [2, 17, 5],
          [2, 18, 5],
          [2, 19, 5],
          [2, 20, 7],
          [2, 21, 4],
          [2, 22, 2],
          [2, 23, 4],
          [3, 0, 7],
          [3, 1, 3],
          [3, 2, 0],
          [3, 3, 0],
          [3, 4, 0],
          [3, 5, 0],
          [3, 6, 0],
          [3, 7, 0],
          [3, 8, 1],
          [3, 9, 0],
          [3, 10, 5],
          [3, 11, 4],
          [3, 12, 7],
          [3, 13, 14],
          [3, 14, 13],
          [3, 15, 12],
          [3, 16, 9],
          [3, 17, 5],
          [3, 18, 5],
          [3, 19, 10],
          [3, 20, 6],
          [3, 21, 4],
          [3, 22, 4],
          [3, 23, 1],
          [4, 0, 1],
          [4, 1, 3],
          [4, 2, 0],
          [4, 3, 0],
          [4, 4, 0],
          [4, 5, 1],
          [4, 6, 0],
          [4, 7, 0],
          [4, 8, 0],
          [4, 9, 2],
          [4, 10, 4],
          [4, 11, 4],
          [4, 12, 2],
          [4, 13, 4],
          [4, 14, 4],
          [4, 15, 14],
          [4, 16, 12],
          [4, 17, 1],
          [4, 18, 8],
          [4, 19, 5],
          [4, 20, 3],
          [4, 21, 7],
          [4, 22, 3],
          [4, 23, 0],
          [5, 0, 2],
          [5, 1, 1],
          [5, 2, 0],
          [5, 3, 3],
          [5, 4, 0],
          [5, 5, 0],
          [5, 6, 0],
          [5, 7, 0],
          [5, 8, 2],
          [5, 9, 0],
          [5, 10, 4],
          [5, 11, 1],
          [5, 12, 5],
          [5, 13, 10],
          [5, 14, 5],
          [5, 15, 7],
          [5, 16, 11],
          [5, 17, 6],
          [5, 18, 0],
          [5, 19, 5],
          [5, 20, 3],
          [5, 21, 4],
          [5, 22, 2],
          [5, 23, 0],
          [6, 0, 1],
          [6, 1, 0],
          [6, 2, 0],
          [6, 3, 0],
          [6, 4, 0],
          [6, 5, 0],
          [6, 6, 0],
          [6, 7, 0],
          [6, 8, 0],
          [6, 9, 0],
          [6, 10, 1],
          [6, 11, 0],
          [6, 12, 2],
          [6, 13, 1],
          [6, 14, 3],
          [6, 15, 4],
          [6, 16, 0],
          [6, 17, 0],
          [6, 18, 0],
          [6, 19, 0],
          [6, 20, 1],
          [6, 21, 2],
          [6, 22, 2],
          [6, 23, 6],
        ];
        return optionData.map(function (item) {
          return {
            value: [item[1], item[0], item[2]],
          };
        });
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
    this.cOption.series[0].data = this.data;
    console.log(JSON.stringify(this.data));
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