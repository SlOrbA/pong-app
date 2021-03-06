FROM node

WORKDIR /usr/src/app

COPY package*.json ./

run yarn

COPY . .

EXPOSE 8080

CMD [ "npm" , "start" ]
