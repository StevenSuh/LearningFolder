import commentsReducer from "reducers/comments";
import { SAVE_COMMENT, UNKNOWN } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
    const mockAction = {
        type: SAVE_COMMENT,
        payload: "new comment"
    };

    const mockState = commentsReducer([], mockAction);
    expect(mockState).toEqual(["new comment"]);
});

it("handles action with unknown type", () => {
    const mockState = commentsReducer([], { type: UNKNOWN });
    expect(mockState).toEqual([]);
});