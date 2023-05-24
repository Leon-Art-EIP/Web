import { start } from "../start";
import { find } from "../find";

describe("homePageContent.cy.ts", () => {
  it("should test homePage", () => {
    start();
    find("You're using Next.js");
    find("Register page");
  });
});
