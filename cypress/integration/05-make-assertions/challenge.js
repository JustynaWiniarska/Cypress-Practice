/// <reference types="cypress" />

/*
  ⚠️ remember you can run single test by using it.only
  ⚠️ some of these challenges require you to start your application
  in a certain state, e.g. there should be checked todo item in list,
  or there should be only one, etc.
  💡 find common assertions https://docs.cypress.io/guides/references/assertions.html#Common-Assertions
*/

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/*
  👶 challenge #1: check that there are 4 elements on page
  ⚠️ start this test with 0 items in list
*/
it.skip('should create 4 elements', () => {
  cy.get('#add-todo').type('Make dinner{enter}');
  cy.get('#add-todo').type('Eat Dinner{enter}');
  cy.get('#add-todo').type('Wash Dishes{enter}');
  cy.get('#add-todo').type('Watch Movie{enter}');

  cy.get('.todo').should('have.length', 4);
});

/*
  👦 challenge #2: test that toggle on todo item is checked,
  but use different method than in video. check documentation:
  https://docs.cypress.io/guides/references/assertions.html#State
  ⚠️ start this test with 1 unchecked item
*/
it('has a checked todo item', () => {
  cy.get('#add-todo').type('One task{enter}')
  cy.get('[type="checkbox"]').click();

  cy.get("[type='checkbox']").should('be.checked');
});

/*
  👨 challenge #3: test that todo does not exist after it is deleted.
  you will find the right assertion in the documentation
*/
it('should delete todo item and check it does not exist', () => {
  cy.get('li .destroy').click({force: true});

  cy.get('li').should('not.exist');
});

/*
  🤓 challenge #4: check that the footer link has the text "Evan You".
  You can either use .should() command, or .contains() command (you’ll
  find it in docs!)
*/
it('should check for text "Evan You"', () => {
  // cy.get('footer').should('contain', 'Evan You');
  cy.get('footer').contains('Evan You');
});

/*
  🦸‍♂️ challenge #5: check the color of heading. the color code is rgb(184, 63, 69)
*/
it('should check heading color', () => {
  cy.get('h1').should('have.css', 'color', 'rgb(184, 63, 69)');
});

/*
  💥 challenge #6: check that there are more than 4 elements on page (the assertion
  for "greater than" is "gte" or "least")
  ⚠️ start this test with at least 5 items in todo list
*/
it('should have more than 4 elements', () => {
  cy.get('#add-todo').type('Make dinner{enter}');
  cy.get('#add-todo').type('Eat Dinner{enter}');
  cy.get('#add-todo').type('Wash Dishes{enter}');
  cy.get('#add-todo').type('Watch Movie{enter}');
  cy.get('#add-todo').type('Read a book{enter}');

  cy.get('li').should('have.length.gte', 4);

});
