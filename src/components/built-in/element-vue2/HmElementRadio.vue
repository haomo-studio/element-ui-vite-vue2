<template>
  <div>
    <el-radio
      v-for="(item, index) in cRaidoList"
      :key="index"
      v-model:value="cValue"
      :border="border"
      :size="size"
      :disabled="disabled"
      :label="item.label"
      @change="onChange(item, index)"
      >{{ item.value }}
    </el-radio>
  </div>
</template>

<script>
export default {
  name: "HmElementRadio",
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 数据
     * @model
     */
    raidoLIst: {
      type: Array,
      default: function () {
        return [
          {
            label: 1,
            value: "raido",
          },
          {
            label: 2,
            value: "raido",
          },
          {
            label: 3,
            value: "raido",
          },
        ];
      },
    },
    /**
     * 是否显示边框
     */
    border: {
      type: Boolean,
      default: false,
    },
    /**
     * 单选框尺寸
     * @type Enum
     * @options ["", "medium", "small", "mini"]
     */
    size: {
      type: String,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cValue: "",
      cRaidoList: [
        {
          label: 1,
          value: "raido1",
        },
        {
          label: 2,
          value: "raido2",
        },
        {
          label: 3,
          value: "raido3",
        },
      ],
    };
  },
  watch: {
    raidoLIst(value) {
      console.log("监听的值", value);
      this.cRaidoList = value;
    },
  },
  mounted() {
    this.cRaidoList = this.raidoLIst;
  },
  methods: {
    onChange: function (e, num) {
      this.$emit("onChange", e, num);
      console.log("点击的值", e, num);
    },
  },
};
</script>
<style scoped></style>
