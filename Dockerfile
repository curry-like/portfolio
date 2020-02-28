FROM node:13.8.0-alpine3.10


WORKDIR /app

RUN apk update && \
    npm install -g npm && \
    npm install -g create-nuxt-app processmd

ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "dev"]
