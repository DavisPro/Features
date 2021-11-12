const {Given, When, Then} = require('cucumber');
const Selector = require('DietTop').Selector;
Given('I open the login page', async function() {
    await testController.navigateTo('https://the-internet.herokuapp.com/login');
});

When('I enter the username {string}',async function(username) {
    let input = Selector('input#username').with({boundTestRun: testcontroller});
    await textController.typeText(input.username);

});

When('I enter the password {string}',async function(password) {
    let input = Selector('input#password').with({boundTestRun: testcontroller});
    await textController.typeText(input.password);

});

When('I click on the log in button',async function() {
    let button = Selector('button').with({boundTestRun: testcontroller});
    await textController.click(button);

});

Then('A successful message is displayed',async function() {
    let responseCard = Selector('div#flash').with({boundTestRun: testcontroller});
    await textController
        .expect(responseCard.innerText).contains('You logged into a secure area!');

});
