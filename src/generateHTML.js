let teamArray = [];


function generateHTML(answers) {

    return (`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<link rel="stylesheet" href="./style.css" />
<title>Team Profiles</title>
</head>
<body>
<nav class="navbar bg-light">
<div class="container-fluid">
<span class="navbar-brand mb-0 h1">Team Profiles</span>
</div>
</nav>
<br>
<div class="container">
<div class="row">
<div class="col order-first">
<div class="card" style="width: 18rem;">
${generateProfiles(answers)}
<footer></footer>
<script src="index.js"></script>
</body>
</html>`)
};

function generateProfiles(answers) {
    if (answers.role === "Engineer") {
        return (`
        <div class="card-body">
<h5 class="card-title"><i class="bi bi-person-circle m-2"></i>${answers.role}</h5>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Name: ${answers.name}</li>
<li class="list-group-item">ID: ${answers.id}</li>
<li class="list-group-item">Email: ${answers.email}</li>
<li class="list-group-item">GitHub: ${answers.github}</li>
</ul>
</div>
</div>`);
    }
    if (answers.role === "Manager") {
        return (`
        <div class="card-body">
<h5 class="card-title"><i class="bi bi-person-circle m-2"></i>${answers.role}</h5>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Name: ${answers.name}</li>
<li class="list-group-item">ID: ${answers.id}</li>
<li class="list-group-item">Email: ${answers.email}</li>
<li class="list-group-item">Office Number: ${answers.officeNumber}</li>
</ul>
</div>
</div>`)
    }
    if (answers.role === "Intern") {
        return (`
        <div class="card-body">
<h5 class="card-title"><i class="bi bi-person-circle m-2"></i>${answers.role}</h5>
</div>
<ul class="list-group list-group-flush">
<li class="list-group-item">Name: ${answers.name}</li>
<li class="list-group-item">ID: ${answers.id}</li>
<li class="list-group-item">Email: ${answers.email}</li>
<li class="list-group-item">School: ${answers.school}</li>
</ul>
</div>
</div>`)
    }
};


module.exports = generateHTML;