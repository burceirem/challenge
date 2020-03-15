import React from 'react';
import { render  } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

it ( "renders footer component correctly", () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId("footer")).toHaveClass("footer"); 
});



it("matches snapshot",() => {
 const tree = renderer.create(<Footer/>);
 expect(tree).toMatchSnapshot();
});

