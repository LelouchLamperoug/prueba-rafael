import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal/Modal';

const mockData = [
  {
    name: 'Channel 1',
    events: [
      { name: 'Event 1', duration: '01:30:00' },
      { name: 'Event 2', duration: '02:15:00' },
      { name: 'Event 3', duration: '00:45:00' },
    ],
  },
];

describe('Modal', () => {
  test('renders Modal component with data', () => {
    render(<Modal data={mockData} isOpen={true} onClose={jest.fn()} />);

    expect(screen.getByText('EPG Schedule')).toBeInTheDocument();

    expect(screen.getByText('Channel 1')).toBeInTheDocument();

    expect(screen.getByText('Event 1')).toBeInTheDocument();
    expect(screen.getByText('Event 2')).toBeInTheDocument();
    expect(screen.getByText('Event 3')).toBeInTheDocument();
  });


  test('closes the modal on button click', () => {
    const onCloseMock = jest.fn();
    render(<Modal data={mockData} isOpen={true} onClose={onCloseMock} />);
    fireEvent.click(screen.getByText('×'));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('handles mouse enter and leave events', () => {
    render(<Modal data={mockData} isOpen={true} onClose={jest.fn()} />);

    const event1 = document.querySelector('.program:nth-child(1)');
    const event2 = document.querySelector('.program:nth-child(2)');

    // Simulate mouse enter on Event 1
    fireEvent.mouseEnter(event1);

    // Check if the hovered item name is displayed
    expect(event1.textContent).toBe('Event 1');

    // Simulate mouse enter on Event 2
    fireEvent.mouseEnter(event2);

    // Check if the hovered item name is displayed
    expect(event2.textContent).toBe('Event 2');

  });
});

