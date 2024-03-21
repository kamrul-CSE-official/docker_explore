FROM node:alpine3.19
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]