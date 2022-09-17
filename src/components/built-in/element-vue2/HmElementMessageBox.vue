<template>
  <div>
    <div @click="open">{{ title }}</div>
  </div>
</template> 
<script>
import { MessageBox } from 'element-ui';
export default {
    
  name: "HmElementMessageBox",
  props: {
          /**
     * 默认内容
     */
    title: {
      type: String,
      default: "默认内容",
    },
        /**
     * 消息提示配置
     */
    message: {
      type: Object,
      default: function () {
        return {
          message: 'this is a message.',
          grouping: true,
          type: 'success',
        }
      },
    },
  },
   methods: {
        open() {
        this.$alert('这是一段内容', '标题名称',{
          dangerouslyUseHTMLString: true,
         type:"success",
         title:"这是一个标题",
         message:"这是标题名称",
         showClose:true
        });
        
      }
   }
};
</script>
<style>
</style>
