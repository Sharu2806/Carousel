import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Components/Footer';

test('Match Screenshot', () => {
  const Component = renderer.create(<Footer />);
  expect(Component.toJSON()).toMatchSnapshot();
});
