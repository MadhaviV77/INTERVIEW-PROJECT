
describe('test scenario', () => {

  beforeEach(() => {
    cy.fixture('language').as('language');
  });

  it('validate javascript ', function() {
    this.language.forEach( ({langauge, count}) => {
    cy.visit(Cypress.env("baseUrl"));
    cy.validateBookCount(langauge,count);
    })
  });
  
})