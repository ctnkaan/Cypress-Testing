/// <reference types="cypress" />

describe("Tests", () => {
    
    it("Site Loads Correctly", () => {
        cy.visit("https://freecodecamp.org");
    })

    it("Correct Page Title", () => {
        cy.contains("Learn to code — for free.")
        cy.contains("Build projects.")
        cy.contains("Earn certifications.")
    })

    it("Correct Body Exists", () => {
        cy.get("body[class=light-palette]").should("exist")
    })

    it("Iphone / Ipad View", () => {

        for (let i = 3; i < 9; i++) { //Check iphone 3 to iphone 8
            cy.viewport("iphone-"+i);
            cy.visit("https://freecodecamp.org");
        }

        cy.viewport("ipad-2");
        cy.visit("https://freecodecamp.org");
    })

    it("Android View", () => {
        cy.viewport("samsung-note9");
        cy.visit("https://freecodecamp.org");
        cy.viewport("samsung-s10");
        cy.visit("https://freecodecamp.org");
    })

})