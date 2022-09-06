<template>
  <!-- 地图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";
import axios from "axios";

/**
 * 基于GeoJSON的Echarts地图组件
 * GeoJSON文件下载地址：http://datav.aliyun.com/portal/school/atlas/area_selector
 */
export default {
  name: "HmEchartsGeoMap",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 地图 GeoJSON url
     */
    geojson: {
      type: String,
      default:
        "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/100000_full.json",
    },
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function () {
        return {
          title: {
            text: "中国人口密度 （2011）",
            subtext: "人口密度数据来自Wikipedia",
            sublink:
              "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12",
          },
          tooltip: {
            trigger: "item",
            formatter: "{b}<br/>{c} (p / km2)",
          },
          toolbox: {
            show: true,
            orient: "vertical",
            left: "right",
            top: "center",
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {},
            },
          },
          visualMap: {
            min: 800,
            max: 50000,
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            inRange: {
              color: ["lightskyblue", "yellow", "orangered"],
            },
          },
          series: [
            {
              name: "香港18区人口密度",
              type: "map",
              map: "HK", // 自定义扩展图表类型
              label: {
                show: false,
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
          { name: "青海省", value: 20057.34 },
          { name: "新疆维吾尔自治区", value: 15477.48 },
          { name: "内蒙古自治区", value: 31686.1 },
          { name: "江西省", value: 6992.6 },
          { name: "湖南省", value: 44045.49 },
          { name: "广东省", value: 40689.64 },
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
    geojson(value) {
      this.render();
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
      axios.get(this.geojson).then((geojson) => {
        echarts.registerMap(this.option.series[0].map, geojson.data);
        this.cOption = this.option;
        this.cOption.series[0].data = this.data;
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