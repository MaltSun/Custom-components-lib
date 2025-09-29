import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox, { CheckBoxProps } from './CheckBox';

test('renders default checkbox', () => {
  render(<Checkbox />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
});

test('renders pink checkbox', () => {
  render(<Checkbox color="pink" />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toHaveStyle({ accentColor: 'pink' });
});

test('renders checkbox with def color', () => {
  render(<Checkbox />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toHaveStyle({ color: 'initial' });
});

test('renders small checkbox with text', () => {
  render(<Checkbox size="small" />);
  const container = screen.getByRole('checkbox').parentElement;
  expect(container).toHaveClass('checkBox-small');
});

test('renders large checkbox with text', () => {
  render(<Checkbox size="large" />);
  const container = screen.getByRole('checkbox').parentElement;
  expect(container).toHaveClass('checkBox-large');
});

test('renders medium chekedbox with text', () => {
  render(<Checkbox size="medium" />);
  const container = screen.getByRole('checkbox').parentElement;
  expect(container).toHaveClass('checkBox-medium');
});

test('renders cheked checkbox', () => {
  render(<Checkbox checked />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeChecked();
});

test('renders required checkbox', () => {
  render(<Checkbox required />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeRequired();
});

test('renders disabled checkbox', () => {
  render(<Checkbox disabled />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeDisabled();
});

test('renders checkbox with label ', () => {
  render(<Checkbox label="checkbox" />);
  expect(screen.getByText(/checkbox/i)).toBeInTheDocument();
});

test('renders checkbox with end label placement', () => {
  render(<Checkbox label="hello" labelPlacement="end" />);
  const container = screen.getByRole('checkbox').parentElement;
  expect(container).toHaveStyle({ flexDirection: 'row' });
});

test('renders checkbox with bottom label placement', () => {
  render(<Checkbox label="hello" labelPlacement="bottom" />);
  const container = screen.getByRole('checkbox').parentElement;
  expect(container).toHaveStyle({ flexDirection: 'column' });
});

test('toggles internal state when clicked', async () => {
  const user = userEvent.setup();
  render(<Checkbox label="hello" />);

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();

  await user.click(checkbox);
  expect(checkbox).toBeChecked();

  await user.click(checkbox);
  expect(checkbox).not.toBeChecked();
});
