# What is Zeus?

This is a fun project I created for learning Kubernetes.
I use it on my home server to spin up servers for different games easily.
Through the website, one can easily check the status and the address of the server.

Zeus is supposed to be run as a pod on the cluster.
The pod consists of two containers: this website in this repo and the [controller](https://github.com/ollivarila/zeus-controller).

## Contents

This repository contains the website created with Next.js.

## Running

Clone repo and install all of the dependencies.

All of the env variables have default values so they are not required.

Start in dev mode.

_Note: You will need the controller and minikube or equiv to be able to spin up pods._

## Configuration

Create _.env.local_ file with following contents:

```
USER=`username`
PASSWORD=`password`
CONTROLLER_PORT=`port where the controller is running`
COOKIE_SECRET=`cookie secret`
```

## Links

- [container image](https://hub.docker.com/repository/docker/ollivarila/zeus-web/general)
