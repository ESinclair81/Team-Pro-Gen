const Intern = require("../lib/Intern");
const Employee = require('../lib/Employee');

test("Attaches school to Intern through constructor method", () => {
        const testSchool = "PHS";
        const emp = new Intern("Kojo",1, "email@test.com", testSchool);
        expect (emp.school).toBe(testSchool);
    });


//********************************************  These are the Intern constructior methods   *******************************************/

test("getRole() should return \"Intern\"", () => {
    const testIntern = "Intern";
    const emp = new Manager("Daphne", 1, "test@email.com", 100);
    expect(emp.getRole()).toBe(testIntern);
});

test("getSchool() should return School", () => {
    const testSchool= "PHS";
    const emp = new Engineer("Daphne", 1, "test@email.com", testSchool);
    expect(emp.getSchool()).toBe(testSchool);
});
