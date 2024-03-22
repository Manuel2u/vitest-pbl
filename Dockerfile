FROM --platform=linux/amd64 node:18.17.1

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN yarn global add nodemon

RUN yarn install

ARG DEV_MONGO_URI

ARG JWT_SECRET

ARG NODE_ENV

ARG MAILGUN_API_KEY

ARG MAIL_DOMAIN

ARG MAILGUN_USERNAME

ARG TOKEN_EXPIRY


ENV DEV_MONGO_URI=${DEV_MONGO_URI}

ENV JWT_SECRET=${JWT_SECRET}

ENV NODE_ENV=${NODE_ENV}

ENV MAILGUN_API_KEY=${MAILGUN_API_KEY}

ENV MAIL_DOMAIN=${MAIL_DOMAIN}

ENV MAILGUN_USERNAME=${MAILGUN_USERNAME}

ENV TOKEN_EXPIRY=${TOKEN_EXPIRY}

EXPOSE 8080

COPY . .

CMD yarn run dev --bind 0.0.0.0:$PORT


