import React, {PureComponent} from "react";
import NotificationItem from "./NotificationItem";
import closeIcon from '../../assets/close.png';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import { StyleSheet, css, keyframes } from "aphrodite";

class Notifications extends PureComponent {

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func, 
    markNotificationAsReadOnly: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  static defaultProps = {
    displayDrawer: true,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {}
  };

  render() {
    const { displayDrawer, listNotifications, markNotificationAsRead } = this.props;
    
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
                      markAsRead={() => markNotificationAsRead(notification.id)}
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
    float: 'right',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    height: '100vh',
    transition: 'opacity 0.5s ease-in-out',
    ':hover': {
      opacity: '1',
    },
    animation: '$bounce 1s ease-in-out infinite',
  },
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-5px)',
    },
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

const mapStateToProps = (state) => ({
  listNotifications: state.notifications.messages,
});

const mapDispatchToProps = {
  fetchNotifications,
};
export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
