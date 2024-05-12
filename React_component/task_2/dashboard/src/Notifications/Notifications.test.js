import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

jest.mock("../utils/utils", () => ({
  getLatestNotification: jest.fn(() => ["New course available", "New security risk"]),
}));

describe("Notifications", () => {
  it("renders without crashing", () => {
    render(<Notifications displayDrawer={true} />);
  });

  it("renders the correct number of notifications", async () => {
    const { getByText } = render(<Notifications displayDrawer={true} />);
    await waitFor(() => {
      expect(getByText("Here is the list of notifications")).toBeInTheDocument();
      expect(getByText("New course available")).toBeInTheDocument();
      expect(getByText("New security risk")).toBeInTheDocument();
    });
  });

  it("calls markAsRead function when button is clicked", async () => {
    const mockMarkAsRead = jest.fn();
    const { getByText } = render(<Notifications displayDrawer={true} markAsRead={mockMarkAsRead} />);
    const button = getByText("close");
    fireEvent.click(button);
    await waitFor(() => {
      expect(mockMarkAsRead).toHaveBeenCalledWith(1);
      expect(mockMarkAsRead).toHaveBeenCalledWith(2);
    });
  });
});

test('renders correctly if no listNotifications is passed', () => {
  render(<Notifications />);
  const noNotificationMessage = screen.getByText('No new notification for now');
  expect(noNotificationMessage).toBeInTheDocument();
});

test('renders correctly if an empty array is passed', () => {
  render(<Notifications listNotifications={[]} />);
  const noNotificationMessage = screen.getByText('No new notification for now');
  expect(noNotificationMessage).toBeInTheDocument();
});

test('renders correctly if a list of notifications is passed', () => {
  const notifications = [
    getLatestNotification('New course available'),
    getLatestNotification('New challenge available'),
    getLatestNotification('New challenge available'),
  ];
  render(<Notifications listNotifications={notifications} />);
  const notificationItems = screen.getAllByTestId('notification-item');
  expect(notificationItems.length).toBe(3);
});
