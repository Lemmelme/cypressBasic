
import { pageTest } from '../../tests_modules/mainPage';
import {searchForProducts_Positive } from '../../tests_modules/mainPage';
import {searchForProducts_Negative} from '../../tests_modules/mainPage';




describe('End to End test -search for non-existing product', () => {
  before(() => {
    cy.viewport(1920, 1080);
  });

  beforeEach(()=>{
//pageTest();
    //cy.visit('https://atid.store/')
  });

  pageTest();
    searchForProducts_Negative('fff', 'No products were found matching your selection');
});

  describe('End to End test -search for existing product', () => {
    before(() => {
      cy.viewport(1920, 1080);
    });

    beforeEach(() => {
      //pageTest();
      //cy.visit('https://atid.store/')

    });
    pageTest();
    searchForProducts_Positive('Shoes', 'Showing all', 5, 3);
    //test that is going to fail:
    pageTest();
    searchForProducts_Positive('Hoodie', 'Showing all', 5, 1);


  });

