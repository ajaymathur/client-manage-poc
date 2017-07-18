import React from 'react';
import {shallow} from 'enzyme';
import ValidatedInputText from './validatedInputText';

describe('ValidatedInputText', () => {
    let wrapper;
    let instance;
    let sandbox;
    beforeEach(() => {
        wrapper = shallow(<ValidatedInputText/>);
        instance = wrapper.instance();
        sandbox = sinon.sandbox.create();
    });
    afterEach(() => {
        sandbox.restore();
    });
    describe('resetState', () => {
        beforeEach(() => {
            sandbox.spy(instance, 'setState');
        });
        it('calls setState restoring state values', () => {
            instance.resetState();
            expect(instance.setState).to.have.been.calledWith({validationErrorMessage: '', validationError: false,})
        });
    });
});
