import CheckBox, { CheckBoxProps } from '../Checkbox/CheckBox';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<CheckBoxProps> = {
    title: 'Components/CheckBox',
    component: CheckBox,
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        labelPlacement: {
            control: { type: 'select' },
            options: ['bottom', 'end'],
        },
        color: { control: 'color' },
        label: { control: 'text' },
        required: { control: 'boolean' },
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        indeterminate: { control: 'boolean' },
        onChange: { action: 'changed' },
    },

};

export default meta;
type Story = StoryObj<CheckBoxProps>;

export const Default: Story = {
    args: {
        label: 'username',
        required: true,
        color: 'pink'
    },
};

//size
export const Small: Story = {
    args: {
        label: 'username',
        size: 'small'
    },
};

export const Medium: Story = {
    args: {
        label: 'username',
        size: 'medium'
    },
};

export const Large: Story = {
    args: {
        size: 'large'
    },
};

//required/disable/cheked
export const Required: Story = {
    args: {
        label: 'username',
        required: true,
        labelPlacement: 'bottom'
    },
};

export const Disable: Story = {
    args: {
        disabled: true,
        label: 'username',
        labelPlacement: 'end'
    },
};

export const Cheked: Story = {
    args: {
        label: 'username',
        checked: true
    },
};

export const Indeterminate: Story = {
    args: {
        label: 'username',
        indeterminate: true,
    },
};


