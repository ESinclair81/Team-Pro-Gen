
//********************************************   This function creates the entire team    *********************************************/
const createTeam = teamProfiles => {

    //***********************  This function makes the HTML for the Manager card  *****************************/    
    const makeManager = manager => {
        return `
        <div class= "card employee-card">
        <div class = "card-header">
            <h2 class="card-title">${manager.getName()}<h2>
            <h3 class="card-title"><i class= "fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>
            <div class ="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office Number:${manager.getOfficeNum()}</li>
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
            <h3 class="card-title"><i class= "fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
            <div class ="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}}">${engineer.getEmail()}</a></li>
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
            <h3 class="card-title fas fa-user-graduate mr-2">${intern.getRole()}</h3>
        </div>
            <div class ="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };
    //****************** These functions filter and push appropriate Employees as Team HTML ***********************/

    const html = [];

        html.push(teamProfiles
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => makeManager(manager))
        );

        html.push(teamProfiles
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => makeEngineer(engineer))
            .join("")
        );

        html.push(teamProfiles
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => makeIntern(intern))
            .join("")
        );
    
        return html.join("");
}

//*****************************************   This function generates the Page as HTML  ***********************************************/
module.exports = teamProfiles => {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://use.fontawesome.com/c0290c8c1c.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-title">
                <h1 class="text-center">This Is The Squad: My Team"</h1>
            </div>
        </div>
    </div>  
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createTeam(teamProfiles)}
            </div>
        </div>
    </div>  
</body>
</html>
    `;

};