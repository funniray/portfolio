document.addEventListener("DOMContentLoaded", async () =>{
    const projectString = await getHttp("projects.json");
    const projects = JSON.parse(projectString.responseText);
    const christmas = new Date().getMonth() === 11;
    let main = document.getElementById("main");
    projects.forEach(project=>{
        main.innerHTML+= `
        <div onclick="window.location.href='${project.repo}'" class="tile ${christmas ? 'christmas' : ''}">
            ${christmas ? '<img src="bow.png" class="bow" alt="Bow"/>' : ''}
            <h1>${project.name}</h1>
            <img src="${project.screenshot}" class="project-sc" alt="Project Screenshot"/>
            <p>${project.desc}</p>
        </div>`;
    })
});
