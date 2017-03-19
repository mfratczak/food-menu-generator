import socket
from flask import Flask
from flask import request
# from flask import socket
# from flask import os
from pprint import pprint

app = Flask(__name__)


@app.route("/")
def hello():
    if request.headers.getlist("X-Forwarded-For"):
        ip = request.headers.getlist("X-Forwarded-For")[0]
    else:
        ip = request.remote_addr

    # ip = request.environ['REMOTE_ADDR']
    a = "Ip: "
    b = " "
    b = ip
    c = " "
    c = " Host: "+socket.gethostname()

    return a+b+c


if __name__ == "__main__":
    app.run()
