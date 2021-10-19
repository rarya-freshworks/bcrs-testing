import { loginFAS } from "../../../../pages/relationship/fas/addRouteSlip/loginFAS"
import { columnListSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/columnSearchList"
import { routineSlipSearch } from "../../../../pages/relationship/fas/searchRoutineSlips/searchSlips"

describe('test', function () 
{
    // FAS URL navigation
    it('Login using IDIR', function ()
    {
        loginFAS.visit(Cypress.env('fas-test'))
        loginFAS.testIdir1()
        loginFAS.SubmitButton()
        cy.wait(5000)
    })

    /*
    it('Search By Routine Slip Number', function()
    {
        routineSlipSearch.routineSlipNumber()
        cy.wait(5000)
        routineSlipSearch.clearFilter()
        cy.wait(3000)
    })
    */

    it('Search By Entity Number and Active Status', function()
    {
        columnListSearch.columnSelectDropDown()
        columnListSearch.selectEntityNumber()
        routineSlipSearch.entityNumber()
        routineSlipSearch.slipStatus()
        cy.wait(5000)
        routineSlipSearch.clearFilter()
        cy.wait(3000)
    })

    /*
    it('Search Multiple Filter', function()
    {
        columnListSearch.columnSelectDropDown()
        cy.wait(3000)
        routineSlipSearch.multipleFilterSearch()
        cy.wait(5000)
    })
    */

    // Add Open Routine Slip from search as a seperate Script
})