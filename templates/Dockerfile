FROM node:14
WORKDIR /usr
COPY . ./
RUN ls -a
RUN npm install
RUN npm run build
## Stage 2 for production usage
FROM node:14-alpine
WORKDIR /usr
COPY package.json ./
COPY prisma ./prisma
RUN npm install --only=production
COPY --from=0 /usr/dist .
RUN npm install pm2 -g
CMD ["pm2-runtime","server.js"]