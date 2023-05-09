let totalskills = 1;
let totalwork = 1;
let totaledu = 1;
let totalproject = 1;


var addButton = document.getElementById('add-skill');
addButton.addEventListener('click', addSkill);
function addSkill() {
    var container = document.getElementById('skills-container');
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control mb-2';
    input.name = 'skills[]';
    input.placeholder = 'Python, C++, Java';
    container.appendChild(input);
    totalskills++;
}

var addButton = document.getElementById('add-edu');
addButton.addEventListener('click', addEdu);
function addWork() {
    var container = document.getElementById('work-container');
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control mb-2';
    input.name = 'work[]';
    input.placeholder = 'Manager at XYZ Pvt. Ltd.';
    container.appendChild(input);
    totalwork++;
}

var addButton = document.getElementById('add-work');
addButton.addEventListener('click', addWork);
function addEdu() {
    var container = document.getElementById('edu-container');
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control mb-2';
    input.name = 'edu[]';
    input.placeholder = 'Delhi Public School, R.K. Puram';
    container.appendChild(input);
    totaledu++;
}

var addButton = document.getElementById('add-project');
addButton.addEventListener('click', addProject);
function addProject() {
    var container = document.getElementById('project-container');
    var textarea = document.createElement('textarea');
    textarea.name = 'project[]';
    textarea.className = 'form-control mb-2';
    textarea.placeholder = 'Project Name and Description';
    textarea.rows = 3;
    container.appendChild(textarea);
    totalproject++;
}

var addButton = document.getElementById('add-extra');
addButton.addEventListener('click', addExtra);
function addExtra() {
    var container = document.getElementById('extra-container');
    var input = document.createElement('input');
    textarea.name = 'extra[]';
    textarea.className = 'form-control mb-2';
    container.appendChild(input);
}

function resume() {
    event.preventDefault();
    var resume = document.getElementById("resume");
    var resumefinal = document.getElementById("resumefinal");
    var pfp = document.getElementById("pfp").files[0];
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var github = document.getElementById("github").value;
    var bio = document.getElementById("bio").value;


    if (name == "" || contact == "" || address == "" || email == "" || linkedin == "" || github == "" || bio == "") {
        alert("Please fill all the fields");
    } else if (skills.length < totalskills || work.length < totalwork || edu.length < totaledu || project.length < totalproject) {
        alert("Please fill all the fields");
    } else if (!pfp) {
        alert("Please upload a profile picture");
    } else {
        resume.style.display = "none";
        resumefinal.style.display = "block";
        let str_mail = `<a href="mailto:${email}">${email}</a>`;
        let str_link = `<a href="${linkedin}" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height=50px" width="50px"></a>`;
        let str_git = `<a href="${github}" target="_blank"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="70px" width="70px"></a>`;

        let con = '<i class="material-icons">call</i>';
        let ad = '<i class="material-symbols-outlined">location_on</i >';
        let ml = '<i class="material-symbols-outlined">mail</i >';

        document.getElementById("pfpfinal").src = URL.createObjectURL(pfp);
        document.getElementById("namefinal").textContent = name;
        document.getElementById("contactfinal").innerHTML = con + contact;
        document.getElementById("addressfinal").innerHTML = ad + address;
        document.getElementById("emailfinal").innerHTML = ml + str_mail;
        document.getElementById("linkedinfinal").innerHTML = str_link;
        document.getElementById("githubfinal").innerHTML = str_git;
        document.getElementById("biofinal").textContent = bio;


        let skills = document.getElementsByName("skills[]");
        let str = "";
        for (let i = 0; i < skills.length; i++) {
            str += "<li>" + skills[i].value + "</li>";
        }
        document.getElementById("skillsfinal").innerHTML = str;

        let work = document.getElementsByName("work[]");
        str = "";
        for (let i = 0; i < work.length; i++) {
            str += "<li>" + work[i].value + "</li>";
        }
        document.getElementById("workfinal").innerHTML = str;

        let edu = document.getElementsByName("edu[]");
        str = "";
        for (let i = 0; i < edu.length; i++) {
            str += "<li>" + edu[i].value + "</li>";
        }
        document.getElementById("edufinal").innerHTML = str;

        let project = document.getElementsByName("project[]");
        str = "";
        for (let i = 0; i < project.length; i++) {
            str += "<li>" + project[i].value + "</li>";
        }

        document.getElementById("projectfinal").innerHTML = str;
        let extra = document.getElementsByName("extra[]");
        str = "";
        for (let i = 0; i < extra.length; i++) {
            str += "<li>" + extra[i].value + "</li>";
        }
        document.getElementById("extrafinal").innerHTML = str;
    }
}