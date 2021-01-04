/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

it('Checks text of todo item', () => {
  cy.get('#add-todo').type('buy milk{enter}');
  cy.get('#add-todo').type('wash dishes{enter}');
  cy.get('#add-todo').type('do homework{enter}');

  cy
    .get('.todo')
    // .should('contain.text', 'buy milk');
    .then(list => {
      expect(list[0]).to.contain.text('buy milk');
    })

});

it('Checks texts of all todo items', () => {

  cy
    .get('.todo')
    .then(todos => {
      expect(todos[0]).to.contain.text('buy milk');
      expect(todos[1]).to.contain.text('wash dishes');
      expect(todos[2]).to.contain.text('do homework');
    })

});

it.skip('Has first todo item with text "wash dishes"', () => {

  cy
    .get('.todo')
    .should('have.length', 2)
    .eq(0)
    .should('contain.text', 'wash dishes');

});

it('Has first todo item with text "wash dishes" (solution 2)', () => {

  cy
    .get('.todo')
    .should(list => {
      expect(list[0]).to.contain.text('wash dishes');
    })

});
