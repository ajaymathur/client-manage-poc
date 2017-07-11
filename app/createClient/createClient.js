import React, { Component } from 'react';
import forEach from 'lodash/forEach';
import ValidatedInput from '../components/validatedInputText';
import './createClient.scss';
class CreateClient extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit() {
        forEach(this.state, inputEntry => {
            console.log(inputEntry);
            localStorage.setItem(inputEntry);
        });

        console.log(this.state.firstName);
    }

    render() {
        return (
            <form onSubmit={() => this.handleSubmit}>
                <h2>General Information</h2>
                <ValidatedInput
                    placeholder="test"
                    validations={['empty']}
                />
                <label>
                    First Name
                    <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={this.handleInputChange} />
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={this.handleInputChange} />
                </label>
                <label>
                    Gender
                    <label><input type="radio" name="gender" value="male" onChange={this.handleInputChange} /> Male</label>
                    <label><input type="radio" name="gender" value="female" onChange={this.handleInputChange} /> Female</label>
                    <label><input type="radio" name="gender" value="not secified" onChange={this.handleInputChange} /> Don't want to disclose</label>
                </label>
                <label>
                    Address
                    <textarea name="address" id="" cols="30" rows="10" className="form-control form-control-block" onChange={this.handleInputChange}></textarea>
                </label>
                <hr />
                <h2>Payment Details</h2>
                <label>
                    Credit card type
                    <label>
                        <input type="radio" name="creditCardType" value="visa" onChange={this.handleInputChange} />
                        <img src="./assets/visa-large.gif" alt="visa image" className="card-image" />
                    </label>
                    <label>
                        <input type="radio" name="creditCardType" value="mastercard" onChange={this.handleInputChange} />
                        <img src="./assets/download.png" alt="mastercard image" className="card-image" />
                    </label>
                </label>
                <label>
                    Credit card number
                    <input type="text" name="creditCardNumber" placeholder="credit card number" className="form-control" onChange={this.handleInputChange} />
                </label>
                <label>
                    Expiry
                    <input type="text" name="creditCardNumber" placeholder="DD/MM/YYYY" className="form-control" onChange={this.handleInputChange} />
                </label>
                <label>
                    CVV
                    <input type="text" name="creditCardNumber" placeholder="CVV" className="form-control credit-card-cvv" maxLength="3" onChange={this.handleInputChange} />
                </label>
                <button className="submit-button">Submit</button>
            </form>
        )
    }
}

export default CreateClient;