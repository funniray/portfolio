class NavbarItem {

    constructor(url,name) {
        this.url = url;
        this.name = name;
    }

    isActive() {
        return window.location.href.endsWith(this.url);
    }

    getElement() {
        return `<a class="nav-item nav-link ${this.isActive() && 'active'}" href=${this.url}>${this.name}</a>`;
    }
}

const items = [
    new NavbarItem('/projects/','Projects'),
    new NavbarItem('/about/', 'About')
];

function loadNavbar() {
    let nav = document.getElementById("nav-div");
    items.forEach(item => {
        nav.innerHTML += item.getElement();
    });
}
