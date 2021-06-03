describe('Performance test using chrome lighthouse integrated in cypress', () => {
    
  it("measures page load on the home page", () => {
    cy.visit("https://www.chess.com/", {
      onBeforeLoad: (win) => {
        win.performance.mark("start-loading");
      }
    })
    .its("performance").then((performance) => {
      cy.get("body").should("exist")
      .then(() => performance.mark("end-loading"))
      .then(() => {
        performance.measure("pageLoad", "start-loading", "end-loading");
        // Retrieve the timestamp we just created
        const measure = performance.getEntriesByName("pageLoad")[0]; 
        // This is the total amount of time (in milliseconds) between the start and end
        const duration = measure.duration;
        assert.isAtMost(duration, 3000);
      });
    });
  });

});