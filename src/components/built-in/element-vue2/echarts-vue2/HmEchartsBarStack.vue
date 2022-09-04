<template>
  <!-- 堆叠柱状图 -->
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
  name: "HmEchartsBarStack",
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
            text: "ECharts 柱状图堆叠",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          dataset: {
            dimensions: [
              "day",
              "直接访问",
              "邮件营销",
              "联盟广告",
              "视频广告",
              "搜索引擎",
              "百度",
              "谷歌",
              "必应",
              "其他",
            ],
          },
          xAxis: [
            {
              type: "category",
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              type: "bar",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              stack: "广告",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              stack: "广告",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              stack: "广告",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              emphasis: {
                focus: "series",
              },
              markLine: {
                lineStyle: {
                  type: "dashed",
                },
                data: [[{ type: "min" }, { type: "max" }]],
              },
            },
            {
              type: "bar",
              barWidth: 5,
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
            },
            {
              type: "bar",
              stack: "搜索引擎",
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
            直接访问: 120,
            邮件营销: 220,
            联盟广告: 150,
            视频广告: 320,
            搜索引擎: 620,
            百度: 320,
            谷歌: 120,
            必应: 60,
            其他: 62,
          },
          {
            day: "周二",
            直接访问: 132,
            邮件营销: 182,
            联盟广告: 232,
            视频广告: 332,
            搜索引擎: 632,
            百度: 430,
            谷歌: 130,
            必应: 72,
            其他: 82,
          },
          {
            day: "周三",
            直接访问: 101,
            邮件营销: 191,
            联盟广告: 201,
            视频广告: 301,
            搜索引擎: 701,
            百度: 400,
            谷歌: 100,
            必应: 71,
            其他: 91,
          },
          {
            day: "周四",
            直接访问: 134,
            邮件营销: 234,
            联盟广告: 154,
            视频广告: 334,
            搜索引擎: 834,
            百度: 434,
            谷歌: 150,
            必应: 74,
            其他: 84,
          },
          {
            day: "周五",
            直接访问: 90,
            邮件营销: 290,
            联盟广告: 190,
            视频广告: 390,
            搜索引擎: 990,
            百度: 500,
            谷歌: 290,
            必应: 190,
            其他: 109,
          },
          {
            day: "周六",
            直接访问: 230,
            邮件营销: 330,
            联盟广告: 330,
            视频广告: 330,
            搜索引擎: 730,
            百度: 530,
            谷歌: 230,
            必应: 130,
            其他: 110,
          },
          {
            day: "周日",
            直接访问: 210,
            邮件营销: 310,
            联盟广告: 410,
            视频广告: 320,
            搜索引擎: 620,
            百度: 525,
            谷歌: 220,
            必应: 110,
            其他: 120,
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