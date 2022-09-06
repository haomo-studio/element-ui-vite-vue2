<template>
  <div>
    <HmElementFormily ref="test" :schema="schema"></HmElementFormily>
    <el-button @click="validate">validate</el-button>
    <el-button @click="reset">reset</el-button>
    <el-button @click="getValues">getValues</el-button>
    <el-button @click="setValues">setValues</el-button>
    <el-button @click="changeSelectOption">changeSelectOption</el-button>
  </div>
</template>

<script>
import HmElementFormily from '/@/components/built-in/element-vue2/HmElementFormily.vue'

export default {
  components: {
    HmElementFormily
  },
  data(){
    let self = this;
    return{
      schema: {
        type: 'object',
        properties: {
          span: {
            'default': 'aaaa',
            'title': '文字',
            'required': true,
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '50%',
              },
            },
            'x-component': 'Span',
            'x-component-props': {
              'style': {
                'overflowWrap': 'break-word'
              },
            },
          },
          input: {
            type: 'string',
            title: '输入框',
            required: true,
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '50%',
              },
            },
            'x-component': 'Input',
            'x-component-props': {
              '@input': function(e){
                console.log('e', e)
              }
            },
          },
          inputNumber: {
            type: 'number',
            maxLength: 1,
            title: '数字输入框',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '50%',
              },
            },
            'x-component': 'InputNumber',
            'x-component-props': {

            }
          },
          checkbox: {
            type: 'array',
            default: ['Apple', 'Pear'],
            title: '多选框',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '50%',
              },
            },
            'x-component': 'Checkbox.Group',
            'x-component-props': {
            },
            enum: [
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' },
            ]
          },
          textarea: {
            type: 'string',
            maxLength: 1,
            default: '文本框',
            title: '文本框',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Input.TextArea',
            'x-component-props': {
              'type': 'text'
            },
          },
          radio: {
            type: 'string',
            default: '2',
            required: true,
            title: '单选框',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Radio.Group',
            enum: [
              { label: 'Apple', value: '1' },
              { label: 'Pear', value: '2' },
              { label: 'Orange', value: '3' },
            ],
            'x-component-props': {
              // 'options': [
              //   { label: 'Apple', value: '1' },
              //   { label: 'Pear', value: '2' },
              //   { label: 'Orange', value: '3' },
              // ]
            }
          },
          cascader: {
            type: 'array',
            required: true,
            title: '级联选择',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Cascader',
            'x-component-props': {
            },
            enum: [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]
          },
          select: {
            type: 'string',
            default: '1',
            required: true,
            title: '下拉选择',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Select',
            enum: [
              { label: 'Apple', value: '1' },
              { label: 'Pear', value: '2' },
              { label: 'Orange', value: '3' },
            ]
          },
          switch: {
            type: 'boolean',
            title: '开关',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Switch',
            'x-component-props': {

            }
          },
          upload: {
            type: 'array',
            title: '上传',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Upload',
            'x-component-props': {
              'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
              'textContent': '上传',
            },
            properties: {
              button: {
                type: 'void',
                'x-component': 'Button',
                'x-component-props': {
                },
                'x-content': "上传文件"
              }
            }
          },
          uploadImage: {
            type: 'array',
            title: '上传图片',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              'style': {
                width: '100%',
              },
              'label-col': 2,
              'wrapper-col': 14,
            },
            'x-component': 'Upload',
            'x-component-props': {
              'listType': 'picture-card',
              'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
            }
          },
          button: {
            "type": 'void',
            "x-component": 'Button',
            "x-component-props": {
              "style": {
                width: "50%",
              },
              "@click": function(e) {
                console.log("click", e);
              }
            },
            "x-content": "按钮"
          }
        }
      }
    }
  },
  methods:{
    reset(){
      this.$refs.test.reset()
    },
    validate(){
      this.$refs.test.validate().then(res => {
        console.log('通过', res)
      }).catch(e => {
        console.log('未通过', e)
      })
    },
    getValues(){
      let values = this.$refs.test.getValues()
      console.log('values', values)
    },
    setValues(){
      let values = {
        select: '2',
      }
      this.$refs.test.setValues(values)
    },
    changeSelectOption(){
      this.schema.properties.select.enum = [{
        label: 'test1',
        value: '1'
      },{
        label: 'test2',
        value: '2'
      }]
    }
  }
}
</script>

<style>

</style>
