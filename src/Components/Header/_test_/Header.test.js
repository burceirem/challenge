import React from 'react';
import { render  } from '@testing-library/react';
import renderer from "react-test-renderer";
import Header from '../Header';

it ( "renders header component correctly", () => {
    const { getByTestId } = render(<Header />);
     expect(getByTestId("header")).toHaveClass("header"); 
});


it("matches snapshot",() => {
    const tree = renderer.create(<Header/>);
    expect(tree).toMatchSnapshot();
   })
   