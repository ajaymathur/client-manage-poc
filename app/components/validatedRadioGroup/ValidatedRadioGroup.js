import React, {Component} from 'react';
import ErrorMessages from '../../stub/ErrorMessages';

class ValidatedRadioGroup extends Component{

    constructor(props) {
        super(props);
        this.state = {
            validationErrorMessage: `${this.props.label} ${ErrorMessages.EMPTY_ERROR}`,
            validationError: false,
            value: ''
        };
    }

    validate(value) {
        this.setState({
            value
        });
        this.props.populateState({value, isValid: true, name: this.props.name})
    }

    getErrorMessage() {
        return (this.props.submitError && this.props.error) && this.state.value === '' &&
            <div className='validation-error-message'>{this.state.validationErrorMessage}</div>;
    }

    render() {
        const {name, options} = this.props;
        return (
          <div>
              {
                  options.map(option => (
                      <label key={option.value}>
                          <input type='radio'
                                 name={name}
                                 value={option.value}
                                 onChange={(event) => this.validate(event.target.value)}
                          />
                          {option.display}
                      </label>
                  ))
              }
              {this.getErrorMessage()}
          </div>
        );
    }
}

export default ValidatedRadioGroup;
