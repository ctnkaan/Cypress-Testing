/// <reference types="cypress" />



describe('Testing side bar elements',() => {

    it('Checking if side bar is visible',() =>{

        cy.visit('https://www.chess.com/');
        cy.get('#sb').should('exist').should('be.visible');
    })

    it('Testing main page link from chess logo',() =>{


        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.chess-logo-wrapper.sprite.chess-logo')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/');

        
    })
    it('Testing play link',() =>{

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.play-top')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/play');

        
    })
    it('Testing puzzles link',() =>{

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.puzzles-top')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/puzzles');
    })
    
    it('Testing learn link',() =>{

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.learn-top')
        .should('exist').should('be.visible').click();

        cy.get('body > div.base-layout > div.base-sidebar > div.modal-first-time-component > div.ui_modal-component > div > div > div.modal-first-time-body > div > button').click();
        cy.url().should('eq','https://www.chess.com/lessons');
    })
    it('Testing today link',() =>{

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.today-top')
        .should('exist').click();
        
        cy.url().should('eq','https://www.chess.com/today');
    })
    
    it('Testing connect link',() =>{

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.connect-top')
        .should('exist').should('be.visible').click();

        cy.url().should('eq','https://www.chess.com/forum');
    })
    it('Testing more link',() =>{

        cy.get('#sb > div:nth-child(2) > a.nav-link-component.nav-link-main-link.nav-link-top-level.sprite.more-top')
        .should('exist').should('be.visible');

    })
    it('Testing sign up link',() =>{

        cy.get('#menu-cta')
        .should('exist').should('be.visible').click();

        cy.url().should('include','/register');
     
    })
    it('Testing log in link',() =>{
        
        cy.visit('https://www.chess.com/');
        cy.get('#sb > div:nth-child(2) > a.button.auth.login')
        .should('exist').should('be.visible').click();

        cy.url().should('include','/login_and_go');
     
    })
    it('Testing search div',() =>{
        
        cy.visit('https://www.chess.com/');
        cy.get('#sb > div.nav-menu-area > a.nav-action.nav-search > div.nav-toggle-search-box')
        .should('exist').should('be.visible').click();
        
        cy.get('#sb > div.nav-menu-area > a.nav-action.nav-search > div.nav-popover.nav-search.open > form > input[type=text]')
        .should('exist').should('be.visible').type('Test input {enter}');
        cy.url().should('eq','https://www.chess.com/topic/Test%20input?search=1');
     
    })
    it('Testing help link',() =>{
        
        cy.visit('https://www.chess.com/');
        cy.get('#sb > div.nav-menu-area > a.nav-action.has-popover.help')
        .should('exist').should('be.visible');
     
    })
    

    
    


})