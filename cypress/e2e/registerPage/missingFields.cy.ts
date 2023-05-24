import { find } from "../find";
import { start } from "../start";

describe("missingFields.cy.ts", () => {
  it("should test not to field every input", () => {
    start("/register");
    cy.get('input[name="email"]').type("example@example.com");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[name="register"]').click();
    find("Veuillez remplir tous les champs.");
  });
});
