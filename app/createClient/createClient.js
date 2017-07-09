import React, { Component } from 'react';
import './createClient.scss';
class CreateClient extends Component {

    render() {
        return (
            <form>
                <h2>General Information</h2>
                <label>
                    First Name
                    <input type="text" name="firstName" placeholder="First Name" className="form-control" />
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" placeholder="Last Name" className="form-control" />
                </label>
                <label>
                    Gender
                    <label><input type="radio" name="gender" value="male" /> Male</label>
                    <label><input type="radio" name="gender" value="female" /> Female</label>
                    <label><input type="radio" name="gender" value="not secified" /> Don't want to disclose</label>
                </label>
                <label>
                    Address
                    <textarea name="address" id="" cols="30" rows="10" className="form-control form-control-block"></textarea>
                </label>
                <hr />
                <h2>Paymeny Details</h2>
                <label>
                    Credit card type
                    <label>
                        <input type="radio" name="creditCardType" value="visa" />
                        <img src="./assets/visa-large.gif" alt="visa image" className="card-image" />
                    </label>
                    <label>
                        <input type="radio" name="creditCardType" value="mastercard" />
                        <img src="./assets/download.png" alt="mastercard image" className="card-image" />
                    </label>
                </label>
                <label>
                    Credit card number
                    <input type="text" name="creditCardNumber" placeholder="credit card number" className="form-control"/>
                </label>
                <label>
                    Expiry
                    <input type="text" name="creditCardNumber" placeholder="DD/MM/YYYY" className="form-control"/>
                </label>
                <label>
                    CVV
                    <input type="text" name="creditCardNumber" placeholder="CVV" className="form-control credit-card-cvv" maxLength="3"/>
                </label>
                <button className="submit-button">Submit</button>
            </form>
        )
    }
}

export default CreateClient;