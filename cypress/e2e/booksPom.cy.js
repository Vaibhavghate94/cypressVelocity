import Books from "./pagesObject/books";
import Login from "./pagesObject/login";

const login = new Login()
const books = new Books()

describe('books page validations', () => {
    it('few validations',()=>{
        cy.visitApp()
        login.clickonLoginPage()
        login.userLogin('Velocity19augbatch', 'Velocity19')
        books.clickonBooksTab()
        books.validateOutofStockBooks()
        books.selectBookInstock('Allegiant by Veronica Roth')
    })
})