<template>
  <Form 
    :form="form" :key="key" 
    :label-col="4"
    :wrapper-col="14"
  >
    <SchemaField :schema="schema" />
  </Form>
</template>
<script>
import { h, defineComponent } from "vue";

import {
  Button,
} from 'element-ui'

import {
  Form,
  FormItem,
  InputNumber,
  Cascader,
  Switch,
  Input,
  Checkbox,
  Radio,
  Select,
  Upload,
  DatePicker,
  TimePicker
} from '@formily/element'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import moment from 'moment'
import _ from 'lodash'
import HmElementSelect from './HmElementSelect.vue'

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

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Button,
    Checkbox,
    Input,
    InputNumber,
    Radio,
    Cascader,
    Select,
    HmElementSelect,
    Switch,
    Upload,
    DatePicker,
    TimePicker,
    Span,
    Pre,
    Img
  },
})

function getFilterValue(type, values, key) {
  if(!values[key]){
    return;
  }
  // 处理input组件
  if (isInput(type) && type !='InputNumber') {
    values[key] = `*${values[key]}*`;
    return;
  }
  // 处理日期组件
  if (isDate(type)) {
    values[key] = moment(values[key]).format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = moment(values[key]).format('HH:mm:ss');
    return;
  }
  // 处理范围日期组件
  if (isRangeDate(type)) {
    values[`${key}_begin`] = moment(values[key][0]).format('YYYY-MM-DD HH:mm:ss');
    values[`${key}_end`] = moment(values[key][1]).format('YYYY-MM-DD HH:mm:ss');
    values[key] = undefined;
    return;
  }
}

function getFeiqiFilterValue(type, values, key) {
  if(!values[key]){
    return;
  }
  // 处理日期组件
  if (isDate(type)) {
    values[key] = moment(values[key]).format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = moment(values[key]).format('HH:mm:ss');
    return;
  }
}

function getFormValue(type, values, key) {
  if(!values[key]){
    return;
  }
  // 处理日期组件
  if (isDate(type)) {
    values[key] = moment(values[key]).format('YYYY-MM-DD HH:mm:ss');
    return;
  }
  // 处理时间组件
  if (isTime(type)) {
    values[key] = moment(values[key]).format('HH:mm:ss');
    return;
  }
}

function setFormValue(type, values, key) {
  // 处理日期\时间组件
  if (isDate(type) || isTime(type)) {
    return moment(values[key]).toDate();
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
  components: { Form, SchemaField },
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
    /**
     * label-col
     */
    labelCol: {
      type: Number,
      default: 4
    },
    /**
     * wrapper-col
     */
    wrapperCol: {
      type: Number,
      default: 14
    }
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
      _.each(this.schema.properties, (item, key) => {
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
      _.each(this.schema.properties, (item, key) => {
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
      _.each(this.schema.properties, (item, key) => {
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
      _.each(this.schema.properties, (item, key) => {
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
        let values = this.form.values
        this.form.validate().then(() => {
          resolve(values)
        }).catch(e => {
            reject(e)
        })
      })
    }
  }
}
</script>
<style scoped>
/deep/ form > div{
  display: flex !important;
  flex-wrap: wrap;
}
</style>
