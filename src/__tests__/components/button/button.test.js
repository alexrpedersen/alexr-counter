import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../../../components/button/button.js';

describe('<Button />', () => {
    it('exists after my application has loaded', () => {
        let app = shallow(<Button />);
        expect(app.find('button').exists()).toBeTruthy();
        expect(app.find('button')).toHaveLength(2);
    });

    it('changes the state of our number on click -1', () =>{
        let app = mount(<Button />);
        let minusButton = app.find('button').at(0);
        minusButton.simulate('click');

        expect(app.state('count')).toEqual(-1);
    })

    it('changes the state of our number on click +1', () =>{
        let app = mount(<Button />);
        let plusButton = app.find('button').at(1);
        plusButton.simulate('click');

        expect(app.state('count')).toEqual(1);
    })

    it('renders correctly', () => {
        const tree = renderer.create(<Button />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


