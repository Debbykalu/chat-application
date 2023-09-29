import { render, screen } from '@testing-library/react';
import ConversationsList from './Components/ConversationsList';

test('renders conversations', () => {
  const mockConversations = [
    { id: '1', name: 'Conversation1' },
    { id: '2', name: 'Conversation2' }
  ];

  render(<ConversationsList conversations={mockConversations} />);
  
  expect(screen.getByText(/Conversation1/)).toBeInTheDocument();
  expect(screen.getByText(/Conversation1/)).toBeInTheDocument();
});
