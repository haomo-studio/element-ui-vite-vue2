import jp from "jsonpath";
import _ from "lodash";

/**
 * js-filter
 * @param {*} param
 * @returns
 */
export function filter({ input, filterExpr }) {
  return jp.query(input, `$[?(${filterExpr})]`)
}

/**
 * 遍历目标对象，使用jsonPath进行替换
 * @param {*} item 元数据
 * @param {*} obj 目标对象
 */
function mapJsonPath(item, obj) {

  _.each(obj, (value, key, collection) => {
    if (typeof value === 'string') {
      if (value.indexOf("$.") > -1) {
        collection[key] = jp.query(item, value);
      } else {
        collection[key] = item[value];
      }
      return;
    }
    if (Array.isArray(value)) {
      return;
    }
    if (typeof value === 'object') {
      mapJsonPath(item, value)
      return;
    }
  })
}

/**
 * js-map
 * @param {*} param
 * @returns
 */
export function map({ input, output, type }) {
  return input.map(item => {
    let newOutput = _.cloneDeep(output)
    mapJsonPath(item, newOutput);
    if(type === "increment") {
      return Object.assign(item, newOutput);
    }else{
      return newOutput;
    }
  });
}

/**
 * js-reduce
 * @param {*} param
 * @returns
 */
export function reduce({ input, target, type }) {
  if(type === "avg") {
    return input.reduce((pre, cur, index, arr) => {
      cur = cur instanceof Object ? jp.query(cur, target) : cur;
      return pre + Number(cur)
    }, 0) / input.length;
  }
  if(type === "sum") {
    return input.reduce((pre, cur, index, arr) => {
      cur = cur instanceof Object ? jp.query(cur, target) : cur;
      return pre + Number(cur)
    }, 0);
  }
  if(type === "join") {
    return input.reduce((pre, cur, index, arr) => {
      cur = cur instanceof Object ? jp.query(cur, target) : cur;
      return pre.concat(cur);
    }, "");
  }
}

/**
 * js-array2tree
 * @param {*} param
 * @returns
 */
export function array2tree({ arr, key, parentColumn, childrenColumn }) {
  let map = {}, node, roots = [], i;

  for (i = 0; i < arr.length; i += 1) {
    map[arr[i][key]] = i;
    arr[i][childrenColumn] = [];
  }

  for (i = 0; i < arr.length; i += 1) {
    node = arr[i];
    if (node[parentColumn]) {
      // if you have dangling branches check that map[node.parentId] exists
      if (typeof arr[map[node[parentColumn]]] === 'undefined') {
        console.log(`找不到数组中的：`, map[node[parentColumn]], parentColumn)
        continue;
      }
      arr[map[node[parentColumn]]][childrenColumn].push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}
