import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import * as api from '../../api/api'; // ✅ make sure this path matches your api file

vi.mock('../../api/api'); // ✅ mock the module

test('renders bug list after fetching', async () => {
  api.getBugs.mockResolvedValue([
    { _id: '1', title: 'UI Bug', description: 'Button not clickable', status: 'open' },
  ]);

  render(<App />);

  await waitFor(() => {
    expect(screen.getByText('UI Bug')).toBeInTheDocument();
  });
});
