FROM node

WORKDIR /opt/app

COPY ./client/package*.json ./

RUN npm install

EXPOSE 3001

CMD ./scripts/start.sh