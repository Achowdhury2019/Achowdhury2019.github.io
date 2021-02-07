from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:Tarin2019@@localhost/shopping'
db=SQLAlchemy(app)


class Data(db.Model):

    def __init__(self,first_,last_,email_,address_,city_,state_,zip_,country_,cardname_,cardnum_,exp_,cvv_):
        self.first_=first_
        self.last_=last_
        self.email_=email_
        self.address_=address_
        self.city_=city_
        self.state_=state_
        self.zip_=zip_
        self.country_=country_
        self.cardname_=cardname_
        self.cardnum_=cardnum_
        self.exp_=exp_
        self.cvv_=cvv_

    __tablename__="checkOut"
    id=db.Column(db.Integer, primary_key=True)
    first_=db.Column(db.String(50))
    last_=db.Column(db.String(50))
    email_=db.Column(db.String(120), unique=True)
    address_=db.Column(db.String(300))
    city_=db.Column(db.String(80))
    state_=db.Column(db.String(80))
    zip_=db.Column(db.Integer)
    country_=db.Column(db.String(100))
    cardname_=db.Column(db.String(80))
    cardnum_=db.Column(db.String)
    exp_=db.Column(db.String)
    cvv_=db.Column(db.Integer)


@app.route("/")
def index():
    return render_template("Project2.html")


@app.route('/checkout')
def checkout():
    return render_template('checkout.html')

@app.route("/thankyou", methods=['POST'])
def thankyou():
    if request.method=='POST':
        first=request.form["first_name"]
        last=request.form["last_name"]
        email=request.form["email_name"]
        address=request.form["address_name"]
        city=request.form["city_name"]
        state=request.form["state_name"]
        zipcode=request.form["zip_code"]
        country=request.form["country_name"]
        cardname=request.form["card_name"]
        cardnum=request.form["card_number"]
        exp=request.form["expire_date"]
        cvv=request.form["cvv_number"]

        print(request.form)

        data=Data(first,last,email,address,city,state,zipcode,country,cardname,cardnum,exp,cvv)
        db.session.add(data)
        db.session.commit()

        return render_template("thankyou.html")  

if __name__=='__main__':
    app.debug=True
    app.run()