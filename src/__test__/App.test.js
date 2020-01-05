import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { Header, Footer } from '../Components';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  test('should Match Screenshot', () => {
    const Component = renderer.create(<App />);
    expect(Component.toJSON()).toMatchSnapshot();
  });

  test('should contains one footer', () => {
    const wrapper = mount(<App />);
    console.log(wrapper.find('div'));
    expect(wrapper.find('div')).to.have.length(1);
  });

  test('should contains one Header', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());
    expect(wrapper.find('header.header')).to.have.length(1);
  });
});
