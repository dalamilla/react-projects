import { render, screen } from '@testing-library/react';
import Clock from './Clock';

test('renders pomodore clock', () => {
  render(<Clock />);
  const linkElement = screen.getByText(/Pomodore Clock/i);
  expect(linkElement).toBeInTheDocument();
});
