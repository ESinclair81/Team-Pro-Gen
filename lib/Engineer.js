const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
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