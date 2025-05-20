describe('Pruebas del login', () => {
  beforeEach(() => {
    cy.visit("/loginPage.html");
    //Configuré como baseUrl http://localhost:3000/
  });
  it("El sitio carga correctamente", () => {
    cy.get('#prompt-logo-center').should('be.visible');
    cy.get('label[for="username"]').should('be.visible');
    cy.get('#username').should('be.visible');
    cy.get('label[for="password"]').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('button[data-action-button-primary="true"]').should('be.visible');
  })

  it("Verifico que los campos Usuario y Constraseña sean requeridos", () => {
      cy.get('#username').should('have.attr', 'required');
      cy.get('#password').should('have.attr', 'required');
  })

  it("Ingreso al sitio con un usuario y contraseña válidos", () => {
    cy.get('#username').type('abbaco@gmail.com');
    cy.get('#password').type('Mercap1234');
    cy.get('button[data-action-button-primary="true"]').click();
    //Debería hacer una aserción que cargó la página de inicio
  })

  it("Ingreso al sitio con un usuario y contraseña inválidos", () => {
    cy.get('#username').type('abb@gmail.com');
    cy.get('#password').type('1234');
    cy.get('button[data-action-button-primary="true"]').click();
    //Debería hacer una aserción de que se muestra un mensaje de error
  })

  /*
  Podía hacer pruebas de la redirección al registro o del botón
  de mostrar contraseña, pero como no andaban no le veo mucho sentido
  */

})
