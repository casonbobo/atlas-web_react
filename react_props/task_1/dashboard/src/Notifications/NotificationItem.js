import React from 'react';
import './Notifications.css';


function NotificationItem({ type, html, value }) {
  const listItemContent = html ? (
    <li className={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li className={type}>{value}</li>
  );

  return listItemContent;
}

export default NotificationItem
