import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
