import React from 'react';
import { render, screen } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText(/Click me/i)).toBeInTheDocument();
});

test('renders small button with text', () => {
  render(<Button size="small">small</Button>);
  const btn = screen.getByText(/small/i);
  expect(btn).toHaveClass('small-btn');
});

test('renders large button with text', () => {
  render(<Button size="large">large</Button>);
  const btn = screen.getByText(/large/i);
  expect(btn).toHaveClass('large-btn');
});

test('renders medium button with text', () => {
  render(<Button size="medium">medium</Button>);
  const btn = screen.getByText(/medium/i);
  expect(btn).toHaveClass('medium-btn');
});

test('renders blue button ', () => {
  render(<Button background='blue'>Pink and Blue</Button>);
  const btn = screen.getByText(/Pink and Blue/i);
  expect(btn).toHaveStyle({background:'blue'});
});

test('renders text button', () => {
  render(<Button variant='text'>text</Button>);
  const btn = screen.getByText(/text/i);
  expect(btn).toHaveClass('text');
});

test('renders outlined button', () => {
  render(<Button variant='outlined'>outlined</Button>);
  const btn = screen.getByText(/outlined/i);
  expect(btn).toHaveClass('outlined');
});

test('renders contained button', () => {
  render(<Button variant='contained'>contained</Button>);
  const btn = screen.getByText(/contained/i);
  expect(btn).toHaveClass('contained');
});