describe('template spec', () => {
       
    it('action commands ', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ')
      // Username add 
      cy.get("input[placeholder='Username']").type('Admin')
       
      // Password Add
      cy.get("input[placeholder='Password']").type('admin123')
       
      // Submit Button
      //cy.get("button[type='submit']").click()
    })
  
  
  })