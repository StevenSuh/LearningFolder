import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
    it("has the correct type", () => {
        const mockAction = saveComment();
        expect(mockAction.type).toEqual(SAVE_COMMENT);
    });

    it("has the correct payload", () => {
        const mockAction = saveComment("new comment");
        expect(mockAction.payload).toEqual("new comment");
    });
});