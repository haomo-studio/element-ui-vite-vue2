#!/bin/bash
rsync -avz src/components/built-in haomo@192.168.1.7:/data/docker/design-cloud/files/
rsync -avz src/components/built-in haomo@192.168.1.7:/data/docker/design-cloud.stage/files/
rsync -avz src/components/built-in haomo@192.168.1.7:/data/docker/design-cloud.dev/files/
rsync -avz src/components/built-in haomo@192.168.1.8:/data/docker/design-cloud.dev/files/
# rsync -avz src/components/built-in ubuntu@159.75.226.181:/data/docker/design-cloud.prod/files/