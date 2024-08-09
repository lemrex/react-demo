#!/bin/bash


wget https://obs-community-intl.obs.ap-southeast-1.myhuaweicloud.com/obsutil/current/obsutil_linux_amd64.tar.gz
echo "Downloaded obsutil_linux_amd64.tar.gz"


mkdir -p obsutil


sudo tar -xzvf obsutil_linux_amd64.tar.gz -C obsutil --strip-components=1
echo "Unzipped obsutil_linux_amd64.tar.gz"


cd obsutil
ls -la
echo "dir changed to obsutil"

sudo chmod 755 obsutil
echo "changed permission"

./obsutil version


./obsutil config -i=$ak -k=$sk -e=$endpoint
echo "obsutil configured"


./obsutil cp /root/build.zip obs://obs-xx
echo "Files copied from OBS"