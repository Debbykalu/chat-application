import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessagesList from './MessagesList';

describe('MessagesList', () => {

  const mockMessages = [
    { id: 1, text: 'Message One', last_updated: '2023-09-25T12:00:00.000Z' },
    { id: 2, text: 'Message Two', last_updated: '2023-09-26T12:00:00.000Z' },
    { id: 3, text: 'Message Three', last_updated: '2023-09-24T12:00:00.000Z' },
  ];

  it('renders without crashing', () => {
    const { getByText } = render(<MessagesList messages={mockMessages} onEditMessage={() => {}} />);
    expect(getByText('Message One')).toBeInTheDocument();
  });

  it('sorts messages by last_updated', () => {
    const { getAllByRole } = render(<MessagesList messages={mockMessages} onEditMessage={() => {}} />);
    const messages = getAllByRole('listitem'); // Assuming your messages have the role 'listitem'. Adjust if different.
    expect(messages[0].textContent).toContain('Message Three'); // Oldest date
    expect(messages[1].textContent).toContain('Message One'); // Second latest
    expect(messages[2].textContent).toContain('Message Two'); // Latest date
  });

  it('calls onEditMessage with correct message when a message is clicked', () => {
    const onEditMessageMock = jest.fn();
    const { getAllByRole } = render(<MessagesList messages={mockMessages} onEditMessage={onEditMessageMock} />);
    fireEvent.click(getAllByRole('listitem')[0]);
    expect(onEditMessageMock).toHaveBeenCalledWith(mockMessages[2]); // The oldest message based on sorting.
  });

});
