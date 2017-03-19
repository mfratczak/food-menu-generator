# Menu-Food- Generator

0. Docker Information
    * haproxy -> myproxy to split traffic into different domain (todo) #https://github.com/docker/dockercloud-haproxy
    * web container (react) -> myfood.dev
    * api container (flask) -> api.myfood.dev
    * database container (mysql) -> port 3306
    
1. How to start

    ```
    $ git clone git@github.com:mfratczak/myfood-generator.git
    $ cd food-menu-generator/
    ```

$ cd food-menu-generator/

$ docker-compose up --build #Start docker image (prod)

$ docker-compose -f docker-compose.dev.yml up --build


2. Build/run containers

    ```bash 
    #production option
     
    $ docker-compose build
    $ docker-compose up -d
    
    #development version
    
    $ docker-compose -f docker-compose.dev.yml build
    $ docker-compose -f docker-compose.dev.yml up -d
    
    ```

3. Update your system host file (add myfood.dev and api.myfood.dev)

    ```bash
    # UNIX only: get containers IP address and update host (replace IP according to your configuration)
    $ docker network inspect bridge | grep Gateway

    # unix only (on Windows, edit C:\Windows\System32\drivers\etc\hosts)
    $ sudo echo "172.17.0.1 myfood.dev" >> /etc/hosts
    $ sudo echo "172.17.0.1 api.myfood.dev" >> /etc/hosts
    ```
    
4. Live version

    Production:
    ```
        Web:
        
        http://myfood.dev/ and see hello world! :D
        
        Api:
        
        http://api.myfood.dev:1025/ and see hello world! :D [port will be deleted
    ```
    Development:
    ```
        Web:
        
        http://myfood.dev:8080/ and see hello world! :D
        
        Api:
        
        http://api.myfood.dev:1026/ and see hello world! :D
    ```
    
5. Extra option    
    
    * Restart one container_name (prod)
    
        ```
        $ docker-compose restart api
        ```
    * Restart one container_name (dev)
    
        ```
        $ docker-compose -f docker-compose.dev.yml restart api-dev
        ```
    
    * You can set the time to wait for stop before killing the container (in seconds)
    
        ```
        $ docker-compose restart -t 30 api
        ```


6. Project description (only polish)
    
    ```
    https://blog.fratczak.pl/01-foodmenu-geneza-projektu-i-jego-cele/
    ```

    English: soon


