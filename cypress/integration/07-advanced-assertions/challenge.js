/// <reference types="cypress" />

/*
  ⚠️ remember you can run single test by using it.only
  📚 I encourage you to use cypress documentation, especially https://on.cypress.io/assertions
*/

beforeEach( () => {

  cy
    .visit('localhost:3000');

});

/*
  👶 challenge #1: check the text using .then() command
*/
it('Checks a text todo item', () => {
  cy.get('#add-todo').type('bake a cake{enter}');

  cy
    .get('.todo')
    .then(todos => {
      expect(todos[0]).to.contain.text('bake a cake')
    })

});

/*
  👦 challenge #2: check the whole todo list using .then() command
  ⚠️ make sure you have some todo items in the list before you start this test
*/
it('Checks a texts of all todo items', () => {
  cy.get('#add-todo').type('clean the house{enter}');
  cy.get('#add-todo').type('take out trash{enter}');

  cy
    .get('.todo')
    .then(list => {
      expect(list[0]).to.contain.text('bake a cake');
      expect(list[1]).to.contain.text('clean the house');
      expect(list[2]).to.contain.text('take out trash');
    })

});

/*
  👨 challenge #3: check texts of only first and last todo item using .then()
  command. try to use only a single .then() command if you can
  ⚠️ make sure you have some todo items in the list before you start this test
*/
it('Checks a texts of first and last todo items', () => {

  cy
    .get('.todo')
    .then(todos => {
      expect(todos[0]).to.contain.text('bake a cake');
      expect(todos[2]).to.contain.text('take out trash');
    })

});

/*
   🤓 challenge #4: examine the example from video. try to look more
   into why the test is failing and what can we do to make it pass
   ⚠️ make sure you have a todo item with the text "wash dishes" but
   it is not in the first position
*/
it('Has first todo item with text "clean the house"', () => {

  cy
    .get('.todo')
    .should('have.length', 2)
    .eq(0)
    .should('contain.text', 'clean the house');

});

/*
  🦸‍♂️ challenge #5: check texts of two items in todo list. start test
  with no todos in list and add them while test is running. use this
  test to examine how using .should() command works when using function
*/
it.only('Have two todo items with particular texts', () => {

  cy
    .get('.todo', {timeout: 30000})
    .should( items => {

      // check item 1
      expect(items[0]).to.contain.text('1');
      expect(items[1]).to.contain.text('2');
      // check item 2

    });

});
