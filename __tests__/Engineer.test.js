const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

test("Attaches GitHub Username to Engineer through constructor method", () => {
        const testGithub = "username@github.com";
        const emp = new Engineer("Daphne",1, testGithub);
        expect(emp.email).toBe(testGithub);
    });
    

//******************************************  These are the Engineer constructior methods   *******************************************/

test("getRole() should return \"Engineer\"", () => {
    const testEngineer = "Engineer";
    const emp = new Manager("Daphne", 1, "test@email.com", testEngineer);
    expect(emp.getRole()).toBe(testEngineer);
});

test("getGithub() should return Github", () => {
    const testGithub= "Github";
    const emp = new Engineer("Daphne", 1, "test@email.com", testGithub);
    expect(emp.getGithub()).toBe(testGithub);
});