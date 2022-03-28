
import React from 'react';
import { shallow } from 'enzyme';
import Loading from "./loading";

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
// const mockedUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//    useNavigate: () => mockedUsedNavigate,
//  }));

describe('<Loading /> with no props', () => {
    const container = shallow(<Loading />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
      });
});