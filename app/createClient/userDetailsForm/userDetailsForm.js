import React, {Component} from 'react';
import {ValidatedInputText, ValidatedRadioGroup, ValidatedTextArea} from '../../components';
import './userDetailsForm.scss';
class UserDetailsForm extends Component {
    constructor(props) {
        super(props);
    }

    buildFormData(param) {
        this.props.buildFormData(param);
    }

    render() {
        let { errors, submitError } = this.props;
        return (
            <div id="user-details-form">
                <h2>Contact Details</h2>
                <label>
                    First Name
                    <ValidatedInputText
                        className="input-field"
                        label='First Name'
                        placeholder='Enter First Name here'
                        validations={['empty', 'onlyString']}
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
                        validations={['empty', 'onlyString']}
                        name='lastName'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['lastName']}
                        submitError={submitError}
                    />
                </label>
                <label>
                    Gender
                    <ValidatedRadioGroup
                        label='Gender Option'
                        name='gender'
                        options={[
                                {value: 'male', display: 'male'},
                                {value: 'female', display: 'female'},
                                {value: 'notDisclosed', display: 'dont want to disclose'}
                            ]}
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['gender']}
                        submitError={submitError}
                    />

                </label>
                <label>
                    Address
                    <ValidatedTextArea
                        label='Address'
                        placeholder='Enter Address here'
                        validations={['empty']}
                        name='address'
                        populateState={(param) => this.buildFormData(param)}
                        error={errors['address']}
                        submitError={submitError}
                    />
                </label>
            </div>
            )

    }
}

export default UserDetailsForm;
