import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem", () => {
  it("renders without crashing", () => {
    render(<NotificationItem type="default" value="New course available" />);
  });

  it("renders the correct type and value", async () => {
    const { getByText } = render(<NotificationItem type="default" value="New course available" />);
    await waitFor(() => {
      expect(getByText("New course available")).toBeInTheDocument();
      expect(getByText("default")).toBeInTheDocument();
    });
  });

  it("calls markAsRead function when button is clicked", async () => {
    const mockMarkAsRead = jest.fn();
    const { getByText } = render(<NotificationItem type="default" value="New course available" markAsRead={mockMarkAsRead} />);
    const button = getByText("close");
    fireEvent.click(button);
    await waitFor(() => {
      expect(mockMarkAsRead).toHaveBeenCalledWith(1);
    });
  });
});
