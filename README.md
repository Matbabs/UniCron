# CARGO - Docker Dashboard  UI

![](https://img.shields.io/static/v1.svg?label=Docker&message=Managing&color=1e3f57)
![](https://img.shields.io/static/v1.svg?label=Docker&message=Dashboard&color=1965e5)
![](https://img.shields.io/static/v1.svg?label=Cluster&message=Managing&color=1e3f57)
![](https://img.shields.io/static/v1.svg?label=Cluster&message=Dashboard&color=1965e5)

CARGO allows you to view the status of the docker engine of your machine/server.

For this purpose it enables to visualize all the containers in operation. Therefore, the user has access to two modes.

> * Containers:
>   
>    Status of the containers, and the possibility to stop the containers in progress.

> * Cluster Swarm:
>
>   Status of a swarm cluster, also contains the possibility to shut down the cluster.

The interface also has a search role that allows to find a container and all the information related to it.

![](./assets/home.png)


![](./assets/containers.png)

## Depencies

* Python3
    * Flask: `pip install flask`, `pip install flask-cors`
    
* npm
    * install dep: `npm install`

## Run

Use the command below:

`python3 cargo.py`
# UniCron
