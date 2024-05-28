const NotificationItemShape = {
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired
  }).isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default NotificationItemShape;
