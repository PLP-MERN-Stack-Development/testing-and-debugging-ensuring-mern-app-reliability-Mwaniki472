import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, test, expect, vi } from "vitest";
import BugItem from "../../components/BugItem";

test("renders bug item and handles delete", async () => {
  const bug = { _id: "1", title: "UI Bug", description: "Button issue", status: "open" };
  const mockDelete = vi.fn();

  render(<BugItem bug={bug} onDelete={mockDelete} />);

  expect(screen.getByText("UI Bug")).toBeInTheDocument();
  expect(screen.getByText("Button issue")).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Delete/i));
  expect(mockDelete).toHaveBeenCalledWith("1");
});

