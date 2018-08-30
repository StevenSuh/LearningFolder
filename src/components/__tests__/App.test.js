import React from "react";
import { shallow } from "enzyme";

import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// setup
let app_wrapped;
beforeEach(() => {
    app_wrapped = shallow(<App/>);
});
// setup end

it("renders a comment box", () => {
    expect(app_wrapped.find(CommentBox).length).toEqual(1);
});

it("renders a comment list", () => {
    expect(app_wrapped.find(CommentList).length).toEqual(1);
});