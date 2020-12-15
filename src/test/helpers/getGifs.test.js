import { getGifs } from '../../helpers/getGifs';

describe('Test getGifs helper', () => {

    test('Helper getGifs should bring ten elements', async () => {
        const gifs = await getGifs('Start War');
        expect(gifs.length).toBe(10);
    });

    test('Helper getGifs should not bring any elements', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
});
