FROM node:9.11.1
ENV NPM_CONFIG_LOGLEVEL warn
ENV PORT 5000
COPY . .
RUN npm install
RUN npm run build --production
RUN npm install -g serve
CMD PORT=$PORT serve -s build
EXPOSE 5000
