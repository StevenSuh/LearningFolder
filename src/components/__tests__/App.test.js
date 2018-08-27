import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

it("renders a comment box", () => {
    const app_wrapped = shallow(<App />);

    expect(app_wrapped.find(CommentBox).length).toEqual(1);
});

it("renders a comment list", () => {
    const app_wrapped = shallow(<App />);

    expect(app_wrapped.find(CommentList).length).toEqual(1);
});