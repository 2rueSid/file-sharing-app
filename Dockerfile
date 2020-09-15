FROM node:current-alpine
WORKDIR '/app'

COPY ./package.json ./
RUN npm install
RUN npm install knex -g
COPY ./ ./ 

CMD ["npm", "run", "start"]
