FROM node:16-alpine As builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/Frontend/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
