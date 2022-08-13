#!/bin/bash

echo "Atualizando apt-get..."

apt-get update -y
apt-get upgrade -y

echo "Instalando Servidores..."

apt-get install apache2 -y
apt-get install mysql-server-8.0 -y
apt-get install unzip -y

echo "Baixando projeto"

cd /tmp
wget https://github.com/aluipio/projeto-vue-php/archive/refs/heads/main.zip
unzip main.zip

echo "Copiando os arquivos de projeto"

cd projeto-vue-php-main
cp -R * /var/www/html/
