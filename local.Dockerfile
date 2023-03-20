FROM node:18-alpine As builder

WORKDIR /usr/src/app
COPY package.json yarn.lock mdb-angular-ui-kit-4.0.0.tgz ./
RUN yarn install
COPY . .

RUN yarn run build --configuration=local

FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/Frontend/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
