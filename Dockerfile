FROM node:14-alpine
WORKDIR /app
COPY index.js package*.json ./
RUN npm config set registry https://registry.npmjs.org/
COPY . .
EXPOSE 3000
CMD node index.js