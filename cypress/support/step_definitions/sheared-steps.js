import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('llego a la página principal', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    cy.goToApplication();
});

When('busco un producto', () => {
    cy.get('.nav-search-input').type('iphone').should('have.value', 'iphone');
    cy.get('.nav-icon-search').click();
});

Then('aplico filtro de llega mañana', () => {
    cy.get('.box-header-results__wrapper a').click();
});

Then('se listan los resultados de la búsqueda y se ingresa al primero', () => {
    cy.get('#searchResults > li').should((li) => {
        expect(li).to.satisfy((li) => {
            return li.length > 1;
        }, 'No se encontraron elementos en la lista de resultados');
    });
    cy.get('#searchResults > li').first().find('a').contains('iPhone').click();
});

Then('se verifica título ranking y precio', () => {
    cy.get('.ui-pdp-container__top-wrapper h1').should('have.length', 1);
    cy.get('.ui-pdp-container__top-wrapper .ui-pdp-header__info a').should('have.length', 1);
    cy.get('.ui-pdp-container__col .ui-pdp-price .price-tag-fraction');
});

Then('se hace click en comprar y se redirige a página de confirmación', () => {
    cy.get('.ui-pdp-actions__container button').first().click({ force: true });
    cy.get('h2').invoke('text').should('contains', '¡Hola! Para comprar, ingresá a tu cuenta');
});


