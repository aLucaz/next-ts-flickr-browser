FROM node:14.21.3-alpine

WORKDIR /opt/app
COPY . /opt/app
ENV NODE_ENV production
RUN npm install
RUN npm run build
EXPOSE 4000
CMD npm run start
