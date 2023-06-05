import { find } from "../find";
import { start } from "../start";

describe('registerPageMissingFields.cy.ts', () => {
  it('should successfully register when all fields are correctly filled', () => {
    start('/register');
    cy.get('input[name="username"]').type('myusername');
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[name="register"]').click();
    // Ajouter la logique pour vérifier que l'inscription a réussi
  });

  it('should not register when no field is filled', () => {
    start('/register');
    cy.get('button[name="register"]').click();
    find('Veuillez remplir tous les champs.');
  });

  it('should not register when only username is filled', () => {
    start('/register');
    cy.get('input[name="username"]').type('myusername');
    cy.get('button[name="register"]').click();
    find('Veuillez remplir tous les champs.');
  });

  it('should not register when only email is filled', () => {
    start('/register');
    cy.get('input[name="email"]').type('example@example.com');
    cy.get('button[name="register"]').click();
    find('Veuillez remplir tous les champs.');
  });

  it('should not register when only password is filled', () => {
    start('/register');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[name="register"]').click();
    find('Veuillez remplir tous les champs.');
  });

  it('should not register when email is invalid', () => {
    start('/register');
    cy.get('input[name="username"]').type('myusername');
    cy.get('input[name="email"]').type('invalidemail');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[name="register"]').click();
    find('Veuillez entrer une adresse email valide.');
  });
});

