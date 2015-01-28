#!/bin/sh
### Import a UI branch into the source tree

pushd .

rm -Rfdv  resources/public/*

cd ../client/
npm install
grunt build

popd

cp -Rv ../client/dist/* resources/public/

exit 0
