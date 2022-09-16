<template>
  <div class="hm-import-page">
    <component ref="component" :is="pageComponent"></component>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
let pages = import.meta.glob('/src/pages/**/page.vue')
let views = import.meta.glob('/src/views/haomo/**/page.vue')
const modules = Object.assign(pages, views);

/**
 * 背景卡片
 */
export default {
  name: "HmImportPage",
  components: {
  },
  props: {
    /**
     * 页面id
     */
    pageId: {
      type: String,
    },
  },
  data() {
    return {
      pageComponent: null
    }
  },
  mounted() {
    this.pageComponent = this.getPage(this.pageId);
  },
  methods: {
    getPage(pageId) {
      let page;
      let prefix = Object.keys(views).length > 0 ? '/src/views/haomo' : '/src/pages'
      Object.keys(modules).forEach((key) => {
        console.log(key, modules[key])
        if (key == `${prefix}/${pageId}/page.vue`) {
          page = defineAsyncComponent(modules[key]);
        }
      });
      return page;
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped lang="less">
.hm-import-page {
}
</style>