#!/bin/sh

./bin/fix-php-version.sh

git stash

git pull origin main --rebase

php ./composer.phar install

php artisan migrate

php artisan cache:clear

cd ./resources/frontend

npm i

npm run build
