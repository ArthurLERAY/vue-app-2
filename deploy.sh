#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ArthurLERAY/vue-app-2.git master:gh-pages

cd -