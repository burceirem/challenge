import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Content from "../Content";

it("renders content component correctly", () => {
  const { getByTestId } = render(
    <Content
      title="Wolf Creek"
      url="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
    />
  );
  expect(getByTestId("card")).toHaveClass("card");
});

it("matches snapshot", () => {
  const tree = renderer.create(
    <Content
      title="Wolf Creek"
      url="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
    />
  );

  expect(tree).toMatchInlineSnapshot(`
    <div
      className="card card"
      data-testid="card"
    >
      <img
        className="card-img-top"
        src="https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg"
      />
      <div
        className="card-body"
      >
        <p
          className="card-text"
        >
           
          Wolf Creek
           
        </p>
      </div>
    </div>
  `);
});
