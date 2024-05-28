const getAllNotificationsByUser = require('./notifications');
import { getAllNotificationsByUser } from './notifications';
import { schema, denormalize } from 'normalizr';

describe('getAllNotificationsByUser', () => {
    it('should return a correct result array after normalization', () => {
        const result = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
        expect(result.result.entities.contexts).toEqual(
            expect.arrayContaining([
                "5debd76480edafc8af244228",
                "5debd764507712e7a1307303",
                "5debd76444dd4dafea89d53b",
                "5debd76485ee4dfd1284f97b",
                "5debd7644e561e022d66e61a",
                "5debd7644aaed86c97bf9d5e",
                "5debd76413f0d5e5429c28a0",
                "5debd7642e815cd350407777",
                "5debd764c1127bc5a490a4d0",
                "5debd7646ef31e0861ec1cab",
                "5debd764a4f11eabef05a81d",
                "5debd764af0fdd1fc815ad9b",
                "5debd76468cb5b277fd125f4",
                "5debd764de9fa684468cdc0b"
            ])
        );
    });
    it('should return a correct messages entity after normalization', () => {
        const result = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
        expect(result.result.entities.messages).toEqual(
            expect.arrayContaining([
                {
                    guid: "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
                    isRead: false,
                    type: "default",
                    value: "Cursus risus at ultrices mi."
                }
            ])
        );
    });
});

describe('getAllNotificationsByUser', () => {
    it('should return a correct users entity after normalization', () => {
        const result = getAllNotificationsByUser('5debd764a7c57c7839d722e9');
        expect(result.result.entities.users).toEqual(
            expect.objectContaining({
                '5debd764a7c57c7839d722e9': {
                    id: '5debd764a7c57c7839d722e9',
                    name: {
                        first: 'Poole',
                        last: 'Sanders'
                    },
                    email: 'poole.sanders@holberton.nz',
                    picture: 'http://placehold.it/32x32',
                    age: 25
                }
            })
        );
    });

    it('should return the correct user object when given a valid userId', () => {
        const userId = '5debd764a7c57c7839d722e9';
        const userNotifications = getAllNotificationsByUser(userId);
        expect(userNotifications.find(notification => notification.author.id === userId)).toEqual(
            expect.objectContaining({
                guid: '2d8e40be-1c78-4de0-afc9-fcc147afd4d2',
                isRead: true,
                type: 'urgent',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            })
        );
    });
});

