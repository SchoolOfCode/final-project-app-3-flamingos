import React from 'react';
import ReactDOM from 'react-dom';
import SinglePost from './index.js';
import { shallow } from 'enzyme';

const data = {postId: '', userId: "1234", description: "Road works!", createdAt:"14:05:23", updatedAt: "14.05.50"}
const wrapper = shallow(<SinglePost post={data}/>);
describe('<SinglePost/>',()=>{
it('renders without crashing', () => {
    shallow(<SinglePost post={data}/>);
});

it('has a specified number of <div/> elements', ()=> {
    expect(wrapper.children().find('div')).toHaveLength(12);
});

it('has <img/> element that has an alt attribute with value', () => {
    expect(wrapper.find('img').props().alt).toBe("Marker")
});

it('has a <div/> element with specific text', () => {
    expect(wrapper.find('#postedBy').text()).toBe("Posted by: ")
});

it('has a <div/> element with specific text', () => {
    expect(wrapper.find('#dateCreated').text()).toBe("Date Created: ")
});

})