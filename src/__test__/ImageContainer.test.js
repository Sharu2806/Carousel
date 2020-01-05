import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageContainer from '../ImageContainer';
import { Footer } from '../Components';


configure({ adapter: new Adapter() });

test('Match Screenshot', () => {
  const Component = shallow(<ImageContainer />);
  console.log((Component.find(Footer)).to.have.length(1));
});
