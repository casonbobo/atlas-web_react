const mongoose = require('mongoose');
const Notification = require('./schema/notifications');

const notificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  context: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  isRead: { type: Boolean, default: false },
});

function notificationsNormalizer(data) {
  const normalizedNotifications = [];

  data.forEach((notification) => {
    const normalizedNotification = new Notification({
      title: notification.title,
      message: notification.message,
      createdAt: notification.createdAt,
      author: notification.author,
      context: notification.context,
      isRead: notification.isRead,
    });

    normalizedNotifications.push(normalizedNotification);
  });

  return normalizedNotifications;
}

module.exports = mongoose.model('Notification', notificationSchema);
module.exports = notificationsNormalizer;
