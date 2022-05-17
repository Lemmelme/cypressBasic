
export default class BasePage {
  baseURL: string;
  shopBtn: string;
  findBtn: string;
  bar:string;


  constructor(url: string) {
    this.baseURL = `${url}`;
    this.shopBtn = '.elementor-element-78ab79a > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link';
    this.findBtn = '.elementor-element-a3546f3 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button-link';
    this.bar ='.main-header-menu> .menu-item> .menu-link';
  }

   get ShopBtn(){
    return cy.get(this.shopBtn)
  }

  get FindBtn(){
    return cy.get(this.findBtn)
  }
  get Bar(){
    return cy.get(this.bar)
  }





  load(path: string = ''): void {
    cy.visit(`${this.baseURL}/${path}`);
  }


}
