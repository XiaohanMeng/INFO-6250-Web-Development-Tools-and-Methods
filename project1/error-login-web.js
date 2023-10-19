const errorPage = {
    // if userError is true, means input invalid test when login in
    // if userError is false, means sid is invalid when start new game or guess
    errorWeb: function (userError){
        return `
            <!doctype html>
            <html lang="en">
            <head>
                <title>Login Page</title>
                <link rel="stylesheet" href="login.css">
            </head>
            <body>
                <header>
                    <h1 class="error-title">Login Error</h1>
                </header>
                <main>
                    <div class="error">
                        <h2 class="error-instruction">Login Failed: 401 error</h2>
                        ${errorPage.errorMessage(userError)}

                        <form action="/login" class="login-form" method="POST">
                            <input name="username" class="login-text" type="text" placeholder="Enter your username" required>
                            <button type="submit" class="login-btn">Login</button>
                        </form>
                    </div>
                </div>


                </main>
            </body>
            </html>
        `;
    },


    errorMessage: function(userError) {
        if(userError){
            return `<p class="error-message">It seems that your username is incorrect.</p>`
        }

        return `<p class="error-message">It seems that you're not logged in.</p>`
    }


};

module.exports = errorPage;