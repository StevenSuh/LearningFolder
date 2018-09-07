import os
from flask import Flask, jsonify, request, make_response

app = Flask(__name__, static_url_path = "")
DIR = os.path.dirname(os.path.abspath(__file__))

stores = [{
    "name": "placeholder store",
    "items": [
        {
            "name": "placeholder item",
            "price": 16.00
        }
    ]
}]

@app.route("/")
def index():
    return make_response(open(os.path.join(DIR, "index.html")).read())

@app.route("/store")
def get_stores():
    return jsonify({"stores": stores})

@app.route("/store", methods = ["POST"])
def create_store():
    request_data = request.get_json()
    new_store = {
        "name": request_data["name"],
        "items": []
    }
    stores.append(new_store)
    
    return jsonify(new_store)

@app.route("/store/<string:name>")
def get_store(name):
    for store in stores:
        if store["name"] == name:
            return jsonify(store)
    return jsonify({ "message": "store not found" })

@app.route("/store/<string:name>/item")
def get_store_items(name):
    for store in stores:
        if store["name"] == name:
            return jsonify({ "items": store["items"] })
    return jsonify({ "message": "store item not found" })

@app.route("/store/<string:name>/item", methods = ["POST"])
def create_store_item(name):
    request_data = request.get_json()
    for store in stores:
        if store["name"] == name:
            new_item = {
                "name": request_data["name"],
                "price": request_data["price"]
            }
            store["items"].append(new_item)
            return jsonify(new_item)
    return jsonify({ "message": "store not found" })

app.run(port = 8080)