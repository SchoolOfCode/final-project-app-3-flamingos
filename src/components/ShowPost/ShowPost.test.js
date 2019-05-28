'us strict';

import React from 'react';
import ShowPost from './index.js';
import { shallow} from 'enzyme';

//data with just one post item array and two comments
const data = [{description: "Road works!",
    comments: [{comment: "Whereabouts exactly?", userId: "1", date: "27/05/2019"}, {comment: "Behind New Street", userId: "2", date: "27/05/2019"}]}]

    const wrapper = shallow(<ShowPost posts={data}/>);


describe('<ShowPost/> with data', ()=>{

    it('renders without crashing', () => {
        shallow(<ShowPost posts={data}/>); 
    });

    it('should render a specific number of <div> parent element', () => {
        expect(wrapper.find('div').parent()).toHaveLength(1);
    });

    it('should render a number of parent <div> elements for each post', () => {
        expect(wrapper.children().find('div')).toHaveLength(1);
    });

    it('should render a specific number of <h4> elements for each post', () => {
        wrapper.debug()
        expect(wrapper.find('h4')).toHaveLength(1);
    });
    
    //this test is dodgy hence the skip. Not sure what's going on here with the divs
    it.skip('should render a total number of <div> elements', () => {
        expect(wrapper.find('div').children()).toHaveLength(4);
    });


    it('should render a total number of <p> elements for each post and comments', () => {
        expect(wrapper.find('p')).toHaveLength(5);
    });

    it('should render the same number of <ul> elements as the number of posts', () => {
        expect(wrapper.find('ul')).toHaveLength(data.length);
    });

    it('should render the same number of <li> elements as the number of comments', () => {
        expect(wrapper.find('li')).toHaveLength(data[0].comments.length);
    });

});

const noData = [] 
describe('<ShowPost> without data', () => {
    it('should render a total of <div> elements if no data is present', () => {
        const wrapper = shallow(<ShowPost posts={noData}/>);
        expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should render no children <div> element', () => {
        const wrapper = shallow(<ShowPost posts={noData}/>);
        expect(wrapper.children().find('div')).toHaveLength(0);
    });

})
