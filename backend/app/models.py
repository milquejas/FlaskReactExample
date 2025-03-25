from app.extensions import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    bio = db.Column(db.String(255))
    birthdate = db.Column(db.DateTime)
    city = db.Column(db.String(120))
    country = db.Column(db.String(120))
    hobbies = db.Column(db.String(255))
    goals = db.Column(db.String(255))
    image = db.Column(db.String(255))

    def __repr__(self):
        return f"<User {self.username}>"
