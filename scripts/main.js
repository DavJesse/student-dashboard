import { renderLogin } from "./views/login.js";

function router() {
    const path = window.location.pathname;
    const app = document.getElementById("app");
    
    if (path === "/login") {
        app.innerHTML = renderLogin();
    } else {
        app.innerHTML = "<h1>Page Not Found</h1>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    router();
}
);