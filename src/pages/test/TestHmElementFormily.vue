<template>
  <div>
    <HmElementFormily ref="test" ></HmElementFormily>
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
              // input: {
              //   'type': 'string',
              //   'x-component': 'Input',
              // }
              form: {
                type: 'void',
                'x-component': 'Form',
                'x-component-props':{
                  'style': {
                    'display': 'flex',
                    'flexWrap': 'wrap'
                  },
                  // 'layout': 'vertical',
                  'label-col': {span: 4},
                  'wrapper-col': {span: 14},
                  // 'model': '{{$values}}',
                  // 'rules': {
                  //   input: [{required: true}],
                  //   checkbox: [{required: true, message: 'checkbox不能为空'}],
                  //   inputNumber: [{required: true}],
                  //   radio: [{required: true}],
                  //   select: [{required: true}]
                  // }
                },
                properties: {
                  span: {
                    'default': 'a',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '文字',
                      'name': 'span',
                      'style': {
                        width: '50%',
                      },
                      'labelCol': {span: 4},
                      'wrapperCol': {span: 14},
                    },
                    'x-component': 'Span',
                    'x-component-props':{
                      'style':{
                       'overflowWrap': 'break-word'
                      },
                    },
                  },
                  input: {
                    type: 'string',
                    maxLength: 1,
                    default: '输入框',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '输入框',
                      'name': 'input',
                      'style': {
                        width: '50%',
                      },
                      'class': ['required']
                    },
                    'x-component': 'Input',
                    'x-component-props':{
                      '@change': (e) => {
                        console.log('change', e)
                      }
                    },
                    "x-reactions": {
                      "target": "inputNumber",
                      "when": "{{$self.value == '123'}}",
                      "fulfill": {
                        "state": {
                          "value": 100,
                          "disabled": true
                        }
                      },
                      // "otherwise": {
                      //   "state": {
                      //     "disabled": false
                      //   }
                      // },
                    }
                  },
                  inputNumber: {
                    type: 'number',
                    minimum: 50,
                    exclusiveMinimum: 40,
                    default: 20,
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '数字输入框',
                      'name': 'inputNumber',
                      'style': {
                        width: '50%',
                      }
                    },
                    'x-component': 'InputNumber',
                    'x-component-props':{
                
                    }
                  },
                  checkbox: {
                    type: 'array',
                    default: ['Apple', 'Pear'],
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      label: '多选框',
                      name: 'checkbox',
                      'label-col': {span: 4},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '50%',
                      }
                    },
                    'x-component': 'CheckboxGroup',
                    'x-component-props':{
                      'options': [
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' },
                      ]
                    }
                  },
                  textarea: {
                    type: 'string',
                    maxLength: 1,
                    default: '文本框',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '文本框',
                      'name': 'textarea',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'Textarea',
                    'x-component-props':{
                      
                    },
                  },
                  radio: {
                    type: 'array',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '单选框',
                      'name': 'radio',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'RadioGroup',
                    'x-component-props':{
                      'options':[
                        { label: 'Apple', value: 'Apple' },
                        { label: 'Pear', value: 'Pear' },
                        { label: 'Orange', value: 'Orange' },
                      ]
                    }
                  },
                  cascader: {
                    type: 'array',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '级联选择',
                      'name': 'cascader',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'Cascader',
                    'x-component-props':{
                      'options': [
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
                    }
                  },
                  slider: {
                    type: 'number',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '滑动条',
                      'name': 'slider',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'Slider',
                    'x-component-props':{
                
                    }
                  },
                  switch: {
                    type: 'boolean',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '开关',
                      'name': 'switch',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'Switch',
                    'x-component-props':{

                    }
                  },
                  tree: {
                    type: 'string',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '树型选择',
                      'name': 'tree',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'TreeSelect',
                    'x-component-props':{
                      'tree-data':[
                        {
                          title: 'Node1',
                          value: '0-0',
                          key: '0-0',
                          children: [
                            {
                              value: '0-0-1',
                              key: '0-0-1',
                              slots: {
                                title: 'title',
                              },
                            },
                            {
                              title: 'Child Node2',
                              value: '0-0-2',
                              key: '0-0-2',
                            },
                          ],
                        },
                        {
                          title: 'Node2',
                          value: '0-1',
                          key: '0-1',
                        },
                      ]
                    }
                  },
                  date: {
                    type: 'date',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '日期选择',
                      'name': 'date',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'DatePicker',
                    'x-component-props':{
                    
                    }
                  },
                  rangeDate: {
                    type: 'array',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '日期范围选择',
                      'name': 'rangeDate',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'RangePicker',
                    'x-component-props':{
                    
                    }
                  },
                  time: {
                    type: 'datetime',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '时间选择',
                      'name': 'time',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'TimePicker',
                    'x-component-props':{
                      
                    }
                  },
                  upload: {
                    type: 'object',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '上传',
                      'name': 'upload',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'Upload',
                    'x-component-props':{
                      'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
                      '@change': (info) => {
                        if (info.file.status !== 'uploading') {
                          console.log(info.file, info.fileList);
                        }
                        if (info.file.status === 'done') {
                          this.$message.success(`${info.file.name} file uploaded successfully`);
                        } else if (info.file.status === 'error') {
                          this.$message.error(`${info.file.name} file upload failed.`);
                        }
                      }
                    },
                    properties: {
                      button: {
                        type: 'void',
                        'x-component': 'Button',
                        'x-component-props':{
                        },
                        'x-content': "上传文件"
                      }
                    }
                  },
                  uploadImage: {
                    type: 'object',
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '上传图片',
                      'name': 'uploadImage',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'UploadImage',
                    'x-component-props':{
                      'text': '上传照片',
                      'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
                      'imageUrl': 'http://aacsb-stage.bbblackboard.com/files/1650618573870/2023_2024%20%E5%BA%B7%E7%88%B1%E5%AE%B6%E5%AD%A6%E4%BD%8D%E9%A1%B9%E7%9B%AE20211116%E8%AF%BE%E7%A8%8B%E5%9C%B0%E5%9B%BE.png',
                    }
                  },
                  select: {
                    type: 'string',
                    required: true,
                    'x-decorator': 'FormItem',
                    'x-decorator-props':{
                      'label': '下拉选择',
                      'name': 'select',
                      'label-col': {span: 2},
                      'wrapper-col': {span: 14},
                      'style': {
                        width: '100%',
                      }
                    },
                    'x-component': 'Select',
                    'x-component-props':{
                      'allowClear': true,
                      'options': [
                        { label: 'Apple', value: '1' },
                        { label: 'Pear', value: '2' },
                        { label: 'Orange', value: '3' },
                      ]
                    }
                  },
                  
                }
              }
            },
          }
    }
  },
  created(){
    this.testValue = 'testValue';

    // setTimeout(() => {
    //   this.schema.properties.form.properties.input.default = '234'
    // }, 1000)
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
        uploadImage: {
          file: {},
          fileList: [{
            uid: '2',
            name: 'yyy.png',
            status: 'done',
            url: 'http://aacsb-stage.bbblackboard.com/files/1650618573870/2023_2024%20%E5%BA%B7%E7%88%B1%E5%AE%B6%E5%AD%A6%E4%BD%8D%E9%A1%B9%E7%9B%AE20211116%E8%AF%BE%E7%A8%8B%E5%9C%B0%E5%9B%BE.png',
          }]
        }
      }
      this.$refs.test.setValues(values)
    },
    changeSelectOption(){
      this.schema.properties.form.properties.select['x-component-props'].options = [{
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
