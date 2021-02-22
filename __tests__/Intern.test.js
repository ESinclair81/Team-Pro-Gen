const Intern = require("../lib/Intern");
const Employee = require('../lib/Employee');

test("Attaches school to Intern through constructor method", () => {
        const testSchool = "PHS";
        const emp = new Intern("Kojo",1, "email@test.com", testSchool);
        expect (emp.school).toBe(testSchool);
    });
