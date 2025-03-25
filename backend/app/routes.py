# app/routes.py
from flask import Blueprint, jsonify
from .models import User

routes = Blueprint("routes", __name__)


@routes.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify(
        [
            {"id": user.id, "username": user.username, "email": user.email}
            for user in users
        ]
    )
