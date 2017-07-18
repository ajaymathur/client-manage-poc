import React, { Component } from 'react';
import merge from 'lodash/merge';
import {UserDetailsForm} from './userDetailsForm';
import {PaymentDetailsForm} from './paymentDetailsForm';
import './createClient.scss';
class CreateClient extends Component {
    constructor() {
        super();
        this.state = {
            error: {
                firstName: true,
                lastName: true,
                cardNumber: true,
                expiryDate: true,
                gender: true,
                address: true,
            },
            submitError : false,
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            submitError: true,
        });
    }

    buildFormData(param) {
        const updateFormData = merge({}, this.state.formData, {[param.name]: param.value, error: {[param.name]: !param.isValid }});
        this.setState({
            formData: updateFormData,
        });
    }

    render() {
           return(
               <form onSubmit={(event) => this.handleSubmit(event)}>
                   <UserDetailsForm
                    buildFormData={(param) => this.buildFormData(param)}
                    errors={this.state.error}
                    submitError={this.state.submitError}
                   />
                   <hr/>
                   <PaymentDetailsForm
                    buildFormData={(param) => this.buildFormData(param)}
                    errors={this.state.error}
                    submitError={this.state.submitError}
                   />
                   <button type="submit" className="submit-button">Submit</button>
               </form>
               )

    }
}

export default CreateClient;