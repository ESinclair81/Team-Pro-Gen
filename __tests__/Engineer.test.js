const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');

test("Attaches GitHub Username to Engineer through constructor method", () => {
        const testGithub = "username@github.com";
        const emp = new Engineer("Daphne",1, testGithub);
        expect(emp.email).toBe(testGithub);
    });
    