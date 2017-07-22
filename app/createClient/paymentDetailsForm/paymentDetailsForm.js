import React, {Component} from 'react';
import {ValidatedInputText} from '../../components';
import './paymentDetailsForm.scss';

import forEach from 'lodash/forEach';
import floor from 'lodash/floor';

class PaymentDetailsForm extends Component{

    buildFormData(param) {
        this.props.buildFormData(param);
    }

    /**
     * verifing credit card number by Luhn validation algorithm
     * @type {number}
     */
    validateCreditCard(creditCardNumber) {
        let sum = 0;
        forEach(
            creditCardNumber.split('').reverse(),
            (number, index) => {
                if (index % 2 !== 0) {
                    const twiceTheNumber = number*2;
                    sum += twiceTheNumber >= 10 ? (twiceTheNumber/10 + twiceTheNumber%10) : twiceTheNumber;
                } else {
                    sum += parseInt(number, 10);
                }
            }
        )
        if( sum % 10 !== 0 ) {
            return {
                isValid: false,
                errorMessage: 'should have a valid credit card number'
            }
        } else {
            return {
                isValid: true
            }
        }

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
                        validations={['empty', 'onlyDigits']}
                        additionalValidations={[this.validateCreditCard]}
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
