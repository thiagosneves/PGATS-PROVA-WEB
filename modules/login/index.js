class Login {
    loginValido () {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="login-email"]').type('thiago01@test.com.br');
        cy.get('[data-qa="login-password"]').type('123mudar', { log: false });
        cy.get('button[data-qa="login-button"]').click();    
    }
    loginInvalido () {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="login-email"]').type('thiagos@t1este.com');
        cy.get('[data-qa="login-password"]').type('teste123', { log: false });
        cy.get('button[data-qa="login-button"]').click();    
    }
    logout () {
        cy.get('a[href="/logout"]').click();
    }
}

export default new Login ();