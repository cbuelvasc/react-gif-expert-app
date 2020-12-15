import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Test AddCategory component', () => {

    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Component AddCategory should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Component AddCategory should show the input with a value', () => {
        const input = wrapper.find('input');
        const value = 'Hello people';
        input.simulate('change', {
            target: {
                value: value
            }
        });
        //expect().toBe();
    });

    test('Component AddCategory should not change the input with a submit', () => {
        wrapper.find('form')
            .simulate('submit', {
                preventDefault() { }
            });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Component AddCategory should call setCategory and clear the input', () => {
        const value = 'Hello people';
        const input = wrapper.find('input');
        input.simulate('change', {
            target: { value }
        });
        wrapper.find('form')
            .simulate('submit', {
                preventDefault() { }
            });
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    });
});