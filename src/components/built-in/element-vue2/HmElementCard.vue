<template>
  <div>
    <el-card
      :header="header"
      :body-style="bodyStyle"
      :shadow="shadow"
      >
      <div v-for="o in 4 " class="text item">
    {{text}}
      </div>
   
    </el-card>
  </div>
</template>

<script>
export default {
  name: "HmElementCard",
  props: {
     /**
     * 内容设置
     */
     text: {
      type: String	,
      default: '显示文字',
    },
    /**
     * 设置 header
     */
     header: {
      type: String	,
      default: '默认标题',
    },
    /**
     *body样式
     */
     bodyStyle: {
      type: Object	,
      default(){
        return {padding: "20px" };
      },
   
    },
     /**
     *阴影显示时机
     */
     shadow: {
      type: String	,
      default: 'always',
    }
  },
};
</script>
<style scoped></style>
