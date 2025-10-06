import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

describe('Select Component', () => {
  const mockOptions = ['1', '2', '3'];
  test('renders select with label and placeholder', () => {
    render(
      <Select
        label="Test Label"
        placeholder="Choose option"
        options={mockOptions}
      />,
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  test('renders all options correctly', () => {
    render(<Select options={mockOptions} />);

    const select = screen.getByRole('combobox');
    fireEvent.click(select);

    mockOptions.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
    });
  });

  test('shows required asterisk when required prop is true', () => {
    render(<Select label="Test Label" required={true} />);

    expect(screen.getByText('Test Label *')).toBeInTheDocument();
  });

  test('applies correct variant classes', () => {
    const { container } = render(<Select variant="outlined" />);

    expect(container.querySelector('.select-container')).toHaveClass(
      'outlined',
    );
  });

  test('defaults to standart variant', () => {
    const { container } = render(<Select />);

    expect(container.querySelector('.select-container')).toHaveClass(
      'standart',
    );
  });

  test('shows error message and applies error styles', () => {
    render(<Select error="This field is required" />);

    expect(screen.getByText('This field is required')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveClass('error');
  });

  test('focus and blur events work correctly', async () => {
    const user = userEvent.setup();
    render(<Select label="Test Label" options={mockOptions} />);

    const select = screen.getByRole('combobox');
    const label = screen.getByText('Test Label');

    expect(label).not.toHaveClass('active');

    await user.click(select);
    expect(label).toHaveClass('active');

    await user.tab();
    expect(label).not.toHaveClass('active');
  });

  test('select is disabled when disable prop is true', () => {
    render(<Select disable={true} options={mockOptions} />);

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
  });

  test('cannot interact with disabled select', async () => {
    const user = userEvent.setup();
    const mockOnChange = jest.fn();

    render(<Select disable={true} options={mockOptions} />);

    const select = screen.getByRole('combobox');
    await user.click(select);

    expect(select).toBeDisabled();
  });

  test('placeholder is displayed initially', () => {
    render(<Select placeholder="Select an option" options={mockOptions} />);

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  test('placeholder option is disabled', () => {
    render(<Select placeholder="Select an option" options={mockOptions} />);

    const placeholderOption = screen.getByText('Select an option');
    expect(placeholderOption).toHaveAttribute('disabled');
  });

  test('shows helper text when no error', () => {
    render(<Select helperText="Please select an option" />);

    expect(screen.getByText('Please select an option')).toBeInTheDocument();
  });
});
