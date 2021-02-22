const Employee = require("../lib/Employee");

class Engineer {
    constructor(name, id, email, github) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.github = github;
  //   console.log(name);
}

//****************************************  These are the Engineer constructor methods   *********************************************/
getRole() {
    return "Engineer";
}

getGithub() {
    return this.github;
}

};

module.exports = Engineer;