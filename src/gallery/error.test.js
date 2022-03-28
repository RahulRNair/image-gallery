
import React from 'react';
import { shallow } from 'enzyme';
import Error from "./error";

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
// const mockedUsedNavigate = jest.fn();
// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//    useNavigate: () => mockedUsedNavigate,
//  }));

describe('<Error /> with no props', () => {
    const container = shallow(<Error />);
    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
      });
      it('should find link to home', () => {
        var anchorHref = container.find('a').prop('href');
        expect(anchorHref).toEqual('/page/1')
      });
});