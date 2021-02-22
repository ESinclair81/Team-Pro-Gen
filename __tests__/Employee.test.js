const Employee = require('../lib/Employee');

test("Creates an instance of Employee", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("empObject");
});

test("Employee name can be set using constructor", () => {
    const name = "Joyce";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});