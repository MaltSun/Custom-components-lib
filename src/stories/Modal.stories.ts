import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal, { ModalProps } from '../Modal/Modal';

const meta: Meta<ModalProps> = {
    title: 'Components/Modal',
    component: Modal,
    argTypes: {
        children: { control: 'text' },
        openText: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Default: Story = {
    args: {
        children: (
            'kkjnfvjfkn'
        ),
        openText: 'OPEN',

    },
};



export const Small: Story = {
    args: {
    },
};

export const Large: Story = {
    args: {
    },
};

export const Medium: Story = {
    args: {
    },
};

export const Text: Story = {
    args: {
    },
};

export const Outlined: Story = {
    args: {
    },
};

export const Contained: Story = {
    args: {
    },
};

export const Cliked: Story = {
    args: {
    },
};

