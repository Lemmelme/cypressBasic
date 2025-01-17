import main from '../pages/mainPage';


const pageTest = (): void => {
    it(`Should load main Page`, () => {
        main.load();
        cy.url().should('equal', main.baseURL);
        main.FindBtn.should('exist');
        main.ShopBtn.should('exist');
    });

    it(`Should click on 'Shop' button and verify that correct url is opened`, () => {
        //main.FindBtn.should('exist');
        main.ShopBtn.click();
        cy.url().should('equal', main.shopUrl)

    });
};

const searchForProducts_Negative= (lookup:string,message:string): void => {
    it(`use the filter in order to look for items `, () => {
        main.FilterInput.should('exist').focus().type(`${lookup}`);
        main.SubmitBtn.should('exist').click();
        main.ResultMessage.should('contain.text',`${message}`);
        main.ProductSection.should('not.exist');


    });
};



const searchForProducts_Positive= (lookup:string,message:string,productsAmount:number,i:number): void => {
    it(`use the filter in order to look for items and click on one of them `, () => {
        main.FilterInput.should('exist').focus().type(`${lookup}`);
        main.SubmitBtn.should('exist').click();
        main.ResultMessage.should('contain.text',`${message}`);
        main.ProductSection.should('exist').children().should('have.length',`${productsAmount}`);
        //cy.get('.ast-woocommerce-container> .products > .ast-article-post:nth-child(2)').click();
        main.ClickOnProduct(i).click();
        cy.url().should('contain',`${lookup}`.toLowerCase());
    });
};


const BarItemsTests =(menuItem:string):void=>{
    it('Click on a category in the Bar', () =>{
        main.load();
        cy.url().should('equal', main.baseURL);
        main.Bar.contains(menuItem).click()

    it('verify that correct items exist')
        main.ProductSection.should("exist").then(($childNum) => {
            const amount = $childNum.children().length;
            for (let i=1;i<amount;i++)
            {
                main.ShopSummary(i).should('exist').should('contain.text',menuItem);
            }
        })

    });

    }

export {BarItemsTests};
export { pageTest };
export {searchForProducts_Negative};
export {searchForProducts_Positive};

