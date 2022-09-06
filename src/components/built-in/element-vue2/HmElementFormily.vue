<template>
  <FormProvider :form="form" :key="key">
    <SchemaField :schema="schema" />
  </FormProvider>
</template>

<script>
import { h, defineComponent } from "vue";

import {
  Form,
  FormItem,
  Button,
  Checkbox,
  CheckboxGroup as ElCheckboxGroup,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  RadioGroup as ElRadioGroup,
  Cascader,
  Select as ElSelect,
  Option,
  Slider,
  Switch,
  TimePicker,
  Upload,
} from 'element-ui'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import moment from 'moment'
import _ from 'lodash'

const Span = defineComponent({
  name: 'Span',
  render() {
    const props = this.$attrs
    return h(
      'span',
      {
        attrs: {
          ...props,
        }
      },
      props.value
    )
  },
})
const Pre = defineComponent({
  name: 'Pre',
  render() {
    const props = this.$attrs
    return h(
      'pre',
      {
        attrs: {
          ...props,
        }
      },
      props.value
    )
  },
})

const Textarea = defineComponent({
  name: 'Textarea',
  render() {
    const props = this.$attrs
    return h(
      Input,
      {
        attrs: {
          ...props,
          type: 'textarea'
        }
      },
    )
  },
})

const Img = defineComponent({
  name: 'Img',
  render() {
    const props = this.$attrs
    return h(
      'img',
      {
        attrs: {
          ...props,
          src: props.value
        }
      }
    )
  },
})

const CheckboxGroup = defineComponent({
  name: 'CheckboxGroup',
  render() {
    const props = this.$attrs
    return h(
      ElCheckboxGroup,
      {
        domProps: {
          value: props.value
        },
        attrs: {
          ...props,
        }
      },
      props.options.map(({label, value}) => {
        return h(
          Checkbox,
          {
            attrs: {
              label: value
            }
          },
          label
        )
      })
    )
  },
})

const Select = defineComponent({
  name: 'Select',
  render() {
    const props = this.$attrs
    return h(
      ElSelect,
      {
        attrs: {
          ...props,
        }
      },
      props.options.map(({label, value}) => {
        return h(
          Option,
          {
            attrs: {
              label,
              value
            }
          }
        )
      })
    )
  },
})

const RadioGroup = defineComponent({
  name: 'RadioGroup',
  render() {
    const props = this.$attrs
    return h(
      ElRadioGroup,
      {
        domProps: {
          value: props.value
        },
        attrs: {
          ...props,
        }
      },
      props.options.map(({label, value}) => {
        return h(
          Radio,
          {
            attrs: {
              label: value
            }
          },
          label
        )
      })
    )
  },
})

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Button,
    Checkbox,
    CheckboxGroup,
    DatePicker,
    Input,
    Textarea,
    InputNumber,
    Radio,
    RadioGroup,
    Cascader,
    Select,
    Slider,
    Switch,
    TimePicker,
    Upload,
    Span,
    Pre,
    Img
  },
})

function getFilterValue(type, values, key) {
  // 处理input组件
  if (isInput(type) && type !='InputNumber') {
    values[key] = `*${values[key]}*`;
    return;
  }
  // 处理日期组件
  if (isDate(type)) {
    values[key] = values[key]?.format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = values[key]?.format('HH:mm:ss');
    return;
  }
  // 处理范围日期组件
  if (isRangeDate(type)) {
    values[`${key}_begin`] = values[key]?.[0]?.format('YYYY-MM-DD HH:mm:ss');
    values[`${key}_end`] = values[key]?.[1]?.format('YYYY-MM-DD HH:mm:ss');
    values[key] = undefined;
    return;
  }
}

function getFeiqiFilterValue(type, values, key) {
  // 处理日期组件
  if (isDate(type)) {
    values[key] = values[key]?.format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = values[key]?.format('HH:mm:ss');
    return;
  }
}

