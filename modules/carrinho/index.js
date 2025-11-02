import { fa, faker } from '@faker-js/faker';

class Carrinho {
    adicionarProdutoAoCarrinho() {
        cy.contains('button', 'Add to cart').click();
        cy.contains('a', 'View Cart').click();
        cy.contains('a','Proceed To Checkout').click();
        cy.get('textarea.form-control').type(faker.lorem.sentence());
        cy.contains('a', 'Place Order').click();
    }
    pagamentoEConfirmacao() {
        cy.get('[data-qa="name-on-card"]').type(faker.person.fullName());
        cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
        cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
        cy.get('[data-qa="expiry-month"]').type(faker.number.int({ min: 1, max: 12 }));
        cy.get('[data-qa="expiry-year"]').type(faker.number.int({ min: 2024, max: 2030 }));
        cy.get('[data-qa="pay-button"]').click();
    }
}

export default new Carrinho();