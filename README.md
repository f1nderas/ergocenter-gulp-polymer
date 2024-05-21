Шаблон для клиентских приложений на JavaScript
=================================================

## Используемые технологии:

- [gulp](https://gulpjs.com/)
- [nvm](https://github.com/nvm-sh/nvm)
- [direnv](https://direnv.net/)
- [editorconfig](https://editorconfig.org/)
- [mochajs](https://mochajs.org/)

## Создание проекта из этого шаблона

```
git clone git@gitlab.orion.org:fortress-web/zrk.git your-project
cd your-project
rm -rf ./.git
git init
nvm install
npm install
npm run dev
```

После запуска проекта нужно [отключить кеш](docs/images/disable_cache.png) в браузере!

## Deploy

```
# Установить ansible
npm run deploy:install

# Установить переменную deploy_to "Директория на удаленном сервере"
cd your-project
nano config/deploy/staging.yml

# Скопировать ssh-ключ для беспарольного доступа
ssh-copy-id -i ~/.ssh/id_rsa.pub user@web-staging.orion.org

# Залить проект на staging (deploy)
npm run deploy:to:staging
```
