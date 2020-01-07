import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageContainer from '../ImageContainer';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  test('On click of Prev button id should decrement', () => {
    const Component = mount(<ImageContainer />);
    const instance = Component.instance();
    const id_before = instance.state.id;
    Component.find('footer').find('.prev').simulate('click');
    expect(instance.state.id).toBe(id_before-1);
  });

  test('On click of Next button id should increment', () => {
    const Component = mount(<ImageContainer />);
    const instance = Component.instance();
    const id_before = instance.state.id;
    Component.find('footer').find('.next').simulate('click');
    expect(instance.state.id).toBe(id_before+1);
  });
});
