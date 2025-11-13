import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, test, expect, vi } from "vitest";
import BugForm from "../../components/BugForm";

test("renders bug form and submits correctly", async () => {
  const mockCreate = vi.fn();

  render(<BugForm onBugCreated={mockCreate} />);

  fireEvent.change(screen.getByPlaceholderText(/Enter bug title/i), {
    target: { value: "New Bug" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Describe the issue/i), {
    target: { value: "Description here" },
  });

  fireEvent.click(screen.getByText(/Submit/i));

  expect(mockCreate).toHaveBeenCalled();
});
