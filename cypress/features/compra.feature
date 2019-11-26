Feature: Compra  
    Pruebas de búsqueda, selección y compra
    Scenario: Se ingresa producto en caja de búsqueda y continúa hasta finalizar
        Given llego a la página principal
        When busco un producto
        Then aplico filtro de llega mañana
        Then se listan los resultados de la búsqueda y se ingresa al primero
        Then se verifica título ranking y precio
        Then se hace click en comprar y se redirige a página de confirmación