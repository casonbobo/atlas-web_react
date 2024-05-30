import React from "react";
import PropTypes from "prop-types";
import { Stylesheet } from "aphrodite";

const styles = StyleSheet.create({
  item: {
    width: "100%",
    borderBottom: "1px solid black",
    fontSize: "20px",
    padding: "10px 8px",
    cursor: "pointer",
  },
});

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

  return (
    <div className={styles.item} onClick={() => markAsRead(id)}>
      {listItemContent}
    </div>
  );
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

export default React.memo(NotificationItem);
