import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Test GifExpertApp component', () => {

    let wrapper = shallow(<GifExpertApp />);

    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    });

    test('Component GifExpertApp should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Component GifExpertApp should show a list of categories', () => {
        const categories = ['One punch', 'Dragon Ball'];
        wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});