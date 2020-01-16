import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Home';

configure({ adapter: new Adapter() });
jest.mock('axios');
describe('App Component', () => {
  
  let data;
  beforeEach(() => {
    data = {
      hits: [
        "Image1.jpg",
        "Image2.jpg"
      ]
    }
    axios.get.mockImplementation(() => Promise.resolve({ data }));
  });

  test('should Match Screenshot', () => {
    const Component = renderer.create(<Home />);
    expect(Component.toJSON()).toMatchSnapshot();
  });

  test('should contains one footer', () => {
    const wrapper = mount(<Home />);
    wrapper.setState({allImages: data.hits});
    expect(wrapper.find('footer').length).toBe(1);
  });

  test('should contains one Header', () => {
    const wrapper = mount(<Home />);
    wrapper.setState({allImages: data.hits});
    expect(wrapper.find('header').length).toBe(1);
  });

  test('should fetch all images from given Url', () => {
    shallow(<Home />);
    expect(axios.get).toBeCalledWith(`https://pixabay.com/api/?key=9656065-a4094594c34f9ac14c7fc4c39&q=beautiful+landscape&image_type=photo`);
  });

  test('should call componentDidMount when mount()', () => {
    const componentDidMountSpy = jest.spyOn(Home.prototype, 'componentDidMount')
    mount(<Home />)
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1)
    componentDidMountSpy.mockRestore()
  });
});
