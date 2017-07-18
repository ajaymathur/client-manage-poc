import React from 'react';
import Header from './header';
import {shallow} from 'enzyme';

describe('Header', () => {
    "use strict";
    let wrapper;
    let instance;
    let sandbox;
    beforeEach(() => {
        wrapper = shallow(<Header/>);
        instance = wrapper.instance();
        sandbox = sinon.sandbox.create();
    });
    afterEach(() => {
        sandbox.restore();
    });
    describe('view tests', () => {
        beforeEach(() => {
            sandbox.spy(instance, 'toggleMenu');
        })
        it('calls toggleMenu on click of menu-icon-contaner', () => {
          wrapper.find('.menu-icon-contaner').simulate('click');
          expect(instance.toggleMenu).to.have.been.called;
        });
        it('have the expected heading', () => {
            expect(wrapper.find('.heading-contaner h1').text()).to.equal('Local Search')
        })

    });
    describe('toggleMenu', () => {
        beforeEach(() => {
            sandbox.spy(instance, 'setState');
        });
        it('calls setState', () => {
           instance.toggleMenu();
           expect(instance.setState).to.have.been.called;
        });
    });
});
