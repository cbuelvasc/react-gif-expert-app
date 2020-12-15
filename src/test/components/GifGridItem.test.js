import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test GifGridItem component', () => {

    const title = 'Title';
    const url = 'https://127.0.0.1:3000'

    let wrapper = shallow(<GifGridItem title={title} url={url} />);

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url} />);
    });

    test('Component GifGridItem should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Component GifGridItem should show the title', () => {
        const text = wrapper.find('p').text().trim();
        expect(text).toBe(title);
    });

    test('Component GifGridItem should show the img with src and url', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Component GifGridItem should show the div with class', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    });
});