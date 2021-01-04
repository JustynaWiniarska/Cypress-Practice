/// <reference types="cypress" />

it('adds a new todo item', () => {
  cy.visit('localhost:3000');

  cy.get('#add-todo').type('Pet Benio{enter}')
});

it('completes todo item', () => {
  cy.visit('localhost:3000');

  cy.get('[type="checkbox"]').click();
});

it('deletes todo item', () => {
  cy.visit('localhost:3000');

  cy.get('.destroy').click{force:true});
});
