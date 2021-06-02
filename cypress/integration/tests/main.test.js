/// <reference types="cypress" />
require('dotenv').config()
let password = Cypress.env("PASSWORD");


describe("Tests", () => {
    
    it("Site Loads Correctly", () => {
        cy.visit("https://www.chess.com");
    })

    it("Correct Page Title", () => {
        cy.contains("Play Chess");
        cy.contains("for Free");
        cy.contains("on the #1 Site!");
    })

    it("Correct Body Exists", () => {
        cy.get("div[class=base-layout]").should("exist");
    })

    it("Iphone / Ipad View", () => {

        for (let i = 3; i < 9; i++) { //Check iphone 3 to iphone 8
            cy.viewport("iphone-"+i);
            cy.visit("https://www.chess.com");
            cy.get("div[class=base-layout]").should("exist");
        }

        cy.viewport("ipad-2");
        cy.visit("https://www.chess.com");
        cy.get("div[class=base-layout]").should("exist");
    })

    it("Android View", () => {
        cy.viewport("samsung-note9");
        cy.visit("https://www.chess.com");
        cy.get("div[class=base-layout]").should("exist");
        cy.viewport("samsung-s10");
        cy.visit("https://www.chess.com");
        cy.get("div[class=base-layout]").should("exist");
    }) 

    it("Playtest vs CPU", () => {
        cy.viewport(1280,720);
        cy.visit("https://www.chess.com");

        cy.contains("Play Computer").click();
        
        cy.contains("Choose").click();

        cy.get("div[class=selection-menu-footer]").click();

        cy.get(".piece.wp.square-12").click();
        cy.get(".piece.wp.square-22").click();
        cy.get(".piece.wp.square-32").click();
        cy.get(".piece.wp.square-42").click();
        cy.get(".piece.wp.square-52").click();
        cy.get(".piece.wp.square-62").click();
        cy.get(".piece.wp.square-72").click();
        cy.get(".piece.wp.square-82").click();
        cy.get(".icon-font-chess.flag").click();

    })

    it("User Incorrect Login", () => {
        cy.visit("https://www.chess.com");
        cy.contains("Play Online").click();

        cy.contains("Giriş").click();

        cy.get("input[id=username]").type("cypressctn");
        cy.get("input[id=password]").type("adasdasdsa");

        cy.contains("Log In").click();
    })

    it("User Login", () => {
        cy.visit("https://www.chess.com");
        cy.contains("Play Online").click();

        cy.contains("Giriş").click();

        cy.get("input[id=username]").type("cypressctn");
        cy.get("input[id=password]").type(String(password));

        cy.contains("Log In").click();
        cy.visit("https://www.chess.com");
    })

})