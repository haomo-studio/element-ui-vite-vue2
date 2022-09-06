FROM node:16.17.0-alpine3.16
RUN echo http://mirrors.aliyun.com/alpine/v3.12/main/ > /etc/apk/repositories && \
    echo http://mirrors.aliyun.com/alpine/v3.12/community/ >> /etc/apk/repositories
RUN apk update
RUN apk add git
RUN apk add bash
RUN git config --global user.name "haomo"
RUN git config --global user.email "element-ui-vite-vue2@haomo-studio.com"
RUN apk add openssh
RUN mkdir /root/.ssh
COPY id_rsa /root/.ssh/id_rsa
COPY id_rsa.pub /root/.ssh/id_rsa.pub
RUN chmod 600 /root/.ssh/id_rsa && touch /root/.ssh/known_hosts
RUN ssh-keyscan gitlab.haomo-studio.com >> ~/.ssh/known_hosts
RUN echo "StrictHostKeyChecking no" >> /etc/ssh/ssh_config
RUN eval `ssh-agent` && ssh-add /root/.ssh/id_rsa
RUN git clone ssh://git@gitlab.haomo-studio.com:15822/block-design-components/element-ui-vite-vue2.git /root/code-live-preview
RUN cd /root/code-live-preview
COPY entrypoint.sh /root/entrypoint.sh
# 构建zsh
RUN apk add zsh
COPY install.zsh.sh /root/install.zsh.sh
RUN sh /root/install.zsh.sh
COPY zshrc /root/zshrc
RUN cat /root/zshrc >> /root/.zshrc
# 本Dockerfile已经通过gitlab-ci自动构建镜像
# 执行命令构建：docker build  -t registry.cn-shenzhen.aliyuncs.com/block-design/block-design-live:block-design-jeecg . --no-cache