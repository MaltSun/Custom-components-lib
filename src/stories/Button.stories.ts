import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from '../Button/Button';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'contained', 'outlined'],
    },
    color: { control: 'color' },
    children: { control: 'text' },
    background: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    children: 'Button'
  },
};

// Разные размеры
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'small',
    variant: 'contained',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'large',
    variant: 'contained',
  },
};

// Разные варианты
export const Text: Story = {
  args: {
    children: 'Text Button',
    variant: 'text',
    color: 'red',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
    color: 'green',
  },
};

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained'
  },
};
