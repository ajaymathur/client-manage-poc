import React, { Component } from 'react';
import every from 'lodash/every';
import isArray from 'lodash/isArray';

import './validatedInputText.scss';

import ErrorMessages from '../../stub/ErrorMessages';

class ValidatedInputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validationErrorMessage: `${this.props.label} ${ErrorMessages.EMPTY_ERROR}`,
            validationError: false,
            value: ''
        };
    }

    /**
     * All the validation logic comes here
     * @param validationRules -> the predefined rules to test against
     */
    validate(validationRules) {
        let isValid = true;
        let errorMessage = '';

        /**
         * Test over all the validation rules passed - predefined ones
         */
        every(validationRules, validationRule => {
            switch (validationRule) {
                case 'empty':
                    if (this.state.value === '' ) {
                        errorMessage = ErrorMessages.EMPTY_ERROR;
                        isValid = false;
                    }
                    break;
                case 'onlyString':
                    if(!/^[a-z]+$/i.test(this.state.value)) {
                        errorMessage = ErrorMessages.ONLY_STRING_ERROR;
                        isValid = false;
                    }
                    break;
                case 'onlyDigits':
                    if(!/^[0-9]+$/i.test(this.state.value)) {
                        errorMessage = ErrorMessages.ONLY_DIGITS_ERROR;
                        isValid = false;
                    }
                    break;
            };
            return isValid;
        });

        /**
         * validate any custom rules from the parent, test only if field is still valid
         * in built rules precede over the custom rules
         * custom rules need to be pure functions and should return error in format
         * { isInvalid: *true/ false*, errorMessage: *error message to display* }
         */
        if(isValid) {
            if (this.props.additionalValidations && isArray(this.props.additionalValidations)) {
                every(this.props.additionalValidations, validationFunction => {
                    const error = validationFunction(this.state.value, this.props.label);
                    if ( !error.isValid) {
                        isValid = false;
                        errorMessage = error.errorMessage;
                    }
                    return isValid;
                })
            }
        }

        /**
         * populate the error fields if the field is invalid else reset the errors
         */
        if(!isValid) {
            this.setState({
                validationErrorMessage: `${this.props.label} ${errorMessage}`,
                validationError: true,
            });
        } else {
            this.resetState();
        }

        this.props.populateState({ isValid, name: this.props.name, value: this.state.value});
    }

    /**
     * This will reset the state when to keep new validation clean
     */
    resetState() {
        this.setState({
            validationErrorMessage: '',
            validationError: false,
        })
    }

    /**
     * gets the error message for the invalid filed
     * @returns {*} element with error string
     */
    getErrorMessage() {
        /**
         * submitError + props.error -> are true in case user submit and validation fails
         * validationError -> if signifies on blur validation error
         */
        return (this.props.submitError && this.props.error) || this.state.validationError ?
            <div className='validation-error-message'>{this.state.validationErrorMessage}</div> : '';
    }

    render() {
        const { placeholder, name, validations, className, value } = this.props;
        return (
            <div className={className}>
                <input type="text"
                       className="input-text"
                       placeholder={placeholder}
                       value={value}
                       name={name}
                       onChange={(event) => this.setState({ value: event.target.value })}
                       onBlur={() => this.validate(validations)}
                />
                {this.getErrorMessage()}
            </div>
        )
    }
}

export default ValidatedInputText;
