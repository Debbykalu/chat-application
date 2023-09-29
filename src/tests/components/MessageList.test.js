import { render, screen } from '@testing-library/react';
import MessageList from './Components/MessageList';

test('renders messages', () => {
  const mockMessages = [
    { id: '1', text: 'Hello' },
    { id: '2', text: 'Hi there' }
  ];

  render(<MessageList messages={mockMessages} />);
  
  expect(screen.getByText(/Hello/)).toBeInTheDocument();
  expect(screen.getByText(/Hi there/)).toBeInTheDocument();
});
