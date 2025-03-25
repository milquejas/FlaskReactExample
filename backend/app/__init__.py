# app/__init__.py
from dotenv import load_dotenv
import os
from flask import Flask
from .extensions import db
from flask_migrate import Migrate
from flask_cors import CORS
from .config import Config
from .routes import routes

# Lataa .env-tiedoston ympäristömuuttujat
load_dotenv()
print("Database URI:", os.getenv("SQLALCHEMY_DATABASE_URI"))
migrate = Migrate()


def create_app():
    # Luodaan Flask-sovellus
    app = Flask(__name__)

    # Ladataan konfiguraatio
    app.config.from_object(Config)

    # Alustetaan CORS
    CORS(app)

    # Alustetaan db ja migrate sovellukseen
    db.init_app(app)
    migrate.init_app(app, db)

    # Reitit
    app.register_blueprint(routes)

    return app
