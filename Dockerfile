FROM centos:centos7

MAINTAINER t.ververs@coolblue.nl

# Install EPEL
RUN yum install -y epel-release

# Install Node...
RUN yum install -y npm

# Copy app to /src
COPY . /src

# Install app and dependencies into /src
RUN cd /src; npm install

EXPOSE 8080

CMD cd /src && node ./app.js