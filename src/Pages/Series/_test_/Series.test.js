import React from "react";
import { render ,fireEvent  } from "@testing-library/react";
import renderer from "react-test-renderer";
import Series from "../Series";


const data = [ 
                {title: "Wolf Creek", 
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do consequat.",
                programType: "series",
                images: {
                  "PosterArt": {
                    "url": "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
                    "width": 1000,
                    "height": 1500
                  }
                },
                releaseYear: 2016
                }];
  

  it("Check click event of sort button", () => {
    const { getByText} = render(<Series  seriesData={data}/>);
    fireEvent.click(getByText("Sort"));
  });

  it("Check searchbar placeholder text", () => {
    const { getByPlaceholderText} = render(<Series  seriesData={data}/>);
    fireEvent.click(getByPlaceholderText("Search"));
  });

  it("matches snapshot",() => {
    const tree = renderer.create(<Series  seriesData={data}/>);
    expect(tree).toMatchSnapshot();
  });

