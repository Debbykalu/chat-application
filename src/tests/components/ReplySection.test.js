import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReplySection from './ReplySection';

describe('ReplySection', () => {

  it('renders without crashing', () => {
    const { getByText } = render(<ReplySection onSend={() => {}} />);
    expect(getByText('SEND')).toBeInTheDocument();
  });

  it('shows EDIT button when editingMessage is provided', () => {
    const editingMessage = { text: 'Test Edit' };
    const { getByText } = render(<ReplySection onSend={() => {}} editingMessage={editingMessage} />);
    expect(getByText('EDIT')).toBeInTheDocument();
  });

  it('calls onSend when SEND button is clicked', () => {
    const onSendMock = jest.fn();
    const { getByText } = render(<ReplySection onSend={onSendMock} />);
    fireEvent.click(getByText('SEND'));
    expect(onSendMock).toHaveBeenCalled();
  });

  it('calls onEditComplete when EDIT button is clicked', () => {
    const onEditCompleteMock = jest.fn();
    const editingMessage = { text: 'Test Edit' };
    const { getByText } = render(<ReplySection onSend={() => {}} editingMessage={editingMessage} onEditComplete={onEditCompleteMock} />);
    fireEvent.click(getByText('EDIT'));
    expect(onEditCompleteMock).toHaveBeenCalled();
  });

});
