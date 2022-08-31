import { parseComponent } from '@vuedoc/parser'

parseComponent({
  filename: 'node_modules/element-ui/packages/button/src/button.vue'
}).then(component => {
  console.log(JSON.stringify(component, null, 2));
}).catch(err => {
  console.error(err);
})