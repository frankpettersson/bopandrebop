#!/usr/bin/env sh

# abort on errors
set -e

npm run lint
npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:frankpettersson/bopandrebop.git master

cd -