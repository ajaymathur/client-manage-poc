import React, {Component} from 'react';
import {ValidatedInputText} from '../../components';
import './paymentDetailsForm.scss';

class PaymentDetailsForm extends Component{

    buildFormData(param) {
        this.props.buildFormData(param);
    }

    render() {
        let { errors, submitError } = this.props;
        return(
            <div id="payment-details-form">
                <h2>Payment Details</h2>
                <label>
                    Card Number
                    <ValidatedInputText
                        className="input-field"
                        label='Credit Card Number'
                        placeholder='Enter Card Number here'
                        validations={['empty']}
                        name='cardNumber'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['cardNumber']}
                        submitError={submitError}
                    />
                </label>
                <label>
                    Expiry Date
                    <ValidatedInputText
                        className="input-field"
                        label='Expiry Date'
                        placeholder='Enter Expiry Date here'
                        validations={['empty']}
                        name='expiryDate'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['expiryDate']}
                        submitError={submitError}
                    />
                </label>
                <label>
                    CVV
                    <ValidatedInputText
                        className="input-field"
                        label='CVV'
                        placeholder='Enter CVV here'
                        validations={['empty']}
                        name='cvv'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['cvv']}
                        submitError={submitError}
                    />
                </label>
                <label>
                    First Name
                    <ValidatedInputText
                        className="input-field"
                        label='First Name'
                        placeholder='Enter First Name here'
                        validations={['empty']}
                        name='firstName'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['firstName']}
                        submitError={submitError}
                    />
                </label>
                <label>
                    Last Name
                    <ValidatedInputText
                        className="input-field"
                        label='Last Name'
                        placeholder='Enter Last Name here'
                        validations={['empty']}
                        name='lastName'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['lastName']}
                        submitError={submitError}
                    />
                </label>
            </div>
        )
    }
}

export default PaymentDetailsForm;
