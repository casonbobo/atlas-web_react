import React from "react";
import './Notifications.css';
import NotificationItem from "./NotificationItem";
import { getLatestNotification } from "../utils/utils";

export function Notifications() {
  const handleButtonClick = () => {
    console.log("close button has been clicked");
  };

  return (
    <div className="Notifications">
      <div className="Notifications-content">
        <p> 
          Here is the list of notifications
        </p>
        <ul>
          <NotificationItem data-priority="default" value="New course available" />
          <NotificationItem data-priority="urgent" value="New resume available" />
          <NotificationItem className="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
        <button
                className="button"
                onClick={() => console.log("Close button has been clicked")}
                aria-label="Close">
                x
        </button>
      </div>
    </div>
  );
}

export default Notifications;
