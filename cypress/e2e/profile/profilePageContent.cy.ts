import { find } from "../find";
import { start } from "../start";

describe("profilePageContent.cy.ts", () => {
  it("should test profilePage", () => {
    start("/profile");
    find("Page de profil");
  });
});
