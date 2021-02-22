const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test("Attaches Office Number to manager through constructor argument", () => {
    const testOffice = 100;
    const emp = new Manager("Daphne", 1, "email@test.com", testOffice);
    expect(emp.officeNum).toBe(testOffice);
});