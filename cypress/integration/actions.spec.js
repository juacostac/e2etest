/// <reference types="Cypress" />
context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.mercadolibre.com.ar/')
  })

  it('Buscar iphone', () => {
    //cargar caja de busqueda y hacer click
    cy.get('.nav-search-input').type('iphone').should('have.value', 'iphone');
    cy.get('.nav-icon-search').click();

    //hago click en llega mañana
    cy.get('.box-header-results__wrapper a').click();

    //verifico resultados
    cy.get('#searchResults > li').should((li) => {
      expect(li).to.satisfy((li) => {
        return li.length > 1;
      }, 'No se encontraron elementos en la lista de resultados');
    });
  
    //abrir primer resultado
    cy.get('#searchResults > li').first().find('a').contains('iPhone').click();

    //Verifico titulo
    cy.get('.ui-pdp-container__top-wrapper h1').should('have.length', 1);
    //Verifico ranking de estrellas
    cy.get('.ui-pdp-container__top-wrapper .ui-pdp-header__info a').should('have.length', 1);
    //Verifico precio
    cy.get('.ui-pdp-container__col .ui-pdp-price .price-tag-fraction');

    //Agregar al carrito
    cy.get('.ui-pdp-actions__container button').first().click({force: true});

    //verificar redireccion
    cy.get('h2').invoke('text').should('contains','¡Hola! Para comprar, ingresá a tu cuenta');

    //manejo de errores
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  });
});