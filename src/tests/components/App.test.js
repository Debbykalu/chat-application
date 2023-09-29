import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the chat application', () => {
  render(<App />);
  const conversationElement = screen.getByText(/Conversations/i);
  expect(conversationElement).toBeInTheDocument();
});

