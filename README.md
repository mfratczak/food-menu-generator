# menu-food-generator
Polish description: https://blog.fratczak.pl/01-foodmenu-geneza-projektu-i-jego-cele/
English: soon

How to start:

$ git clone git@github.com:mfratczak/myfood-generator.git

$ cd food-menu-generator/

$ docker-compose up --build #Start docker image (prod)

$ docker-compose -f docker-compose.dev.yml up --build

Now, you can open: http://127.0.0.1:80/ and see hello world! :D



Restart one container_name

$ docker-compose restart api

You can set the time to wait for stop before killing the container (in seconds)

$ docker-compose restart -t 30 api
