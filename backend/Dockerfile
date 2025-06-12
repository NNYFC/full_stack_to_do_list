FROM node:18-alpine
WORKDIR /usr/src/app

ARG PORT
ARG HOST_URL
ARG DATABASE_URL
ARG DATABASE_PORT
ARG DATABASE_PASSWORD
ARG DATABASE_NAME
ARG DATABASE_USERNAME

COPY backend/package*.json ./
# Clear npm cache before installing to prevent "idealTree" error
RUN npm cache clean --force && npm install
COPY . .

EXPOSE 3000
CMD ["npm", "start"]