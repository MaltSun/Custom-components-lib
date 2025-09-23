import CheckBox, { CheckBoxProps } from '../Checkbox/CheckBox';
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Switch, { SwitchProps } from "../Switch/Switch"

const meta: Meta<SwitchProps> = {
    title: 'Components/Switch',
    component: Switch,
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
        checked: { control: 'boolean' }
    },

};

export default meta;
type Story = StoryObj<CheckBoxProps>;

export const Default: Story = {
    args: {        
    },
};

export const Small: Story = {
    args: {
        label: 'Small',
        size: 'small',
        color: 'pink'
    },
};

export const Medium: Story = {
    args: {
        label: 'Medium',
        size: 'medium'
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        color: 'red',
        label: 'Large',
        labelPlacement: 'end'
    },
};

export const Cheked: Story = {
    args: {
        label: 'username',
        checked: true,
        color: 'default'
    },
};

export const SmallBottom: Story = {
    args: {
        label: 'Small',
        size: 'small',
        labelPlacement: 'bottom'
    },
};

export const MediumBottom: Story = {
    args: {
        label: 'Medium',
        size: 'medium',
        labelPlacement: 'bottom'
    },
};

export const LargeBottom: Story = {
    args: {
        size: 'large',
        color: 'red',
        label: 'Large',
        labelPlacement: 'bottom'
    },
};



