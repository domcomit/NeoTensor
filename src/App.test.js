// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NeoTensor title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NeoTensor/i);
    expect(titleElement).toBeInTheDocument();
});
