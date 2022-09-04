<template>
  <div id="hm-element-table-test">
    <hm-element-table :show-column-no="true"></hm-element-table> <br/><br/>

    <hm-element-table :columns="columns2" :data="data2"></hm-element-table><br/><br/>


    <hm-element-table
      :columns="columns"
      :data="data"
    ></hm-element-table><br/><br/>


    <hm-element-table :columns="columns" :data="dataCombineC1" :combined="['r1c1:r4c1']"></hm-element-table><br/><br/>

    <hm-element-table
      :columns="sysUserColumns"
      url="/api/restify/sysUser/list"
    ></hm-element-table>
    <!-- <hm-element-table :columns="columns" :data="dataCombineR1" :combined="['r1']"></hm-element-table><br/><br/>
 -->
    <!-- <hm-element-table :columns="columns" :data="dataCombineC1C2" :combined="['c1', 'c2']"></hm-element-table><br/><br/>
 -->
    <!-- <hm-element-table :columns="columns" :data="dataCombineR2R3" :combined="['r2r3']"></hm-element-table><br/><br/>
 -->

    <!-- <hm-element-table :columns="columns" :data="dataLarge"></hm-element-table><br/><br/>
 -->
  </div>
</template>

<script>
import _ from 'lodash';
import HmElementTable from '/@/components/built-in/element-vue2/HmElementTable.vue'
import moment from 'moment'
import { Input as ElInput } from 'element-ui'
import { h } from 'vue';

export default {
  components: {
    HmElementTable,
    ElInput
  },
  data() {
    let dataLarge = [];
    for (let i = 0; i < 100; i++) {
      dataLarge.push({ key: `${i + 1}`, c1: `r${i + 1}c1`, c2: `r${i + 1}c2`, c3: `r${i + 1}c3`, c4: `r${i + 1}c4` })
    }
    return {
      rowClassName: {
        class: function (record, index) {
          console.log(`record, index`)
          if (index % 2) {
            return 'red-row';
          } else {
            return 'blue-row';
          }
        }
      },
      defaultPickerValue: moment().format(),
      columns: [
        {
          label: "c1",
          prop: "c1",
          columnKey: "c1",
        },
        {
          label: "c2",
          prop: "c2",
          columnKey: "c2",
        },
        {
          label: "c3",
          prop: "c3",
          columnKey: "c3"
        },
        {
          label: "c4",
          prop: "c4",
          columnKey: "c4"
        }
      ],
      sysUserColumns: [
        {
          label: "username",
          prop: "username",
          columnKey: "username",
        },
        {
          label: "realname",
          prop: "realname",
          columnKey: "realname",
        },
        {
          label: "phone",
          prop: "phone",
          columnKey: "phone"
        },
        {
          label: "email",
          prop: "email",
          columnKey: "email"
        }
      ],
      columns2: [
        {
          type: "selection"
        },
        {
          label: "姓名",
          children: [{
            label: "姓",
            prop: "familyName",
            columnKey: "familyName",
            fixed: true
          }, {
            label: "名",
            prop: "givenName",
            columnKey: "givenName",
            fixed: true,
            formatter: function(row, column, cellValue, index) {
              return h(ElInput, {});
            }
          }]
        },
        {
          label: "年龄",
          prop: "age",
          columnKey: "age",
          width: 80,
        },
        {
          label: "地址",
          prop: "address",
          columnKey: "address",
          ellipsis: true,
        },
        {
          label: "性别",
          prop: "sexual",
          columnKey: "sexual",
        },
        {
          label: "毕业院校",
          prop: "school",
          columnKey: "school",
          formatter: function(row, column, cellValue, index) {
            return h(ElInput, {});
          }
        },
        {
          label: "操作",
          type: 'action',
        },
      ],

      data2: [
        {
          key: "1",
          name: "李四",
          familyName: '李',
          givenName: '四',
          age: 32,
          address: "北京",
          sexual: "男",
          school: "加里敦大学",
        },
        {
          key: "2",
          name: "张三",
          familyName: '张',
          givenName: '三',
          age: 42,
          address: "北京",
          sexual: "男",
          school: "加里敦大学",
        },
        {
          key: "3",
          name: "王五",
          familyName: '王',
          givenName: '五',
          age: 32,
          address: "深圳",
          sexual: "男",
          school: "加里敦大学",
        },
      ],

      data: [
        { key: "1", c1: "r1c1", c2: "r1c2", c3: "r1c3", c4: "r1c4" },
        { key: "2", c1: "r2c1", c2: "r2c2", c3: "r2c3", c4: "r2c4" },
        { key: "3", c1: "r3c1", c2: "r3c2", c3: "r3c3", c4: "r3c4" },
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4" },
      ],

      dataCombineC1: [
        { key: "1", c1: "c1", c2: "r1c2", c3: "r1c3", c4: "r1c4" },
        { key: "2", c1: "c1", c2: "r2c2", c3: "r2c3", c4: "r2c4" },
        { key: "3", c1: "c1", c2: "r3c2", c3: "r3c3", c4: "r3c4" },
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4" },
      ],

      dataCombineR1: [
        { key: "1", c1: "r1", c2: "r1", c3: "r1", c4: "r1" },
        { key: "2", c1: "r2c1", c2: "r2c2", c3: "r2c3", c4: "r2c4" },
        { key: "3", c1: "r3c1", c2: "r3c2", c3: "r3c3", c4: "r3c4" },
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4" },
      ],

      dataCombineC1C2: [
        { key: "1", c1: "c1c2", c2: "c1c2", c3: "r1c3", c4: "r1c4" },
        { key: "2", c1: "c1c2", c2: "c1c2", c3: "r2c3", c4: "r2c4" },
        { key: "3", c1: "c1c2", c2: "c1c2", c3: "r3c3", c4: "r3c4" },
        { key: "4", c1: "c1c2", c2: "r4c2", c3: "r4c3", c4: "r4c4" },
      ],

      dataCombineR2R3: [
        { key: "1", c1: "r1c1", c2: "r1c2", c3: "r1c3", c4: "r1c4" },
        { key: "2", c1: "r2r3", c2: "r2r3", c3: "r2r3", c4: "r2r3" },
        { key: "3", c1: "r2r3", c2: "r2r3", c3: "r2r3", c4: "r2r3" },
        { key: "4", c1: "r4c1", c2: "r4c2", c3: "r4c3", c4: "r4c4" },
      ],

      dataLarge: dataLarge
    }
  },
  mounted() {
    console.log('mounted');
  },
  method: {

  }
}
</script>

<style scoped>
#hm-element-table-test /deep/ .red-row {
  background-color: red;
}

#hm-element-table-test /deep/ .blue-row {
  background-color: blue;
}
</style>
