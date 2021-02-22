class Manager {
    constructor(name, id, email, officeNum) {
  this.name = name;
  this.id = id;
  this.email = email;
  this.officeNum = officeNum;
  //   console.log(name);
}

//*******************************************   These are Manager constructor methods  ***********************************************/
getRole() {
    return "Manager";
}

getOfficeNum() {
    return this.officeNum;
}


};

module.exports = Manager;