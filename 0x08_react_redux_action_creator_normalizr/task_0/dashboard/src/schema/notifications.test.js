const getAllNotificationsByUser = require('./notifications');

test('getAllNotificationsByUser returns correct data for user with id 5debd764a7c57c7839d722e9', () => {
    const userId = '5debd764a7c57c7839d722e9';
    const expectedNotifications = [
        {
            "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
            "isRead": true,
            "type": "urgent",
            "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        },
        {
            "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
            "isRead": false,
            "type": "urgent",
            "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et."
        },
        {
            "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
            "isRead": false,
            "type": "urgent",
            "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
        },
        {
            "guid": "89906f88-a02d-41ee-b214-daa0c54633e3",
            "isRead": true,
            "type": "urgent",
            "value": "Odio pellentesque diam volutpat commodo sed egestas egestas"
        },
        {
            "guid": "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
            "isRead": false,
            "type": "urgent",
            "value": "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor"
        }
    ];

    const userNotifications = getAllNotificationsByUser(userId);
    expect(userNotifications).toEqual(expectedNotifications);
});