function getFormValue(type, values, key) {
  // 处理日期组件
  if (isDate(type) && values[key]) {
    values[key] = values[key].format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type) && values[key]) {
    values[key] = values[key].format('HH:mm:ss');
    return;
  }
}

function setFormValue(type, values, key) {
  // 处理日期\时间组件
  if (isDate(type) || isTime(type)) {
    return moment(values[key]);
  }

  // 处理日期\时间组件
  // if (isSelect(type) && typeof values[key] == 'number') {
  //     return String(values[key]);
  // }

  return values[key];
}

function isSelect(type) {
  return type.indexOf("Select") > -1;
}

function isInput(type) {
  return type.indexOf("Input") > -1;
}

function isDate(type) {
  return type == "DatePicker";
}

function isTime(type) {
  return type == "TimePicker";
}

function isRangeDate(type) {
  return type == "RangePicker";
}

function isRangeTime(type) {
  return type == "RangePicker";
}

export default {
  components: { FormProvider, SchemaField },
  props: {
    /**
      * schema对象
      */
    schema: {
      type: Object,
      default: function() {
        return {
          type: 'object',
          properties: {
            form: {
              type: 'void',
              'x-component': 'Form',
              'x-component-props': {
                'style': {
                  'display': 'flex',
                  'flexWrap': 'wrap'
                },
                'label-width': '10%'
              },
              properties: {
                span: {
                  'default': 'aaaa',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '文字',
                    'name': 'span',
                    'style': {
                      width: '50%',
                    },
                    'label-width': '20%'
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
                  maxLength: 1,
                  default: '输入框',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '输入框',
                    'name': 'input',
                    'style': {
                      width: '50%',
                    },
                    'label-width': '20%',
                    'class': ['required']
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
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '数字输入框',
                    'name': 'inputNumber',
                    'style': {
                      width: '50%',
                    },
                    'label-width': '20%'
                  },
                  'x-component': 'InputNumber',
                  'x-component-props': {

                  }
                },
                checkbox: {
                  type: 'array',
                  default: ['Apple', 'Pear'],
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    label: '多选框',
                    name: 'checkbox',
                    'style': {
                      width: '50%',
                    },
                    'label-width': '20%'
                  },
                  'x-component': 'CheckboxGroup',
                  'x-component-props': {
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
                  'x-decorator-props': {
                    'label': '文本框',
                    'name': 'textarea',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Textarea',
                  'x-component-props': {

                  },
                },
                radio: {
                  type: 'array',
                  default: '2',
                  required: true,
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '单选框',
                    'name': 'radio',
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'RadioGroup',
                  'x-component-props': {
                    'options': [
                      { label: 'Apple', value: '1' },
                      { label: 'Pear', value: '2' },
                      { label: 'Orange', value: '3' },
                    ]
                  }
                },
                cascader: {
                  type: 'array',
                  required: true,
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '级联选择',
                    'name': 'cascader',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Cascader',
                  'x-component-props': {
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
                select: {
                  type: 'string',
                  default: '1',
                  required: true,
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '下拉选择',
                    'name': 'select',
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Select',
                  'x-component-props': {
                    'allowClear': true,
                    'options': [
                      { label: 'Apple', value: '1' },
                      { label: 'Pear', value: '2' },
                      { label: 'Orange', value: '3' },
                    ]
                  }
                },
                slider: {
                  type: 'number',
                  required: true,
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '滑动条',
                    'name': 'slider',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Slider',
                  'x-component-props': {

                  }
                },
                switch: {
                  type: 'boolean',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '开关',
                    'name': 'switch',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Switch',
                  'x-component-props': {

                  }
                },
                date: {
                  type: 'date',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '日期选择',
                    'name': 'date',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'DatePicker',
                  'x-component-props': {

                  }
                },
                rangeDate: {
                  type: 'array',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '日期范围选择',
                    'name': 'rangeDate',
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'DatePicker',
                  'x-component-props': {
                    'type': 'daterange'
                  }
                },
                time: {
                  type: 'datetime',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '时间选择',
                    'name': 'time',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'TimePicker',
                  'x-component-props': {

                  }
                },
                upload: {
                  type: 'object',
                  'x-decorator': 'FormItem',
                  'x-decorator-props': {
                    'label': '上传',
                    'name': 'upload',
                    
                    'style': {
                      width: '100%',
                    }
                  },
                  'x-component': 'Upload',
                  'x-component-props': {
                    'action': 'http://aacsb-stage.bbblackboard.com/api/obe/uploadFile',
                    '@change': function(info) {
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
                      'x-component-props': {
                      },
                      'x-content': "上传文件"
                    }
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
          },
        }
      }
    },
  },
  data() {
    let self = this
    return {
      key: 0,
      form: createForm(),
    }
  },
  watch: {
    schema: {
      handler(val) {
        this.key++;
        this.form = createForm();
      },
      deep: true
    },
  },
  methods: {
    /**
     * 获取飞企过滤器values
     */
    getFeiqiFilterValues() {
      let newValues = _.cloneDeep(this.getValues());
      _.each(this.schema.properties.form.properties, (item, key) => {
        if (newValues[key]) {
          getFeiqiFilterValue(item['x-component'], newValues, key)
        }
      })
      newValues = _(newValues)
        .map((value, key) => {
          return { name: key, value }
        })
        .filter(item => item.value)
        .value()

      return JSON.stringify(newValues);
    },

    /**
     * 获取过滤器values
     */
    getFilterValues() {
      let newValues = _.cloneDeep(this.getValues());
      _.each(this.schema.properties.form.properties, (item, key) => {
        if (newValues[key] != undefined) {
          getFilterValue(item['x-component'], newValues, key)
        }
      })
      return newValues;
    },
    /**
     * 获取表单values
     */
    getFormValues() {
      let newValues = _.cloneDeep(this.getValues());
      _.each(this.schema.properties.form.properties, (item, key) => {
        if (newValues[key] != undefined) {
          getFormValue(item['x-component'], newValues, key);
        }
      })
      return newValues;
    },
    /**
     * 设置表单values
     */
    setFormValues(values) {
      let newValues = {};
      _.each(this.schema.properties.form.properties, (item, key) => {
        if (values[key] != null || values[key] != undefined) {
          newValues[key] = setFormValue(item['x-component'], values, key);
        }
      })
      this.setValues(newValues);
    },
    /**
     * 设置values
     */
    setValues(values) {
      return this.form.setValues(values);
    },
    /**
     * 获取values
     */
    getValues() {
      return this.form.values;
    },
    /**
     * 重置
     */
    reset() {
      this.form.reset();
    },
    /**
     * 校验
     */
    validate() {
      return new Promise((resolve, reject) => {
        let fields = this.form.fields
        let values = this.form.values
        this.form.validate().then(() => {
          resolve(values)
        }).catch(e => {
          // _(e).forEach(item => {
          //   this.$message.error(h('span',
          //     { style: { 'whiteSpace': 'pre-wrap' } },
          //     fields[item.address].decoratorProps.label + "：" + _(item.messages)
          //   ))
          //   reject(e)
          // })
            this.$message.error(h('span',
              { style: { 'whiteSpace': 'pre-wrap' } },
              fields[e[0].address].decoratorProps.label + "：" + _(e[0].messages)
            ))
            reject(e)
        })
      })
    }
  }
}
</script>
<style scoped>
/deep/ .required>label::before {
  display: inline-block;
  margin-right: 4px;
  color: #ff4d4f !important;
  font-size: 14px;
  font-family: SimSun, sans-serif;
  line-height: 1;
  content: '*';
}

/deep/ .el-input {
  width: unset;
}

/deep/ .el-form-item>label:after {
  content: ":";
  position: relative;
  top: -0.5px;
  margin: 0 8px 0 2px;
}
</style>
