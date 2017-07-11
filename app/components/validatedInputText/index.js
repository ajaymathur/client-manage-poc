import React, { Component } from 'react';
import every from 'lodash/every';

class ValidatedInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validationError: '',
        };
    }

    validate(validationRules) {
        every(validationRules, validationRule => {
            switch (validationRule) {
                case 'empty':
                    console.log(this.state.value)
                    break;
            }
        });
    }

    getErrorMessage() {
        return this.state.validationError ?
            <span>not valid</span> : '';
    }

    render() {
        const { placeholder, name, validations } = this.props;
        return (
            <div>
                <input type="text"
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

export default ValidatedInput;
