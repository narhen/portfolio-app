FROM nginx:1.11.8
MAINTAINER "Henrik Nårstad"

COPY build /var/www/portfolio-app
COPY nginx.conf /etc/nginx/nginx.conf
