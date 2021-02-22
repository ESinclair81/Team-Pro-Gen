const Employee = require("../lib/Employee");

class Intern {
    constructor(name, id, email, school) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.school = school;
  //   console.log(name);
}

getRole() {
    return "Intern";
}

getSchool () {
    return this.school;

}
};

module.exports = Intern;