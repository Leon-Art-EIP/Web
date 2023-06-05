export function start(url?: string) {
  cy.visit(`http://localhost:3000${url ?? ""}`);
}
