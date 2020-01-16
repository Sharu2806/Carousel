import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageContainer from '../ImageContainer';

configure({ adapter: new Adapter() });

describe('Image Container Component', () => {
  const allImages = [
      "Image1.jpg",
      "Image2.jpg",
      "Image3.jpg",
      "Image4.jpg",
      "Image5.jpg",
      "Image6.jpg"
    ];

  test('On click of Next/Prev button selected image id should change', () => {
    const Component = mount(<ImageContainer allImages={allImages}/>);
    const instance = Component.instance();
    let id_before = instance.state.id;
    Component.find('footer').find('.next').simulate('click');
    expect(instance.state.id).toBe(id_before+1);
    Component.find('footer').find('.prev').simulate('click');
    expect(instance.state.id).toBe(id_before);
  });

});
