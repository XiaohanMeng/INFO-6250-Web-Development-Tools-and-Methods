const errorPage = {
    errorWeb: function (){
        return `
            <!doctype html>
            <html lang="en">

            <head>
                <title>Login Error Page</title>
                <link rel="stylesheet" href="styles.css">
            </head>

            <body>
                <header>
                    <h1 class="error-title">Login Error</h1>
                </header>

                <main>
                    <div class="error">
                        <h2 class="error-instruction">Login Failed: 401 error</h2>
                        
                        <form action="/" class="login-form" method="get">
                            <p class="error-message">It seems that your username is incorrect.</p>
                            <button type="submit" class="eroor-btn">Login</button>
                        </form>
                    </div>
                
                </main>

            </body>

            </html>
        `;
    }
};

module.exports = errorPage;