import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import Components from 'unplugin-vue-components/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import { resolve } from "path"
const os = require("os");


/**
 * 判断代码是否在服务器上的容器里运行
 */
 function isInServerContainer() {
  return os.hostname().indexOf("block-design-live-pid") >= 0;
}

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: {
      overlay: false,
    },
    watch: {
      ignored: [
        "**/src/assets/**",
        "**/tests/**",
        "**/cypress/**",
        "**/docker/**",
        "**/docs/**",
        "**/public/**",
        // 忽略生成的json文件
        "**/src/pages/**/config.json",
        "**/src/pages/**/page.json",
        // 忽略根目录下的文件
        "**/.babelrc",
        "**/.eslintrc.js",
        "**/.gitignore",
        "**/.gitlab-ci.yml",
        "**/babel.config.js",
        "**/cpress.json",
        "**/index.html",
        "**/jest.config.js",
        "**/package*",
        "**/README.md",
        "**/sonar*",
        "**/*.sh",
        "**/vite.config.js",
        "**/yarn.lock",
      ].concat(
        isInServerContainer()
          ? [
              "**/src/components/built-in/**",
              "**/src/pages/test/**",
              "**/src/router/test.js",
              "**/src/components/HmBlock.vue",
            ]
          : []
      ),
    },
    proxy: {
      '/api': {
          target: 'http://jeecgboot-vue3.dev.haomo-tech.com:8000/',
          changeOrigin: true,
      },
    },
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(),
    legacy({
      targets: ['defaults', 'not ie < 9'],
    }),
    Components({
      resolvers: [ElementUiResolver()],
    }),
  ],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'element-ui': ['element-ui'],
        },
      },
    },
  },
  resolve: {
    alias: [
      // /@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: path.resolve('src') + '/',
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "/@/pages",
        replacement: resolve(__dirname, "src/pages"),
      }
    ],
  },
})
