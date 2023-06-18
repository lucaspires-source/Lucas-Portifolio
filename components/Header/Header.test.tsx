import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';

test('renders header correctly', () => {
  render(<Header />);
  const headerElement = screen.getByText('Header');
  expect(headerElement).toBeInTheDocument();
});
