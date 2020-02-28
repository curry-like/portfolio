# portfolio

> My portfolio

## Build Setup

```bash
# install dependencies
$ docker-compose build
$ docker-compose run --rm npm install

# serve with hot reload at localhost:3000
$ docker-compose up

# build for production and launch server
$ docker-compose run --rm npm run build
$ docker-compose run --rm npm run start

# generate static project
$ docker-compose run --rm npm run generate

# generate article source
$ docker-compose run --rm nuxt processmd "article/**/*.{yml,md}" --stdout --outputDir article/json > article/summary.json
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
