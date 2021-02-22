
//********************************************   This function creates the entire team    *********************************************/
const createTeam = team => {

    //***********************  This function makes the HTML for the Manager card  *****************************/    
    const makeManager = manager => {
        return `
        <div class= "card employee-card">
        <div class = "card-header">
            <h2 class="card-title">${manager.getName()}<h2>
            <h3 class="card-title">i class="fas fa-mug-hot mr-2"></i${manager.getRole()}</h3>
        </div>
            <div class ="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}"${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number:${manager.getOfficeNum()}}"${manager.getEmail()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    //********************  This function makes the HTML for the Engineer card  ****************************/
    const makeEngineer = engineer => {
        return `
        <div class= "card employee-card">
        <div class = "card-header">
            <h2 class="card-title">${engineer.getName()}<h2>
        </div>
            <div class ="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}}"${engineer.getEmail()}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</li>
                </ul>
            </div>
        </div>
        `;
    };

   //***********************  This function makes the HTML for the Intern card  ******************************/
    const makeIntern = intern => {
        return `
        <div class= "card employee-card">
        <div class = "card-header">
            <h2 class="card-title">${intern.getName()}<h2>
        </div>
            <div class ="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}}"${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: "${intern.getSchool()}"</li>
                </ul>
            </div>
        </div>
        `;
    };
    //****************** These functions filter and push appropriate Employees as Team HTML ***********************/

    const html = [];

        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => makeManager(manager))
            .join("")
        );

        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => makeEngineer(engineer))
            .join("")
        );

        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => makeINtern(intern))
            .join("")
        );
    
        return html.join("");
            


}