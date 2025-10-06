import { Outlined } from './Button.stories';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select, { SelectProps } from '../Select/Select'

const meta: Meta<SelectProps> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'filled', 'outlined'],
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'text' },
    helperText: { control: 'text' },

    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },

};

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  args: {
    label: 'Number',
    placeholder: 'choose you number',
    options: ['one', 'two', 'three']
    // variant: 'outlined',
    // required: true,
  },
};

export const Filled: Story = {
  args: {
    label: 'Password',
    variant: 'filled',
    helperText: 'Введите пароль',
    options: ['one', 'two', 'three']
  },
};

export const OutlinedTextField: Story = {
  args: {
    variant: 'outlined',
    helperText: 'Введите пароль',
    placeholder: 'Введите пароль',
    options: ['one', 'two', 'three']
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    variant: 'outlined',
    error: 'Некорректный email',
    options: ['one', 'two', 'three']
  },
};

