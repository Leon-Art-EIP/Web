import { start } from "../start";
import { find } from "../find";

describe("SignupPageContent.cy.ts", () => {

  it('should return false if any field is empty', () => {
    start();
    cy.visit('/signup');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('');
    cy.get('form').submit();
    find('Veuillez remplir tous les champs.');
  });

  it('should return false if email is invalid', () => {
    start();
    cy.visit('/signup');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('password');
    cy.get('form').submit();
    find('Veuillez entrer une adresse email valide.');
  });

  it('should return true if all fields are valid', () => {
    start();
    cy.visit('/signup');
    cy.get('input[name="username"]').type('testuser');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('form').submit();
    cy.url().should('include', '/success');
  });
});