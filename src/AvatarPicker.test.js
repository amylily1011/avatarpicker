import React from 'react';
import AvatarPicker from './AvatarPicker';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.Configure({ adapter: new Adapter() })

describe('<AvatarPicker />', () => {
    const onClickToggle = jest.fn();
    it('should render properly', () => {
        const wrapper = shallow(<AvatarPicker />);
        expecte(wrapper).toMachSnapshot()
    })

    it('should show one main avatar', () => {
       const wrapper = shallow(<AvatarPicker />);
       expect(wrapper.find('.a').length).toBe(1);
    })

    it('should simulate click' ,() => {
        const wrapper = shallow(<AvatarPicker />);
        wrapper.find('.img').simulate('click');
        expect(onClickToggle).toBeCalled();
    })

});

