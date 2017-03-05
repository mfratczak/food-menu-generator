FROM python:3.6.0

RUN apt-get update && apt-get install -y \
    git \
    unzip

RUN pip install flask cherrypy
#RUN pip install -r /src/requirements.txt

EXPOSE 80

WORKDIR /app

CMD [ "python", "server.py" ]
