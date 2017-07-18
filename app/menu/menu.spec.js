import React from 'react';
import {shallow} from 'enzyme';
import Menu from './menu';

describe('Menu', () => {
   let wrapper;
   let instance;
   let sandbox;
   beforeEach(() => {
      wrapper =  shallow(<Menu/>);
      instance = wrapper.instance();
      sandbox = sinon.sandbox.create();
   });
   afterEach(() => {
      sandbox.restore();
   });

});
