FROM node:18-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install -g @angular/cli@17.3.9
# Clear npm cache before installing to prevent "idealTree" error
RUN npm cache clean --force && npm install

RUN ng build
COPY . .

FROM nginx:alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]