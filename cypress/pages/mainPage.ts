import basePage from './basePage';

class MainPage extends basePage {

    filerInput1: string;
    submitBtn1: string;
    resultMessage1: string;
    shopUrl: string;
    productSection: string;
    productTitle: string;
    shopSummary: string


    constructor() {
        super('https://atid.store/');
        this.filerInput1 = '#wc-block-search__input-1';
        this.submitBtn1 = '.wc-block-product-search__fields> .wc-block-product-search__button';
        this.resultMessage1 = '.ast-woocommerce-container';
        this.shopUrl = 'https://atid.store/store/'
        this.productSection = '.ast-woocommerce-container> .products';
        this.productTitle = '.product_title';
        this.shopSummary = 'astra-shop-summary-wrap> .ast-woo-product-category';



    }

    get FilterInput() {
        return cy.get(this.filerInput1)
    }

    get SubmitBtn() {
        return cy.get(this.submitBtn1)
    }

    get ResultMessage() {
        return cy.get(this.resultMessage1)
    }

    get ShopUrl() {
        return cy.get(this.shopUrl)
    }

    get ProductSection() {
        return cy.get(this.productSection)
    }

    ShopSummary(i:number) {
        return cy.get('.ast-woocommerce-container> .products >:nth-child('+i+') > .astra-shop-summary-wrap> .ast-woo-product-category');

    }

    ClickOnProduct(i: number) {
     return cy.get('.ast-woocommerce-container> .products > .ast-article-post:nth-child(' + i + ')');

    }




}

const mainPage = new MainPage();
export default mainPage;