import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Components/Header';

test('Match Screenshot', () => {
  const Component = renderer.create(<Header />);
  expect(Component.toJSON()).toMatchSnapshot();
});
