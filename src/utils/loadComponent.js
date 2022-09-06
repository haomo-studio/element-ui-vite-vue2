import { defineAsyncComponent } from "vue";
const modules = import.meta.glob("../components/**/**.vue");

import _ from "lodash";

export default {
	install(app ,options){
    // //根据modules加载所有组件
    _.each(modules, (module, key) => {
      let arr = key.split("/");
      let lastName = arr[arr.length - 1];
      let componentName = lastName == "index.vue" ? 
        arr[arr.length - 2] : lastName.split(".vue")[0]
        
      app.component(_.upperFirst(_.camelCase(componentName)), defineAsyncComponent(module));
    })
  }
}
