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
        <img src="${window.location.origin}/assets/logo/logo.png" alt="Logo" id="logo">
        <form id="login_form">
        <h1 id="login_header">Login Here</h1>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            
            <button type="submit">Login</button>
        </form>
        </div>
    `;
}