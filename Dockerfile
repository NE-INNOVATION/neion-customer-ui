### STAGE 1: Build ###
#FROM node:latest AS build

#### make the 'app' folder the current working directory
#WORKDIR /usr/src/app

#### copy both 'package.json' and 'package-lock.json' (if available)
#COPY package*.json ./

#### install angular cli
#RUN npm install -g @angular/cli

#### install project dependencies
#RUN npm install

#### copy things
#COPY . .

#### generate elements
#RUN npm run build:neion-customer-ui:externals

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged

#### copy nginx conf
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf ./config/nginx.conf

#### copy artifact build from the 'build environment'
COPY ./elements /usr/share/nginx/html

RUN rm -rf ./elements

#### don't know what this is, but seems cool and techy
CMD ["nginx", "-g", "daemon off;"]
