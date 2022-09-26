<template>
    <div>
      <el-steps
        :space="space"
        :direction="direction"
        :active="active"
        :process-status="processStatus"
        :finish-status="finishStatus"
        :align-center="alignCenter"
        :simple="simple"
      >
        <el-step
          :title="item.title"
          v-for="(item, index) in title"
          :key="index"
        ></el-step>
      </el-steps>
      <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    </div>
  </template>
  
  <script>
  export default {
    name: "HmElementSteps",
    data() {
      return {
        active: 0,
      };
    },
    props: {
      /**
       * 每个 step 的间距
       */
      space: {
        type: String,
        default: "180px",
      },
      /**
       * 显示方向
       * @type Enum
       * @options ["vertical","horizontal"]
       */
      direction: {
        type: String,
        default: "horizontal",
      },
      /**
       * 当前激活步骤
       */
      active: {
        type: Number,
        default: 0,
      },
      /**
       * 设置当前步骤的状态
       * @type Enum
       * @options ["wait","process","finish","error","success"]
       */
      processStatus: {
        type: String,
        default: "process",
      },
      /**
       * 设置结束步骤的状态
       * @type Enum
       * @options ["wait","process","finish","error","success"]
       */
      finishStatus: {
        type: String,
        default: "success",
      },
      /**
       * 进行居中对齐
       */
      alignCenter: {
        type: Boolean,
        default: false,
      },
      /**
       * 是否应用简洁风格
       */
      simple: {
        type: Boolean,
        default: false,
      },
      /**
       * 标题
       */
      title: {
        type: Array,
        default: () => {
          return [{ title: "步骤1" }, { title: "步骤2" }, { title: "步骤3" }];
        },
      },
      /**
       * 描述性文字
       */
      description: {
        type: String,
      },
      /**
       * 图标
       * @type Icon
       */
      icon: {
        type: String,
      },
      /**
       * 设置当前步骤的状态，不设置则根据 steps 确定状态
       * @type Enum
       * @options ["wait","process","finish","error","success"]
       */
      status: {
        type: Array,
      },
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>