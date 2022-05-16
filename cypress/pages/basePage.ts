
export default class BasePage {
  baseURL: string;
  shopBtn: string;
  findBtn: string;


  constructor(url: string) {
    this.baseURL = `${url}`;
    this.shopBtn = '.elementor-element-78ab79a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link';
    this.findBtn = '.elementor-element-a3546f3 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link';
  }

   get ShopBtn(){
    return cy.get(this.shopBtn)
  }

  get FindBtn(){
    return cy.get(this.findBtn)
  }




  load(path: string = ''): void {
    cy.visit(`${this.baseURL}/${path}`);
  }


}
