import { fa, faker } from '@faker-js/faker';

class Formulario {
    preencherFormulario() {
        cy.get('a[href*=contact]').click();
        cy.get('[data-qa="name"]').type(faker.person.fullName());
        cy.get('[data-qa="email"]').type(faker.internet.email());
        cy.get('[data-qa="subject"]').type(faker.lorem.words(3));
        cy.get('[data-qa="message"]').type(faker.lorem.paragraph());
        cy.get('input[type=file]').selectFile('cypress/fixtures/screenshot_1.png');
        cy.get('[data-qa="submit-button"]').click();
    }   
}

export default new Formulario();