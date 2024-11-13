from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/api", methods=["GET"])
def index():
    return {
        "channel": "Hello, World!",
        "tutorial":"React, Flask & Docker hijo de la gran"
    }
@app.route("/api/naruto", methods=["GET"])
def naruto():
    return render_template("naruto.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")