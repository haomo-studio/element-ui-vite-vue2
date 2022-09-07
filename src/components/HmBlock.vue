<template>
  <div
    :id="componentId"
    :style="blockStyle"
    class="hm-block"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
    :class="{ active: active, select: select }"
  >
    <slot></slot>
    <div class="view-drag" v-if="select">
      <DragOutlined />
    </div>
    <div class="view-action" v-if="select">
      <CopyOutlined />
      <DeleteOutlined @click="deleteComponent" />
    </div>
  </div>
</template>

<script>
import {
  CopyOutlined,
  DeleteOutlined,
  DragOutlined,
} from "@ant-design/icons-vue";

import _ from 'lodash';

export default {
  name: "HmBlock",
  components: {
    CopyOutlined,
    DeleteOutlined,
    DragOutlined,
  },
  props: {
    style: {
      type: String,
      default: "background-color: white;",
    },
    select: {
      type: Boolean,
      default: false,
    },
    componentId: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
      widthStyle: "",
    };
  },
  computed: {
    blockStyle() {
      return this.convertCssToVueStyle(this.widthStyle + this.style);
    },
  },
  mounted() {
    this.adjustWidth();
  },
  methods: {
    mouseover() {
      this.active = true;
    },
    mouseleave() {
      this.active = false;
    },
    deleteComponent() {
      this.$emit("deleteComponent", this.componentId);
    },
    /**
     * 若子组件的宽度为100%(此时实际宽度为0)，那么调整HmBlock的宽度为100%；
     */
    adjustWidth() {
      if (this.$el.children.length === 0) {
        return;
      }

      console.log(this.$el.children[0].offsetWidth);
      if (this.$el.children[0].offsetWidth === 0) {
        console.log(`before force update`);
        this.$forceUpdate();
        console.log(`after force update`);
      }
    },
    convertCssToVueStyle(css) {
      if (!css) {
        return {
          backgroundColor: "inherit",
        };
      }

      let items = css.split(";");
      let style = {};
      _.each(items, (item) => {
        let cssItem = _.trim(item);
        if (!cssItem) {
          return;
        }

        style[_.camelCase(_.trim(cssItem.split(":")[0]))] = _.trim(
          cssItem.split(":")[1]
        );
      });
      return style;
    },
  },
};
</script>
<style scoped>
.hm-block {
  display: inline-flex;
  min-height: 30px;
  min-width: 30px;
  border: 1px dashed hsla(0, 0%, 66.7%, 0.7);
  background-color: inherit;

  /* background: rgb(249, 252, 255); */
  /* border:1px dashed black; */
}

.hm-block.active {
  outline: 1px solid #409eff;
  background: rgb(237, 245, 255, 0.1);
}
.select {
  outline: 2px solid #409eff;
  border: 1px solid #409eff;
}
.view-action {
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 24px;
  line-height: 28px;
  background: #409eff;
  z-index: 9;
}
.view-drag {
  position: absolute;
  left: -2px;
  top: -2px;
  bottom: -18px;
  height: 24px;
  line-height: 24px;
  background: #409eff;
  z-index: 9;
}
.anticon {
  font-size: 14px;
  color: #fff;
  margin: 0 5px;
  cursor: pointer;
}
</style>
