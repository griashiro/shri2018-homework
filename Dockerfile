FROM node:9

ADD ./ /app
WORKDIR /app

RUN tar -xvf data.tar
RUN npm i

CMD npm run start

EXPOSE 3000
