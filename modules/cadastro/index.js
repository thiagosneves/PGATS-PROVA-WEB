import { faker } from '@faker-js/faker';

class Cadastro {
    preencherCadastro() {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="signup-name"]').type(faker.person.firstName());
        cy.get('[data-qa="signup-email"]').type(faker.internet.email());
        cy.get('button[data-qa="signup-button"]').click();
    }
    preencherCadastroComEmailExistente() {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="signup-name"]').type(faker.person.firstName());
        cy.get('[data-qa="signup-email"]').type('thiago01@test.com.br');
        cy.get('button[data-qa="signup-button"]').click();
    }
}
export default new Cadastro();