import React from "react";
import NotificationItem from "./NotificationItem";
import closeIcon from '../../assets/close.png';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleButtonClick = () => {
    console.log("close button has been clicked");
  };

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>
          <p>Your Notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)}>
            <div className={css(styles.NotificationsContent)}>
              {listNotifications.length > 0 && (
                <p>Here is the list of notifications</p>
              )}
              <ul>
                {listNotifications.length === 0 ? (
                  <NotificationItem value='No new notification for now' />
                ) : (
                  listNotifications.map(notification => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                    />
                  ))
                )}
              </ul>
            </div>
            <button
              aria-label="Close"
              className={css(styles.button)}
              onClick={this.handleButtonClick}>
                <img src={closeIcon} alt="Close" className={css(styles.icon)} />
            </button>
          </div>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    display: 'flex',
    textAlign: 'left',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    width: '100%',
    height: '100vh'
  },
  NotificationsP: {
    fontFamily: `'Galano Grotesque Alt', sans-serif`,
    fontWeight: 400,
    padding: '0 1.5rem 0 1.5rem',
    margin: 0,
    fontSize: '20px',
  },
  NotificationsContentUl: {
    padding: '0',
    border: '5px dotted red',
  },
  defaultNotification: {
    '[data-notification-type="default"]': {
      fontFamily: `'Galano Grotesque Alt', sans-serif`,
      fontWeight: 400,
      color: 'blue',
    },
  },
  urgentNotification: {
    '[data-notification-type="urgent"]': {
      fontFamily: `'Galano Grotesque Alt', sans-serif`,
      fontWeight: 400,
      color: 'red',
    },
  },
  thirdListItem: {
    'ul > li:nth-child(3)': {
      fontFamily: `'Galano Grotesque Alt', sans-serif`,
      fontWeight: 400,
      fontSize: '1.2rem',
      color: 'red',
    },
  },
});

Notifications.propTypes = {
  listNotifications: PropTypes.array,
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
};

export default Notifications;
