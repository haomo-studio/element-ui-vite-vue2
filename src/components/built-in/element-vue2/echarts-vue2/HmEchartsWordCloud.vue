<template>
  <!-- 词云 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-wordcloud";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmEchartsWordCloud",
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
          tooltip: {},
          series: [
            {
              type: "wordCloud",
              gridSize: 2,
              sizeRange: [12, 50],
              rotationRange: [-90, 90],
              shape: "pentagon",
              width: 600,
              height: 400,
              drawOutOfBound: true,
              textStyle: {
                color: function () {
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                      Math.round(Math.random() * 160),
                    ].join(",") +
                    ")"
                  );
                },
              },
              emphasis: {
                textStyle: {
                  shadowBlur: 10,
                  shadowColor: "#333",
                },
              },
              data: [],
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
            name: "Sam S Club",
            value: 10000,
            textStyle: {
              color: "black",
            },
            emphasis: {
              textStyle: {
                color: "red",
              },
            },
          },
          {
            name: "Macys",
            value: 6181,
          },
          {
            name: "Amy Schumer",
            value: 4386,
          },
          {
            name: "Jurassic World",
            value: 4055,
          },
          {
            name: "Charter Communications",
            value: 2467,
          },
          {
            name: "Chick Fil A",
            value: 2244,
          },
          {
            name: "Planet Fitness",
            value: 1898,
          },
          {
            name: "Pitch Perfect",
            value: 1484,
          },
          {
            name: "Express",
            value: 1112,
          },
          {
            name: "Home",
            value: 965,
          },
          {
            name: "Johnny Depp",
            value: 847,
          },
          {
            name: "Lena Dunham",
            value: 582,
          },
          {
            name: "Lewis Hamilton",
            value: 555,
          },
          {
            name: "KXAN",
            value: 550,
          },
          {
            name: "Mary Ellen Mark",
            value: 462,
          },
          {
            name: "Farrah Abraham",
            value: 366,
          },
          {
            name: "Rita Ora",
            value: 360,
          },
          {
            name: "Serena Williams",
            value: 282,
          },
          {
            name: "NCAA baseball tournament",
            value: 273,
          },
          {
            name: "Point Break",
            value: 265,
          },
        ];
      },
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
    this.render();
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
    render: function () {
      let self = this;
      setTimeout(function () {
        self.cOption = self.option;
        self.cOption.series[0].data = self.data;
      }, 50);
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