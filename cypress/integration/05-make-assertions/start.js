/// <reference types="cypress" />
// look into common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Adds one item', () => {

  cy.get('#add-todo').type('Pet Benio{enter}')
  .should('be.visible')


});

it.skip('Adds two items', () => {

  cy.get('#add-todo').type('Make Dinner{enter}');
  cy.get('#add-todo').type('Wash Dishes{enter}');

  cy.get('#todo-list li').should('have.length', 2)
});

it('Marks item as completed', () => {

  cy.get('.toggle').click();

  cy.get('.todo').should('have.class', 'completed')
});
