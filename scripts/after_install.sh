#!/bin/bash
export FOLDER=/var/www/vite-app
cd $FOLDER
cp ../.env .

echo "The AfterInstall deployment lifecycle event successfully completed."