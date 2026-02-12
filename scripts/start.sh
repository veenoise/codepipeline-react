#!/bin/bash
export FOLDER=/var/www/vite-app
cd $FOLDER

sudo systemctl reload nginx

echo "The ApplicationStart deployment lifecycle event successfully completed."