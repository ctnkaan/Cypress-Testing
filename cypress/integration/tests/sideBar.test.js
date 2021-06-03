
define('Testing side bar elements',function(){

    it('Checking if side bar is visible',function(){

        cy.visit('https://www.chess.com/');
        cy.get('#sb').should('exist').should('be.visible');
    })

    it('Testing main page link from chess logo',function(){


        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.chess-logo-wrapper.sprite.chess-logo')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/');

        
    })
    it('Testing play link',function(){

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.play-top')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/play');

        
    })
    it('Testing puzzles link',function(){

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.puzzles-top')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/puzzles');
    })
    
    it('Testing learn link',function(){

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.learn-top')
        .should('exist').should('be.visible').click();

        cy.get('body > div.base-layout > div.base-sidebar > div.modal-first-time-component > div.ui_modal-component > div > div > div.modal-first-time-body > div > button').click();
        cy.url().should('eq','https://www.chess.com/lessons');
    })
    it('Testing today link',function(){

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.today-top')
        .should('exist').click();
        
        cy.url().should('eq','https://www.chess.com/today');
    })
    
    it('Testing connect link',function(){

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.connect-top')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/forum');
    })
    it('Testing more link',function(){

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.more-top')
        .should('exist').should('be.visible');

    })
    it('Testing sign up link',function(){

        cy.get('#menu-cta')
        .should('exist').should('be.visible').click();

        cy.url().should('include','/register');
     
    })
    it('Testing log in link',function(){
        
        cy.visit('https://www.chess.com/');
        cy.get('#sb > div:nth-child(2) > a.button.auth.login')
        .should('exist').should('be.visible').click();

        cy.url().should('include','/login_and_go');
     
    })
    it('Testing search div',function(){
        
        cy.visit('https://www.chess.com/');
        cy.get('#sb > div.nav-menu-area > a.nav-action.nav-search > div.nav-toggle-search-box')
        .should('exist').should('be.visible').click();
        
        cy.get('#sb > div.nav-menu-area > a.nav-action.nav-search > div.nav-popover.nav-search.open > form > input[type=text]')
        .should('exist').should('be.visible').type('Test input {enter}');
        cy.url().should('eq','https://www.chess.com/topic/Test%20input?search=1');
     
    })
    it('Testing help link',function(){
        
        cy.visit('https://www.chess.com/');
        cy.get('#sb > div.nav-menu-area > a.nav-action.has-popover.help')
        .should('exist').should('be.visible');
     
    })
    

    
    


})