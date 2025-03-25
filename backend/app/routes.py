# app/routes.py
from flask import Blueprint, jsonify, request
from .models import User
from .extensions import db

routes = Blueprint("routes", __name__)


@routes.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    users_list = [
        {"id": user.id, "username": user.username, "email": user.email}
        for user in users
    ]
    return jsonify(users_list)


@routes.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()
    new_user = User(username=data["username"], email=data["email"])
    db.session.add(new_user)
    db.session.commit()

    return jsonify(
        {"id": new_user.id, "username": new_user.username, "email": new_user.email}
    )
