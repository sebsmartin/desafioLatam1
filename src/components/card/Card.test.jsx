import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders Card without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
