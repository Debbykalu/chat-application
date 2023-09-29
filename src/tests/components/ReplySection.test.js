import { render, screen, fireEvent } from '@testing-library/react';
import ReplySection from './Components/ReplySection';

test('allows user to input a message', () => {
  render(<ReplySection />);

  const inputElement = screen.getByPlaceholderText(/Type your message/i);
  fireEvent.change(inputElement, { target: { value: 'Hello' } });
  
  expect(inputElement.value).toBe('Hello');
});
