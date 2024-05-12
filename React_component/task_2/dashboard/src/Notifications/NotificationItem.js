import React from 'react';
import PropTypes from 'prop-types'

function NotificationItem({ type, html, value, id, markAsRead }) {
  const listItemContent = html ? (
    <li
      onClick={() => markAsRead(id)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
    ></li>
  ) : (
    <li
      onClick={() => markAsRead(id)}
      data-notification-type={type}
    >{value}</li>
  );

  return listItemContent;
}

NotificationItem.defaultProps = {
  type: 'default',
  id: '', // add a default value for the new property id
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string, // define the new property id
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem
