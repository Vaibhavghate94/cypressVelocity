import Makeup from "./pagesObject/makeup"
import Login from "./pagesObject/login"

const makeup = new Makeup()
const login = new Login()

describe('make validations',()=>{
    it('few validation on make page',()=>{
        cy.visitApp()
        login.clickonLoginPage()
        login.userLogin('Velocity19augbatch', 'Velocity19')
        makeup.clickonMakeupTab()
        makeup.validateNumberofProducts()
        makeup.validateCategoryAvailable()
    })
})