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
});
