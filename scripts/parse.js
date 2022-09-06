import { parseComponent } from '@vuedoc/parser'
import fs from 'fs'

parseComponent({
  filename: 'node_modules/element-ui/packages/' + process.argv[3]
}).then(component => {
  // 存储json到components/element-vue2/<componentName></componentName>.json
  fs.writeFileSync(`docs/parse/${process.argv[2]}.json`, JSON.stringify(component, null, 2))
}).catch(err => {
  console.error(err);
})