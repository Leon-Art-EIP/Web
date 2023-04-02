import { start } from "../start";
import { find } from "../find";

describe("homePageContent.cy.ts", () => {
  it("should test homePage", () => {
    start();
    find("Edit src/App.tsx and save to reload.");
    find("Learn React");
  });
});
