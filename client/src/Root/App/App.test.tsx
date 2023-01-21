import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('<App /> component', () => {
  test('if it renders', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
