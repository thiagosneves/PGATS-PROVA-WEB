class homepage {
    verificarAssinatura() {
        cy.scrollTo('bottom', { duration: 2000 });
        cy.get('.single-widget').contains('h2', 'Subscription').should('be.visible');
        cy.get('#susbscribe_email').type('thiago@crm.com');
        cy.get('#subscribe').click();
    }
}
export default new homepage();