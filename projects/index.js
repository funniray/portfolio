document.addEventListener("DOMContentLoaded", async () =>{
    const projectString = await getHttp("projects.json");
    const projects = JSON.parse(projectString.responseText);
    let main = document.getElementById("main");
    projects.forEach(project=>{
        main.innerHTML+= `
<a href="${project.repo}">
    <div class="tile">
        <h1>${project.name}</h1>
        <img src="${project.screenshot}" class="project-sc" alt="Project Screenshot"/>
        <p>${project.desc}</p>
    </div>
</a>`
    })
});
