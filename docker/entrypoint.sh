#!/bin/bash
cd /root/code-live-preview
export GIT_MERGE_AUTOEDIT=no
git config core.ignorecase false
npm config set ignore-scripts false
git add src/components/ . ':!src/components/built-in'
git add src/pages && git add src/router && git commit -m "chore: restart and bak"
git stash -u && git pull
cp /root/code-live-preview/docker/client.mjs /root/code-live-preview/node_modules/vite/dist/client/client.mjs
rm -rf /root/code-live-preview/node_modules/.vite/*.js.map
#npm run serve
node node_modules/vite/bin/vite.js