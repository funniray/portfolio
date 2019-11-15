function getHttp(url) {
    return new Promise((res,rej) => {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    res(xhttp);
                } else {
                    rej(xhttp)
                }
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

document.addEventListener("DOMContentLoaded", () =>{
    const toFetch = Array.from(document.getElementsByClassName("headerThing"));

    toFetch.forEach(async (element) => {
        const res = await (getHttp("header/" + element.id + ".html"));
        element.innerHTML = res.responseText;
        if (element.id === "header") {
            loadNavbar();
        }
    });
});
