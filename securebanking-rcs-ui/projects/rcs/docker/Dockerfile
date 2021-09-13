# Stage 1 - the build process
FROM node:14 as build-ui

WORKDIR /src
ADD package.json package-lock.json .npmrc /src/

RUN NG_CLI_ANALYTICS=ci npm ci

ADD . /src

RUN npm run build.rcs.themes

# Stage 2 - the production environment
FROM nginx:1.13.9-alpine

EXPOSE 80

ARG BUILD_VERSION
ENV BUILD_VERSION ${BUILD_VERSION}

ENV TEMPLATE "forgerock"
ENV DOMAIN ""
ENV AUTHORIZATION_URL "https://as.aspsp.DOMAIN"
ENV AUTHENTICATION_URL "https://am.DOMAIN"
ENV REMOVE_CONSENT_URL "https://rcs.aspsp.DOMAIN"
# apps
ENV ANDROID_PKG_NAME "financial.forgerock.ob.bank"
ENV IOS_APP_ID "to-be-defined"

RUN rm -rf /etc/nginx/conf.d
COPY --from=build-ui /src/dist /usr/share/nginx
COPY projects/rcs/docker/nginx.conf /etc/nginx/conf.d/default.conf
# Android, iOS specific files (only for forgerock customer)
COPY projects/rcs/docker/.well-known /usr/share/nginx/html/.well-known
COPY projects/rcs/docker/start.sh /opt/start.sh

CMD ["/opt/start.sh"]
