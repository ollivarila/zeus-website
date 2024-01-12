# What is Zeus?

This is a fun project I created for learning Kubernetes.
I use it on my home server to spin up servers for different games easily.
Through the website, one can easily check the status and the address of the server.
Although I use it to spin up game servers, it could be used to toggle any kind of pods.

Zeus is supposed to be run as a pod on a Kubernetes cluster.
The pod consists of two containers: this website in this repo and the [controller](https://github.com/ollivarila/zeus-controller).
Additional configuration is required to route traffic but not getting into specifics here.

If the server is running it should be available [here](https://skd.servegame.com)

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
ADMIN_USERNAME=`username`
PASSWORD=`password`
CONTROLLER_PORT=`port where the controller is running`
COOKIE_SECRET=`cookie secret`
PROD_URL=`production fqdn without proto`
```

## Links

- [live website](https://skd.servegame.com)
- [container image](https://hub.docker.com/repository/docker/ollivarila/zeus-web/general)
