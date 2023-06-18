import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal/Modal';

describe('Modal', () => {
  const data = [
    {
      name: 'Channel 1',
      events: [
        {
          name: 'Program 1',
          duration: '01:30:00',
          date_begin: '2023/06/15 20:00:00',
          date_end: '2023/06/15 21:30:00',
          description: 'Program 1 Description',
        },
      ],
    },
  ];

  test('renders Modal component with correct data', () => {
    render(<Modal data={data} isOpen={true} onClose={jest.fn()} />);

    expect(screen.getByText('EPG Schedule')).toBeInTheDocument();
    expect(screen.getByText('Program 1')).toBeInTheDocument();
    expect(screen.getByText('20:00:00 - 21:30:00')).toBeInTheDocument();
  });

  test('does not render Modal component when isOpen is false', () => {
    render(<Modal data={data} isOpen={false} onClose={jest.fn()} />);
    expect(screen.queryByTestId('modal-overlay')).toBeNull();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(<Modal data={data} isOpen={true} onClose={onCloseMock} />);

    fireEvent.click(screen.getByTestId('close-button'));

    expect(onCloseMock).toHaveBeenCalled();
  });


  test('displays program details on hover', () => {
    render(<Modal data={data} isOpen={true} onClose={jest.fn()} />);

    const programElement = screen.getByText('Program 1');

    fireEvent.mouseEnter(programElement);

    const programName = screen.getByTestId('hover-title');
    const timeRange = screen.getByTestId('hover-range');
    const programDescription = screen.getByTestId('hover-description');

    expect(programName).toBeInTheDocument();
    expect(timeRange).toBeInTheDocument();
    expect(programDescription).toBeInTheDocument();

    fireEvent.mouseLeave(programElement);
  });
});


