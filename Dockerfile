# base image
FROM node:12.2.0 as builder

# set working directory
WORKDIR '/app'

# install and cache app dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@8.3.25
RUN npm install --save-dev @angular-devkit/build-angular

# add app
COPY . .

#run build
RUN ng build --prod --output-path=dist

#nginx
FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
