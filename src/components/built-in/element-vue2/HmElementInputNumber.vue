<template>
  <div class="page">
    <div class="title">{{title}}</div>
    <el-input-number
      v-model="cValue"
      :max="maxValue"
      :min="minValue"
      :step="stepValue"
      :step-strictly="stepStrictly"
      :precision="precision"
      :size="size"
      :disabled="disabled"
      :controls="controls"
      :controls-position="controlsPosition"
      :name="name"
      :label="label"
      :placeholder="placeholder"
      @change="onChange"
      @blur="onblur"
      @focus="onFocus"
    ></el-input-number>
  </div>
</template>

<script>
export default {
    name: "HmElementInputNumber",
    props: {
        /**
         * 初始值
         * @model
         */
        value:{
            type:Number,
            default:0
        },
        /**
         * 标题
         */
        title:{
            type:String,
            default:'计数器：'
        },
        /**
         * 最大值
         */
        maxValue:{
            type:Number,
        },
        /**
         * 最小值
         */
        minValue:{
            type:Number,
            default:0
        },
        /**
         * 步长
         */
        stepValue:{
            type:Number,
            default:1
        },
        /**
         * 步长倍数
         */
        stepStrictly:{
            type:Boolean,
            default:false
        },
        /**
         * 数值精度
         */
         precision:{
            type:Number,
            default:0
        },
         /**
         * 是否禁用
         */
         disabled:{
            type:Boolean,
            default:false
        },
         /**
         * 使用控制按钮
         */
         controls:{
            type:Boolean,
            default:true
        },
        /**
         * 大小
         * @type Enum
         * @default large
         * @options ["large","medium","small","mini"]
         */
        size:{
            type:String,
            default:"large"
        },
         /**
         * 控制按钮位置
         */
         controlsPosition:{
            type:String,
            default:''
        },
          /**
         * 原生属性
         */
         name:{
            type:String,
            default:''
        },
        
          /**
         * 	输入框关联文字
         */
         label:{
            type:String,
            default:''
        },
        
          /**
         * 输入框默认
         */
         placeholder:{
            type:String,
            default:''
        },
        
        

    },
    data() {
        return {
            cValue:0,
        }
    },
    watch: {
        cvalue(value){
            this.cValue = value
        },
        cValue(val){
            this.$emit("getData",val)
        }
    },
    methods: {
        onChange: function (currentValue, oldValue) {
            this.$emit('change',currentValue, oldValue)
        },
        onblur: function (e) {
            this.$emit('blur',e)
        },
        onFocus:function (e) {
            this.$emit('focus',e)
        }
    },

}
</script>

<style scoped>
    .page{
        width: 100%;
        display:flex;
        align-items: center;
        padding-left:5vw;
    }
</style>