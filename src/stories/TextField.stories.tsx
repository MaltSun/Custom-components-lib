import { Outlined } from './Button.stories';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextField, { TextFieldProps } from '../TextField/TextField'

const meta: Meta<TextFieldProps> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'filled', 'outlined'],
    },
    label: { control: 'text' },
    defaultValue: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password'],
    },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
    onChange: { action: 'changed' },
  },

};

export default meta;
type Story = StoryObj<TextFieldProps>;

export const Default: Story = {
  args: {
    defaultValue: 'Polina',
    required: true,
  },
};

export const Filled: Story = {
  args: {
    label: 'Password',
    type: 'password',
    variant: 'filled',
    helperText: 'Введите пароль',
  },
};

export const OutlinedTextField: Story = {
  args: {
    type: 'password',
    variant: 'outlined',
    helperText: 'Введите пароль',
    defaultValue: 'nnnnn'
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'text',
    variant: 'outlined',
    error: 'Некорректный email',
  },
};

