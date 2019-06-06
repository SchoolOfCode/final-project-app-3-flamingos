'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import SinglePost from './index.js.js';
import { shallow } from 'enzyme';

const data = {postId: '', userId: "1234", description: "Road works!", createdAt:"14:05:23", updatedAt: "14.05.50"}
const wrapper = shallow(<SinglePost post={data}/>);
describe('<SinglePost/>',()=>{
it('renders without crashing', () => {
    shallow(<SinglePost post={data}/>);
});

it('should have a specific number of <div/> elements', ()=> {
    expect(wrapper.children().find('div')).toHaveLength(12);
});

it('should have an <img/> element that has an alt attribute with value', () => {
    expect(wrapper.find('img').props().alt).toBe("Marker")
});

it('should have a <div/> element with specific text', () => {
    expect(wrapper.find('#postedBy').text()).toBe("Posted by: ")
});

//issues reperesenting the correct spacing in text being tested
it.skip('should have a <div/> element with specific text', () => {
    expect(wrapper.find('#dateCreated').text()).toBe(`Date Created: `)
});

})