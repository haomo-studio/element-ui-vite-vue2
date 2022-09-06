FROM registry.cn-shenzhen.aliyuncs.com/block-design/element-ui-vite-vue2:latest
RUN git config --global user.name "haomo"
RUN git config --global user.email "element-ui-vite-vue2@haomo-studio.com"
RUN npm install -g npm tbify
RUN rm -rf /root/code-live-preview
RUN git clone ssh://git@gitlab.haomo-studio.com:15822/block-design-components/element-ui-vite-vue2.git /root/code-live-preview
RUN cd /root/code-live-preview && tyn
RUN git config core.ignorecase false
COPY .vite /root/code-live-preview/node_modules/
COPY client.mjs /root/code-live-preview/node_modules/vite/dist/client/client.mjs
COPY entrypoint.sh /root/entrypoint.sh
# 本Dockerfile已经通过gitlab-ci自动构建镜像
# 执行命令构建：docker build  -t registry.cn-shenzhen.aliyuncs.com/block-design/block-design-live:element-ui-vite-vue2 . --no-cache