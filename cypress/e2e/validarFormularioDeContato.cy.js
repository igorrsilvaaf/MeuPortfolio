describe('Formulario', () => {
   it('Formulario enviado com sucesso', () => {
      cy.visit('/')
      cy.viewport('macbook-15')

      cy.wait(1300)
      cy.get(".control[data-id='contact']")
      .click()

      cy.wait(2000)
      cy.get('input[name="Nome"]', {timeout: 4000})
      .type('Igor da Silva')

      cy.get('input[name="Email"]')
      .type('igorrsilvaa920@gmail.com')

      cy.get('input[name="Assunto"]')
      .type('Teste com cypress')

      cy.get('[placeholder="MENSAGEM ..."]')
      .type('Realizando teste com o cypress, validando o form');

      cy.get('.btn-new')
      .click()
      
   });
});