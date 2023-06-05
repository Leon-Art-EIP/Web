import { find } from "../find";
import { start } from "../start";

describe("loginPageContent.cy.ts", () => {
  it("should test loginPage", () => {
    start("/login");
    find("Page de connexion");
  });
});
