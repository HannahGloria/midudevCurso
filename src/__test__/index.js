import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('home work as expected', () => {
  const {container} = render(<App />)
  console.log(container)
  const gifLink = container.querySelector('.Gif-Link')
  expect(gifLink).toBeVisible()
});
