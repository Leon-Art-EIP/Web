import { find } from "../find";
import { start } from "../start";

describe("homePageContent.cy.ts", () => {
  it("should test homePage", () => {
    start();
    find("Application réalisée avec Next.js");
    find("Connexion");
    find("Inscription");
    find("Messages");
    find("Paramètres");
    find("Publications");
    find("Achats");
    find("Profil");
  });
});
