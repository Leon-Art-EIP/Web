import { find } from "../find";
import { start } from "../start";

describe("publicationsPageContent.cy.ts", () => {
  it("should test publicationsPage", () => {
    start("/publications");
    find("Page de publications");
  });
});
