import * as notifications from '../../Notifications.json';
import { schema, denormalize } from 'normalizr';

const users = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
    author: users, 
    context: message
});

const normalizeNotifications = (notifications) => {
    const result = schema.normalize(notifications, [notification]);
    return result.entities;
};

function getAllNotificationsByUser(userId) {
    const userNotifications = normalizeNotifications(notifications)
        .filter(notification => notification.author.id === userId)
        .map(notification => {
            const denormalizedNotification = denormalize(notification.result, 
                contextSchema, normalizeNotifications(notifications));
            return denormalizedNotification.entities.contexts[0];
        });

    return userNotifications;
}

export default getAllNotificationsByUser;
