import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders App component with button', () => {
    render(<App />);
    const buttonElement = screen.getByText('Mostrar EPG');
    expect(buttonElement).toBeInTheDocument();
  });

  test('opens and closes the modal', () => {
    render(<App />);
    const buttonElement = screen.getByText('Mostrar EPG');

    // Click the button to open the modal
    fireEvent.click(buttonElement);
    expect(screen.getByText('EPG Schedule')).toBeInTheDocument();

    // Click the close button to close the modal
    fireEvent.click(screen.getByText('×'));
    expect(screen.queryByText('EPG Schedule')).not.toBeInTheDocument();
  });
});
