import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Switch, { SwitchProps } from './Switch';

test('renders default switch', () => {
  render(<Switch />);
  const switchElement = screen.getByRole('checkbox');
  expect(switchElement).toBeInTheDocument();
});

test('renders switch with label ', () => {
  render(<Switch label="switch" />);
  expect(screen.getByText(/switch/i)).toBeInTheDocument();
});

test('renders switch with end label placement', () => {
  render(<Switch label="hello" labelPlacement="end" />);
  const container = screen.getByText(/hello/i).parentElement;
  expect(container).toHaveClass('switch-row');
});

test('renders switch with bottom label placement', () => {
  render(<Switch label="hello" labelPlacement="bottom" />);
  const container = screen.getByText(/hello/i).parentElement;
  expect(container).toHaveClass('switch-column');
});

test('renders cheked checkbox', () => {
  render(<Switch checked />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeChecked();
});

test('renders small switch', () => {
  render(<Switch size="small" label="small" />);
  const switchInput = screen.getByRole('checkbox');
  expect(switchInput.parentElement).toHaveClass('switch-small');
});

test('renders medium switch', () => {
  render(<Switch size="medium" label="medium" />);
  const switchInput = screen.getByRole('checkbox');
  expect(switchInput.parentElement).toHaveClass('switch-medium');
});

test('renders large switch', () => {
  render(<Switch size="large" label="large" />);
  const switchInput = screen.getByRole('checkbox');
  expect(switchInput.parentElement).toHaveClass('switch-large');
});

test('renders blue switch', () => {
  render(<Switch color="blue" />);
  const slider = screen.getByRole('checkbox').nextSibling as HTMLElement;
  expect(slider).toHaveStyle({ color: 'rgb(0, 0, 255)' });
});

test('toggles internal state when clicked', async () => {
    const user = userEvent.setup();
    render(<Switch />);
    
    const checkbox = screen.getByRole('checkbox');
    
    expect(checkbox).not.toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });


test('calls onChange callback with correct value', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();
    
    render(<Switch onChange={mockOnChange} />);
    
    const checkbox = screen.getByRole('checkbox');
    
    await user.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(true);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    
    await user.click(checkbox);
    expect(mockOnChange).toHaveBeenCalledWith(false);
    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });