import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal Component', () => {
  test('renders modal with open button', () => {
    render(<Modal openText="Open Modal">Modal Content</Modal>);

    const openButton = screen.getByText(/open modal/i);
    expect(openButton).toBeInTheDocument();
    expect(openButton).toHaveTextContent('Open Modal');
  });

  test('modal is initially closed', () => {
    render(<Modal openText="Open">Modal Content</Modal>);

    const modalContainer = document.querySelector('.modal-container');
    expect(modalContainer).not.toHaveClass('open');
  });

  test('opens modal when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Modal openText="Open">Modal Content</Modal>);

    const openButton = screen.getByText(/open/i);
    await user.click(openButton);

    const modalContainer = document.querySelector('.modal-container');
    const modal = document.querySelector('.modal');

    expect(modalContainer).toHaveClass('open');
    expect(modalContainer).not.toHaveClass('close');
    expect(modal).toHaveClass('open');

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
    expect(screen.getByText('x')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', async () => {
    const user = userEvent.setup();
    render(<Modal openText="Open">Modal Content</Modal>);

    const openButton = screen.getByText(/open/i);
    await user.click(openButton);

    expect(document.querySelector('.modal-container')).toHaveClass('open');

    const closeButton = screen.getByText('x');
    await user.click(closeButton);

    expect(document.querySelector('.modal-container')).toHaveClass('close');
    expect(document.querySelector('.modal-container')).not.toHaveClass('open');
  });

  test('renders children content correctly', async () => {
    const user = userEvent.setup();
    const testContent = (
      <div>
        <h1>Test Title</h1>
        <p>Test paragraph</p>
        <button>Action Button</button>
      </div>
    );

    render(<Modal openText="Open">{testContent}</Modal>);

    await user.click(screen.getByText(/open/i));

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test paragraph')).toBeInTheDocument();
    expect(screen.getByText('Action Button')).toBeInTheDocument();
  });

  test('applies custom openText prop', () => {
    render(<Modal openText="Custom Open Text" />);

    expect(screen.getByText('Custom Open Text')).toBeInTheDocument();
  });
});

describe('Modal Component with fireEvent', () => {
  test('opens and closes modal with fireEvent', () => {
    render(<Modal openText="Open">Test Content</Modal>);

    fireEvent.click(screen.getByText(/open/i));

    expect(document.querySelector('.modal-container')).toHaveClass('open');
    expect(screen.getByText('Test Content')).toBeInTheDocument();

    fireEvent.click(screen.getByText('x'));

    expect(document.querySelector('.modal-container')).toHaveClass('close');
  });
});
