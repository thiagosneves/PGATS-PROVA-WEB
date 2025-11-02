import { faker } from '@faker-js/faker'
import cadastro from '../../modules/cadastro'
import login from '../../modules/login'
import formulario from '../../modules/formulario'
import contato from '../../modules/contato'
import produtos from '../../modules/produto'
import produto from '../../modules/produto'
import homepage from '../../modules/homepage'
import carrinho from '../../modules/carrinho'

describe('Prova PGATS-AUT-WEB', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });

    it('Exercicio 01 - Cadastrar usuário', () => {
        cadastro.preencherCadastro();
        formulario.preencherFormulario();  
        cy.contains('Account Created!').should('be.visible');
    });

    it('Exercicio 02 -  Login do usuário com e-mail e senha corretos', () => {
        login.loginValido();
        cy.contains('Logout').should('be.visible');
    });

    it('Exercicio 03 - Login do usuário com e-mail e senha incorretos', () => {
        login.loginInvalido();
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });

    it('Exercicio 04 - Fazer logout do usuário', () => {
        login.loginValido();
        login.logout();
        cy.contains('Login to your account').should('be.visible');
    });

    it('Exercicio 05 - Cadastrar usuário com e-mail existente', () => {
        cadastro.preencherCadastroComEmailExistente();
        cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!');
    });

    it('Exercicio 06 - Formulário de contato', () => {
        contato.preencherFormulario();
        cy.get('.status').should('be.visible');
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
    });

    it('Exercicio 08 - Verificar todos os produtos e a página de detalhes do produto', () => {
        produtos.verificarProdutosEDetalhes();
        cy.contains('h2','Blue Top').should('be.visible');
        cy.contains('p','Category: Women > Tops').should('be.visible');
        cy.contains('span','Rs. 500').should('be.visible');
        cy.contains('b','Availability').should('be.visible');
        cy.contains('b','Condition').should('be.visible');
        cy.contains('b','Brand').should('be.visible');

    });

    it('Exercicio 09 - Pesquisar produto', () => {
        produto.pesquisarProduto();
        cy.get('.features_items').should('be.visible');
        cy.get('.productinfo').first().should('contain', 'Winter Top');
    });

    it('Exercicio 10 - Verificar assinatura na página inicial', () => {
        homepage.verificarAssinatura();
        cy.get('.alert-success').should('be.visible');
    });

    it('Exercicio 15 - Fazer pedido: Registre-se antes de finalizar a compra', () => {
        cadastro.preencherCadastro();
        formulario.preencherFormulario();
        produto.verificarProdutosEDetalhes();
        carrinho.adicionarProdutoAoCarrinho();
        carrinho.pagamentoEConfirmacao();
        cy.contains('p','Congratulations! Your order has been confirmed!').should('be.visible');
    });
});