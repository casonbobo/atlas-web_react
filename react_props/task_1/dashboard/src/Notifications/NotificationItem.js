import React from 'react';


function NotificationItem({ type, html, value }) {
  const listItemContent = html ? (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
  ) : (
    <li data-notification-type={type}>{value}</li>
  );

  return listItemContent;
}

export default NotificationItem
