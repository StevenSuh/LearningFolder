import React from "react";
import { mount } from "enzyme";

import CommentBox from "components/CommentBox";

// setup
let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox />);
});
afterEach(() => {
    wrapped.unmount();
});
// setup end

it("has a text area and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
    beforeEach(() => {
        const newValue = "new comment";
        const mockChangeEvent = {
            target: {
                value: newValue
            }
        };
        wrapped.find("textarea").simulate("change", mockChangeEvent);
        wrapped.update();
    });

    it("has a text area that users can type in", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it("has a form that empties state when submitted", () => {
        wrapped.find("form").simulate("submit");
        wrapped.update();

        expect(wrapped.state().comment).toEqual("");
    });
});
