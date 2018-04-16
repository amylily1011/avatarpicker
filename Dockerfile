FROM node:9.11.1
ENV NPM_CONFIG_LOGLEVEL warn
#COPY . .
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm install
RUN npm run build --production
RUN npm install -g serve
CMD serve -s build
EXPOSE 5000
