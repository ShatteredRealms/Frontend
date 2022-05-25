FROM node:16-alpine As builder

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build -- --c dev

FROM nginx:1.15.8-alpine
COPY --from=builder /usr/src/app/dist/Frontend/ /usr/share/nginx/html
