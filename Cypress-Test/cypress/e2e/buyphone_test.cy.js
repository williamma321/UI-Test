
describe('Buy Phone from Google Store Test', function() {
	beforeEach(function() {
	 
	
// Setup the fixture files	
		cy.fixture('Shopitems').as('Shopitem')
		cy.fixture("PageObject.json").as("ShopPageObject")
		
	})		


	
  it('Setup Google Store Shopping Cart', function() {
	
	// Setup the environment variables  	
	 const wait1K = Cypress.env('Page_Shorter_Wait')
	 const wait3K = Cypress.env('Page_Short_Wait')
	 const wait5K = Cypress.env('Page_Med_Wait')
	 const wait10K = Cypress.env('Page_Long_Wait')
	 const testSite = Cypress.env('TestURL')

	 
    cy.visit(testSite);
	
	cy.wait(wait1K);
	
	cy.get(this.ShopPageObject.SearchIconBt).click();

	cy.get(this.ShopPageObject.SearchItemEditor_Box).clear();
	 
	cy.get(this.ShopPageObject.SearchItemEditor_Box).type(this.Shopitem.name+"{ENTER}",{force:true});
	
	cy.wait(wait3K);
	
    cy.get(this.ShopPageObject.SearchItemResult_Container).click();
	
    cy.wait(wait3K);

	cy.get(this.ShopPageObject.Buy_Now);
	
	cy.wait(wait1K);
	
	cy.get(this.ShopPageObject.Buy_Now).click();
	
	cy.wait(wait3K);

	cy.get(this.ShopPageObject.Service_Select_Color).click();

	cy.wait(wait3K);

	cy.get(this.ShopPageObject.Service_Select_Model).click();
	
	cy.get(this.ShopPageObject.Service_Skip_TradeIn).click();

	cy.get(this.ShopPageObject.Service_Skip_Protect).click();

	cy.wait(wait1K);

	cy.get(this.ShopPageObject.Add_ToCart).click();

	cy.wait(wait3K);

	cy.get(this.ShopPageObject.GoToCart).click();

	//cy.get('[jsaction="JIbuQc:qh2pI; click:qh2pI"] > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click();
	

  })

})

