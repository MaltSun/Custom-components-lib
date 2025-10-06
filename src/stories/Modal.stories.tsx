// src/stories/Modal.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../Modal/Modal';
import type { ModalProps } from '../Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    openText: { control: 'text' },
    // children не добавляем в argTypes — JSX туда не положим через контролы
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    openText: 'OPEN',
    children: (
      <>
        <h3>Header</h3>
        <p>
          Content/ Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
          repellat, aliquid debitis inventore architecto praesentium, et velit,
          sequi reprehenderit nulla ipsam iure reiciendis natus nisi fugiat
          perspiciatis dicta quis eveniet?
        </p>
      </>
    ),
  },
};
