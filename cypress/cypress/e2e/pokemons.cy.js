describe('Покупка нового аватара', function () {

    it('e2e тест на покупку нового аватара', function () {
        cy.visit('https://pokemonbattle.ru/login');
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');
        cy.get('#password').type('USER_PASSWORD');
        cy.get('.auth__button').click();

        cy.get('.header__btns > :nth-child(4)').click();
        cy.get('.available > button').first().click();

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225')
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME'); 

        cy.wait(2000);

        cy.get('.pay-btn').click();

        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();


        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
        cy.get('.payment__font-for-success').should('be.visible');
        cy.get('.success__image').should('be.visible');
     })
 })
 