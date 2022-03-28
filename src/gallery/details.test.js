import * as React from 'react'; 
import { shallow } from 'enzyme';
import Details from "./details";
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
describe('<Details /> with no states', () => {   
    it('should match the snapshot', () => { 
      const container = shallow(<Details />);
      expect(container.html()).toMatchSnapshot();
    });
    it('should load page default loading', () => { 
      render(<Details />);
      const linkElement = screen.getByText(/Loading.../i);
      expect(linkElement).toBeInTheDocument();
    });
});