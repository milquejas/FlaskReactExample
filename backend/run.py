# run.py
from app import create_app, db

app = create_app()

# Alustetaan tietokanta (luodaan tarvittaessa)
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
