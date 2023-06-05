import { find } from "../find";
import { start } from "../start";

describe("purchasePageContent.cy.ts", () => {
  it("should test purchasePage", () => {
    start("/purchase");
    find("Page d'achats");
  });
});
