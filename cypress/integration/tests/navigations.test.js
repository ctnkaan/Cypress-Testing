/// <reference types="cypress" />


describe('Test main navigations',() => {
    it('Test /today',() => {
        cy.visit('https://www.chess.com/tr/today');
        cy.title().should('eq','Satrançta Bugün - Haberler, Etkinlikler, Günlük Satranç Bulmacası - Chess.com');
    })
    it('Test /play',() => {
        cy.visit('https://www.chess.com/tr/play');
        cy.title().should('eq','Çevrimiçi Satranç Oyna - Chess.com');
    })
    it('Test /puzzles',() => {
        cy.visit('https://www.chess.com/tr/puzzles');
        cy.title().should('eq','Satranç Bulmacaları - Taktik Bulmacalar Çözerek Satrancınızı Geliştirin - Chess.com');
    })
    it('Test /lessons',() => {
        cy.visit('https://www.chess.com/tr/lessons');
        cy.title().should('eq','Satranç Dersleri - Çevrimiçi Kurslarla Öğrenin - Chess.com');
    })
    it('Test /forum',() => {
        cy.visit('https://www.chess.com/tr/forum');
        cy.title().should('eq','Satranç Forumları - Chess.com');
    })
})