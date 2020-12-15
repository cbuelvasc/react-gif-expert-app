import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs')

describe('Test GifGrid component', () => {

    const category = 'One punch';

    let wrapper = shallow(<GifGrid category={category} />);

    beforeEach(() => {
        wrapper = shallow(<GifGrid category={category} />);
    });

    test('Component GifGrid should show correctly', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        expect(wrapper).toMatchSnapshot();
    });

    test('Component GifGrid should show the items with useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc123',
                url: 'https://localhost:3000/any.jpg',
                title: 'Nothing'
            },
            {
                id: 'abc124',
                url: 'https://localhost:3000/anything.jpg',
                title: 'Nothing to see'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p')).exists().toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});