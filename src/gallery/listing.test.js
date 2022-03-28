import * as React from 'react'; 
import { shallow } from 'enzyme';
import Listing from "./listing";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
 }));
describe('<Listing /> with no states', () => {   
    it('should match the snapshot', () => { 
      const container = shallow(<Listing />);
      expect(container.html()).toMatchSnapshot();
    });
    it('should load page default loading', () => { 
      render(<Listing />);
      const linkElement = screen.getByText(/Loading.../i);
      expect(linkElement).toBeInTheDocument();
    });
});