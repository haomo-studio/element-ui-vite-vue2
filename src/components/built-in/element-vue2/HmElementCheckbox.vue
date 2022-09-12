<template>
  <div>
    <el-checkbox
      v-for="(item, index) in cCheckboxList"
      :key="index"
      v-model="item.checked"
      :disabled="disabled"
      :border="border"
      :size="size"
      :label="item.value"
      @change="onChange(item, index)"
      >{{ item.value }}
    </el-checkbox>
  </div>
</template>

<script>
export default {
  name: "HmElementCheckbox",
  props: {
    /**
     * 数据
     * @model
     */
     checkboxList: {
      type: Array,
      default: function () {
        return [
          {
            checked: true,
            value: "raido",
          },
          {
            checked: false,
            value: "raido",
          },
          {
            checked: false,
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
    }
  },
  data() {
    return {
      cCheckboxList: [
        {
          checked: true,
          value: "raido1",
        },
        {
          checked: false,
          value: "raido2",
        },
        {
          checked: false,
          value: "raido3",
        },
      ],
    };
  },
  watch: {
    checkboxList(value) {
      console.log("监听的值", value);
      this.cCheckboxList = value;
    },
  },
  mounted() {
    this.cCheckboxList = this.checkboxList;
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
