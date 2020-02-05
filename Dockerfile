FROM node:13.7.0-alpine
WORKDIR /usr/src/app
RUN npm install --save prop-types
RUN npm install -g create-react-app