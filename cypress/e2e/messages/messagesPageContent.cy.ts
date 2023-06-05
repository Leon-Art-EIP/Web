import { find } from "../find";
import { start } from "../start";

describe("messagesPageContent.cy.ts", () => {
  it("should test messagesPage", () => {
    start("/messages");
    find("Page de messages");
  });
});
