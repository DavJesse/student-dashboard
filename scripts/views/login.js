/**
 * Renders the login view as an HTML string.
 * This function generates a login form with username and password fields,
 * along with a submit button, and includes a logo and header.
 * 
 * @returns {string} The HTML string for the login view.
 */
export function renderLogin() {
    return `
    <div id="login_container">
        <div id="login_shapes_container">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
            <form id="login_form">
                <img src="${window.location.origin}/assets/logo/logo.png" alt="Logo" id="login_form_logo">
    
                <label for="username" id="login_labels">Username</label>
                <input type="text" placeholder="Email or Phone" id="username">
    
                <label for="password" id="login_labels">Password</label>
                <input type="password" placeholder="Password" id="password">
    
                <button id="login_button">Log In</button>
            </form>
    </div>
    `;
}