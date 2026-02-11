#!/bin/bash
export FOLDER=/var/www/vite-app

if [ -d $FOLDER ]
then
 rm -rf $FOLDER
fi

mkdir -p $FOLDER

echo "The BeforeInstall deployment lifecycle event successfully completed."