describe("First Page", () => {
  it("should play and pause the video correctly.", () => {
    cy.visit("/");
    cy.get("video").should("exist").as("videoPlayer");
    cy.get("@videoPlayer").invoke("prop", "paused").should("be.false");

    cy.wait(5000);

    cy.get('button[id="play-btn"]').should("exist").click();
    cy.get("@videoPlayer").invoke("prop", "paused").should("be.true");
  });

  it("should navigate to the Hospitals page.", () => {
    cy.visit("/");
    cy.get("button")
      .contains("Select Hospital For Vaccine Booking Now")
      .click();
    cy.url().should("equal", "http://localhost:3000/hospital");

    cy.wait(7000);
    cy.get("img").should("have.length.at.least", 3);
  });
});
