'use strict';

import React from 'react';
import Button from './index';
import {shallow, mount} from 'enzyme';


//const wrapper = shallow(<Button />);

describe('<Button/>', () => {
    it('renders without crashing', () => {
        shallow(<Button/>); 
    });

    it('should have no more than a number of <button> elements', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper.find('button')).toHaveLength(1);
    })

    it('should display exact text passed to it as a prop on a <button>', () => {
        const wrapper = shallow(<Button buttonName="Test display"/>);
        expect(wrapper.find('button').text()).toBe("Test display");
    });

    it('should handle click events registered to it on a single click', () => {
        const mockCallBack = jest.fn();
        const wrapper = shallow(<Button onClick={mockCallBack}/>);
        wrapper.find('button').simulate('click');
        expect(mockCallBack).toHaveBeenCalledTimes(1);
    });

    it('should handle click events registered to it on a single click', () => {
        const mockCallBack = jest.fn(() => 'Hello!');
        const wrapper = shallow(<Button onClick={mockCallBack}/>);
        wrapper.find('button').simulate('click');
        expect(mockCallBack).toHaveBeenCalled()
    })
})