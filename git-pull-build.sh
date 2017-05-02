#!/bin/sh
cd ~/documents/Personal/React/ReactBlogger
echo "Pulling from ReactBlogger"
git pull
echo "Bundle ReactBlogger for Release"
npm run bundle-android
echo "Finished bundle ReactBlogger"
