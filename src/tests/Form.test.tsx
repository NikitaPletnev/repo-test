import renderer from "react-test-renderer";
import Form from "../components/Form";
import React from "react";

it('snapshot test for Form element', () => {
    const tree = renderer
        .create(<Form onSubmit={() => {}}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
