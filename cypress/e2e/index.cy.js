describe("AZ-900 Homepage", function () {
    beforeEach(function () {
        cy.visit("/index.html");
    });
    it("Visits the Homepage", () => {
        //Body Links and Content
        context("Testing the Body Verification Link", function () {
            cy.get('[data-cy="body-verification-link"]').should("be.visible");
            cy.get('[data-cy="body-verification-link"]').should("have.attr", "href", "https://learn.microsoft.com/api/credentials/share/en-us/tylermneher/355C229077997DA?sharingId=E8796AF58924CF52");
            cy.get('[data-cy="body-verification-link"]').should("have.text", "Microsoft\n        AZ-900 Certification");
        });
        context("Testing the Body Credential ID", function () {
            cy.get('[data-cy="body-credentialid"]').should("be.visible");
            cy.get('[data-cy="body-credentialid"]').should("have.text", "• Credential ID #: 355C229077997DA");
        });
        context("Testing the Body Certification #", function () {
            cy.get('[data-cy="body-certificationno"]').should("be.visible");
            cy.get('[data-cy="body-certificationno"]').should("have.text", "• Certification #: 4E5105-B40C8D");
        });
        context("Testing the Footer Earned On", function () {
            cy.get('[data-cy="body-earnedon"]').should("be.visible");
            cy.get('[data-cy="body-earnedon"]').should("have.text", "• Earned on: September 2, 2022");
        });

        // Footer Links
        context("Testing the Footer Microsoft TOS Link", function () {
            cy.get('[data-cy="footer-microsofttos"]').should("be.visible");
            cy.get('[data-cy="footer-microsofttos"]').should("have.attr", "href", "https://learn.microsoft.com/en-us/legal/termsofuse");
            cy.get('[data-cy="footer-microsofttos"]').should("have.text", "Microsoft");
        });
        context("Testing the Footer Microsoft TOS Link", function () {
            cy.get('[data-cy="footer-tylermneher"]').should("be.visible");
            cy.get('[data-cy="footer-tylermneher"]').should("have.attr", "href", "https://www.tylermneher.me");
            cy.get('[data-cy="footer-tylermneher"]').should("have.text", "Tyler M. Neher");
        });
    });
});
