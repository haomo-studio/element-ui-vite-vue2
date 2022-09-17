<template>
  <div>
    <el-menu
      :mode="mode"
      :collapse="collapse"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
      :default-active="defaultActive"
      :default-openeds="defaultOpeneds"
      :unique-opened="uniqueOpened"
      :menu-trigger="menuTrigger"
      :router="router"
      :collapse-transition="collapseTransition"
      @open="onOpen"
      @close="onClose"
    >
      <el-menu-item v-for="(item, index) in menuList" :key="index">
        <template slot="title">{{item.title}}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "HmElementNavMenu",
  props: {
   
    /**
     * 菜单内容
     */
    menuList: {
      type: Array,
      default: function() {
        return [
          {
            title: '1',
            },
             {
            title: '2',
            },
             {
            title: '3',
            },
             {
            title: '4',
            }
        ]
      },
    },
          /**
     * 模式
     * @type Enum
     * @options ["horizontal","vertical"]
     */
    mode: {
      type: String,
       default: "vertical"
    },
            /**
     * 是否水平折叠
     */
    collapse: {
      type: Boolean,
      default: false,
    },
    /**
     * 	菜单背景色
     */
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
        /**
     * 	菜单文字颜色
     */
    textColor: {
      type: String,
      default: "#303133",
    },
         /**
     * 	激活文字颜色
     */
    activeTextColor: {
      type: String,
      default: "#409EFF",
    },
             /**
     * 	激活菜单指数
     */
    defaultActive: {
      type: String,
      default: "1",
    },
       /**
     * 菜单指数数组
     */
    defaultOpeneds: {
      type: Array,
      default:function (){
          return []
      }
    },
                /**
     * 是否一个展开
     */
    uniqueOpened: {
      type: Boolean,
      default: false,
    },
          /**
     * 子单触发方式
     * @type Enum
     * @options ["hover","click"]
     */
    menuTrigger: {
      type: String,
       default: "hover"
    },
                    /**
     * 是否路由模式
     */
    router: {
      type: Boolean,
      default: false,
    },
                        /**
     * 是否折叠动画
     */
    collapseTransition: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    };
  },

  methods: {
    onOpen(e) {
      this.$emit("open", e);
    },
    onClose(e) {
      this.$emit("close", e);
    },
  },
};
</script>
<style scoped>
</style>