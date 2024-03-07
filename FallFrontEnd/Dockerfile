FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build
RUN ls /usr/local/app/dist/ # Add this line to list the contents of the dist directory
FROM nginx:latest
COPY --from=build /usr/local/app/dist/fall-front-end/browser /usr/share/nginx/html
EXPOSE 80