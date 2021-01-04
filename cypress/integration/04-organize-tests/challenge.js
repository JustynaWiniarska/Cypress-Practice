/*

  💪 organizing tests challenge:

  create following test structure yourself
  give describe() and it() blocks names and run them in cypress to explore how they work

  describe()
    beforeEach()
    it()

*/

/// <reference types="cypress">

describe('First Group of Tests', () => {

  beforeEach(() => {
    cy.visit('localhost:3000');
  })

  it('Test One', () => {
    cy.types
  });

  it('Test Two', () => {

  })
});
