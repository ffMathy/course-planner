FROM node:10-alpine
WORKDIR /app

COPY ./package.json ./
RUN yarn

COPY ./src ./
CMD ["yarn", "start"]