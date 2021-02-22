const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


test("Attaches Office Number to manager through constructor argument", () => {
    const testOffice = 100;
    const emp = new Manager("Daphne", 1, "email@test.com", testOffice);
    expect(emp.officeNum).toBe(testOffice);
});

//****************************************   These are the Manager Constructor  Methods   ********************************************/

test("getRole() should return \"Manager\"", () => {
    const testManager = "Manager";
    const emp = new Manager("Daphne", 1, "test@email.com", 100);
    expect(emp.getRole()).toBe(testManager);
});

test("getOffice() should return Office Number", () => {
    const testOfficeNum = 100;
    const emp = new Manager("Daphne", 1, "test@email.com", testOfficeNum);
    expect(emp.getOfficeNum()).toBe(testOfficeNum);
});