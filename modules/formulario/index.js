import { faker } from '@faker-js/faker';

class Formulario {
    preencherFormulario() {
            cy.get('#id_gender1').check();
            cy.get('[data-qa="name"').type(faker.person.fullName());
            cy.get('[data-qa="password"]').type(faker.internet.password());
            cy.get('[data-qa="days"]').select(faker.number.int({ min: 1, max: 28 }).toString());
            cy.get('[data-qa="months"]').select(faker.number.int({ min: 1, max: 12 }).toString());
            cy.get('[data-qa="years"]').select(faker.number.int({ min: 1900, max: 2023 }).toString());
            cy.get('#newsletter').check();
            cy.get('#optin').check();
            cy.get('[data-qa="first_name"]').type(faker.person.firstName());
            cy.get('[data-qa="last_name"]').type(faker.person.lastName());
            cy.get('input#company').type(faker.company.name());
            cy.get('input#address1').type(faker.location.streetAddress());
            cy.get('input#address2').type(faker.location.secondaryAddress());
            cy.get('select#country').select('Canada');
            cy.get('input#state').type(faker.location.state());
            cy.get('input#city').type(faker.location.city());
            cy.get('input#zipcode').type(faker.location.zipCode());
            cy.get('input#mobile_number').type(faker.phone.number('###########'));
            cy.contains ('button','Create Account').click();
    }
}

export default new Formulario();