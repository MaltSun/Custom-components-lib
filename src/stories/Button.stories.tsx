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
    children: 'Small',
    variant: 'contained',
  },
};

export const Large: Story = {
  args: {
    children: 'Large ',
    size: 'large',
    variant: 'contained',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'medium',
    variant: 'outlined',
  },
};


// Разные варианты
export const Text: Story = {
  args: {
    children: 'Text ',
    variant: 'text',
    color: 'red',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined ',
    variant: 'outlined'
  },
};

export const Contained: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
  },
};

export const Cliked: Story = {
  args: {
    children: 'Contained',
    variant: 'contained',
    onClick: () => alert('Кнопка нажата!'),
  },
};

