FROM node:12

WORKDIR /ozzolum-website

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3002

CMD ["node", "index.js"]