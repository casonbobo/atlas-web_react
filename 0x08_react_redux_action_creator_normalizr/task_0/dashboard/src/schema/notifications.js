import * as notifications from '../../Notifications.json'
function getAllNotificationsByUser(userId) {
    const userNotifications = notifications.map(notification => {
        if (notification.author.id === userId) {
            return notification.context;
        }
        return null;
    }).filter(notification => notification !== null);

    return userNotifications;
}

export default getAllNotificationsByUser;
