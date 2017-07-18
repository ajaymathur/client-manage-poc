import React from 'react';
import CreateClient from './createClient';
import {shallow} from 'enzyme';

describe('CreateClient', () => {
    "use strict";
    let wrapper;
    let instance;
    let sandbox;
    beforeEach(() => {
        wrapper = shallow(<CreateClient/>);
        instance = wrapper.instance();
        sandbox = sinon.sandbox.create();
    });
    afterEach(() => {
        sandbox.restore();
    });
    describe('handleSubmit', () => {
        let event;
        beforeEach(() => {
            event = {
                preventDefault: sandbox.spy(),
            };
            sandbox.spy(instance, 'setState');
        });
        it('calls preventDefault of the passed event', () => {
            instance.handleSubmit(event);
            expect(event.preventDefault).to.have.been.called;
        });
        it('calls setState making submit error true', () => {
            instance.handleSubmit(event);
            expect(instance.setState).to.have.been.calledWith({submitError: true})
        });
    });

    describe('buildFormData', () => {
        beforeEach(() => {
            instance.state = {
                formData: {},
            };
            sandbox.spy(instance, 'setState');
        });
        it('updates updateFormData with the selected param', () => {
            const param = {name: 'firstName', value: 'test', isValid: true};
            instance.buildFormData(param);
            expect(instance.setState).to.have.been.calledWith({
                formData: {
                    firstName: 'test',
                    error: {
                        firstName: false,
                    },
                },
            });
        });
    });

    describe('View', () => {
        it('has UserDetailsForm component', () => {
            expect(wrapper.find('UserDetailsForm').length).to.equal(1);
        });
        it('has PaymentDetailsForm component', () => {
            expect(wrapper.find('PaymentDetailsForm').length).to.equal(1);
        });
    });
});
