import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextField from './TextField';

describe('TextField Component', () => {
  test('renders text field with label', () => {
    render(<TextField label="Username" />);

    expect(screen.getByText('Username')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders without label when not provided', () => {
    render(<TextField />);

    expect(screen.queryByText('Username')).not.toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('applies correct variant classes', () => {
    const { container } = render(<TextField variant="outlined" />);

    expect(container.querySelector('.textfield')).toHaveClass('outlined');
  });

  test('defaults to standart variant', () => {
    const { container } = render(<TextField />);

    expect(container.querySelector('.textfield')).toHaveClass('standart');
  });

  test('renders as text type by default', () => {
    render(<TextField />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  test('handles value changes', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();

    render(<TextField onChange={mockOnChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'hello');

    expect(input).toHaveValue('hello');
    expect(mockOnChange).toHaveBeenCalledWith('h');
    expect(mockOnChange).toHaveBeenCalledWith('he');
    expect(mockOnChange).toHaveBeenCalledWith('hel');
    expect(mockOnChange).toHaveBeenCalledWith('hell');
    expect(mockOnChange).toHaveBeenCalledWith('hello');
  });

  test('uses defaultValue prop', () => {
    render(<TextField defaultValue="initial value" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('initial value');
  });

  test('handles focus and blur events', async () => {
    const user = userEvent.setup();
    render(<TextField label="Test Field" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test Field');

    expect(label).not.toHaveClass('active');

    await user.click(input);
    expect(label).toHaveClass('active');

    await user.tab();
    expect(label).not.toHaveClass('active');
  });

  test('label remains active when value exists', async () => {
    const user = userEvent.setup();
    render(<TextField label="Test Field" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test Field');

    await user.type(input, 'test value');
    await user.tab();

    expect(label).toHaveClass('active');
    expect(input).toHaveValue('test value');
  });

  test('shows error message and applies error styles', () => {
    render(<TextField error="This field is required" />);

    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveClass('error');

    const container = screen.getByRole('textbox').closest('.textfield');
    expect(container).toHaveClass('error');
  });

  test('shows helper text when no error', () => {
    render(<TextField helperText="Please enter your name" />);

    expect(screen.getByText('Please enter your name')).toBeInTheDocument();
  });

  test('shows required asterisk', () => {
    render(<TextField label="Username" required={true} />);

    expect(screen.getByText('Username *')).toBeInTheDocument();
  });

  test('applies required attribute to input', () => {
    render(<TextField required={true} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('required');
  });

  test('disables input when disable prop is true', () => {
    render(<TextField disable={true} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('cannot type in disabled field', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();

    render(<TextField disable={true} onChange={mockOnChange} />);

    const input = screen.getByRole('textbox');
    await user.type(input, 'test');

    expect(input).toHaveValue('');
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('applies readOnly attribute', () => {
    render(<TextField readonly={true} defaultValue="readonly value" />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readOnly');
  });

  test('full integration test', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();

    render(
      <TextField
        label="Email"
        type="text"
        variant="outlined"
        required={true}
        helperText="Enter your email address"
        onChange={mockOnChange}
      />,
    );
  });

  test('handles empty strings correctly', async () => {
    const user = userEvent.setup();
    render(<TextField label="Test" defaultValue="" />);

    const input = screen.getByRole('textbox');
    const label = screen.getByText('Test');

    await user.click(input);
    expect(label).toHaveClass('active');

    await user.tab();
    expect(label).not.toHaveClass('active');
  });

  test('handles null and undefined values gracefully', () => {
    render(<TextField defaultValue={undefined} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');
  });
});
