const loginPage = {
    loginWeb: function (loginError, sidError){  
        return `
            <!doctype html>
            <html lang="en">
            <head>
                <title>Login Page</title>
                <link rel="stylesheet" href="login.css">
            </head>
            <body>
                <header>
                    <h1 class="login-title">Login</h1>
                </header>
                <main>
                    <div class="login">
                        <h2 class="login-instruction">Login your account</h2>
                        <form action="/login" class="login-form" method="POST">
                            <input name="username" class="login-text" type="text" placeholder="Enter your username" required>
                            <button type="submit" class="login-btn">Login</button>
                        </form>
                    </div>
                
                </main>
            </body>
            </html>
        `;
    }
};

module.exports = loginPage;
