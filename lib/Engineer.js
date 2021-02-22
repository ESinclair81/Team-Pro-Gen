const Employee = require("../lib/Employee");

class Engineer {
    constructor(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
  //   console.log(name);
}

getRole() {
    return "Engineer";
}

getGithub() {
    return this.github;
}

};

module.exports = Engineer;