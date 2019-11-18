document.addEventListener("DOMContentLoaded", async () =>{
    const projectString = await getHttp("projects.json");
    const projects = JSON.parse(projectString.responseText);
    let main = document.getElementById("main");
    projects.forEach(project=>{
        main.innerHTML+= `
        <div class="tile">
            <a href="${project.repo}">
                <h1>${project.name}</h1>
                <img src="${project.screenshot}" class="project-sc" alt="Project Screenshot"/>
                <p>${project.desc}</p>
            </a>
        </div>`
    })
});
