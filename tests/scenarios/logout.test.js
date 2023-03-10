import * as route from '@helpers/route.js';
import * as elements from '@helpers/elements.js';
import * as asserts from '@helpers/asserts.js';
import {ROUTES} from '@tests/consts/routes.js';
import * as logindata from '@tests/data/login.data.js';
import * as login from '@pages/login.page.js';
import * as logout from '@pages/logout.page.js';


describe('Login Positive Case', () => {
    
    beforeEach(() => {
        route.visit(ROUTES.login);
    });
    
    it('Should succes login with username data valid "standard_user"', () => {
        // Login
        elements.fillField(login.usernameField, logindata.VALID_LOGIN.username);
        elements.fillField(login.passwordField, logindata.VALID_LOGIN.password);
        elements.click(login.loginButton);
        asserts.shouldContainText(login.title, "Products");

        // Logout
        elements.click(logout.nbrButton)
        elements.click(logout.logoutButton)
    });
})