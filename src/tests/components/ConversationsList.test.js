import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConversationsList from './ConversationsList';

describe('ConversationsList', () => {

  const mockConversations = [
    { id: 1, last_updated: '2023-09-25T12:00:00.000Z' },
    { id: 2, last_updated: '2023-09-26T12:00:00.000Z' },
    { id: 3, last_updated: '2023-09-24T12:00:00.000Z' },
  ];

  it('renders without crashing', () => {
    const { getByText } = render(<ConversationsList conversations={mockConversations} onSelect={() => {}} />);
    expect(getByText('Conversation 1')).toBeInTheDocument();
  });

  it('sorts conversations by last_updated', () => {
    const { getAllByRole } = render(<ConversationsList conversations={mockConversations} onSelect={() => {}} />);
    const conversations = getAllByRole('listitem');
    expect(conversations[0].textContent).toBe('Conversation 2'); // Latest date
    expect(conversations[1].textContent).toBe('Conversation 1'); // Second latest
    expect(conversations[2].textContent).toBe('Conversation 3'); // Oldest
  });

  it('calls onSelect with correct index when conversation is clicked', () => {
    const onSelectMock = jest.fn();
    const { getAllByRole } = render(<ConversationsList conversations={mockConversations} onSelect={onSelectMock} />);
    fireEvent.click(getAllByRole('listitem')[0]);
    expect(onSelectMock).toHaveBeenCalledWith(0);
  });

});
