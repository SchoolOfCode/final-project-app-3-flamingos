'use strict';

import React from 'react';
import RegisterForm from './index';
import {shallow} from 'enzyme';


describe('<RegisterForm/> ===> <TextField/>', () => {
    it('renders without crashing', () => {
        shallow(<RegisterForm/>); 
    });

    it('should render no more than a number of <TextField/> components', () => {
        const wrapper = shallow(<RegisterForm/>);
        expect(wrapper.find('TextField')).toHaveLength(4);
    });

    it(`should check required attribute of <TextField/> is true`, () => {
        const wrapper = shallow(<RegisterForm/>);
        expect(wrapper.find('#phoneNumber').prop('required')).toBe(true)
    });

    it(`should handle change event registered to <TextField/>`, () => {
        const wrapper = shallow(<RegisterForm/>);
        wrapper.find('#phoneNumber').simulate('change', {target: {value: "+447512345678"}});
        expect(wrapper.find('#phoneNumber').props().value).toBe("+447512345678");
    })


})
