const Employee = require('../lib/Employee');

test("Creates an instance of Employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test("Employee name can be logged using constructor", () => {
    const name = "Joyce";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Employee id can be logged", () => {
    const testId = 100;
    const emp = new Employee("Daphne", testId);
    expect(emp.id).toBe(testId);
});

test("Employee email can be logged", () => {
    const testEmail = "email@test.com";
    const emp = new Employee("Daphne",1, testEmail);
    expect(emp.email).toBe(testEmail);
});


//******************************************* These are the Employee constructor methods *********************************************//


test("Employee constructor should return getName()", () => {
    const testName = "Marie";
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
});

test("Employee constructor should return getId()", () => {
    const testId = "100";
    const emp = new Employee("Daphne", testId);
    expect(emp.getId()).toBe(testId);
});

test("Employee constructor should return getEmail()", () => {
    const testEmail = "test@email.com";
    const emp = new Employee("Daphne", 1, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
});

