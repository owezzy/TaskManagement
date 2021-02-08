FROM node:12.2.0
LABEL maintainer="Owen Adira"
LABEL description="This a simple Task Management tool"

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.0.2 --unsafe

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0
