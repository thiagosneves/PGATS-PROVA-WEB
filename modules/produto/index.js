class Produtos {
    verificarProdutosEDetalhes() {
        cy.get('a[href="/products"]').click();
        cy.get('.features_items').should('be.visible');
        cy.get('a[href="/product_details/1"]').click();
    }
    pesquisarProduto() {
        cy.get('a[href="/products"]').click();
        cy.get('.features_items').should('be.visible');
        cy.get('#search_product').type('Winter Top');
        cy.get('#submit_search').click();
    }
}
export default new Produtos();