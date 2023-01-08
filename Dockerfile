FROM node:15.14.0-alpine3.10


WORKDIR /app

RUN apk update && \
    npm install -g npm && \
    npm install -g create-nuxt-app processmd

COPY . .

RUN npm clean-install
#RUN npm run generate

ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "dev"]
