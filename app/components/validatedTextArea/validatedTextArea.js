import React, {Component} from 'react';
import every from 'lodash/every';
import isArray from 'lodash/isArray';
import ErrorMessages from '../../stub/ErrorMessages';

class ValidatedTextArea extends Component{

    constructor(props) {
        super(props);
        this.state = {
            validationErrorMessage: `${this.props.label} ${ErrorMessages.EMPTY_ERROR}`,
            validationError: false,
            value: ''
        };
    }

    validate(validationRules) {
        let isValid = true;
        let errorMessage = '';
        every(validationRules, validationRule => {
            switch (validationRule) {
                case 'empty':
                    if (this.state.value === '' ) {
                        errorMessage = ErrorMessages.EMPTY_ERROR;
                        isValid = false;
                        break;
                    }
            };
        });

        if(isValid) {
            if (this.props.additionalValidations && isArray(this.props.additionalValidations)) {
                every(this.props.additionalValidations, validationFunction => {
                    validationFunction(this.state.value, this.props.label)
                })
            }
        }

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

    resetState() {
        this.setState({
            validationErrorMessage: '',
            validationError: false,
        })
    }
    getErrorMessage() {
        return (this.props.submitError && this.props.error) || this.state.validationError ?
            <div className='validation-error-message'>{this.state.validationErrorMessage}</div> : '';
    }


    render() {
        const {placeholder, name, validations} = this.props;
        return(
            <div>
                <textarea
                    placeholder={placeholder}
                    name={name}
                    onChange={(event) => this.setState({ value: event.target.value })}
                    onBlur={() => this.validate(validations)}
                />
                {this.getErrorMessage()}
            </div>
        )
    }
}

export default ValidatedTextArea;
