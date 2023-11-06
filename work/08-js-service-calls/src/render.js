

function render(username, storedWord, app){
    if(!username && !storedWord){
        app.innerHTML = loginPage();
    }else{
        app.innerHTML = wordPage(username, storedWord);
    }
    
    return;
}

function loginPage(){
        // login page
        return `
            <div class="page login">
                <h1 class="title">Login</h1>
                    <div class="login">
                        <input class="input" type="text" placeholder="Please enter your username"/>
                        <button class="login-btn">Login</button>
                    </div>
            </div>
        `
}


function wordPage(username, storedWord){
    // word page
    return `
        <div class="page word">
            <div class="menu">
                <span>User: ${username}</span>
                <button class="logout">Logout</button>
            </div>

            <p>Your Stored Word is: ${storedWord}</p>

            <input class="input" type="text" placeholder="Set your word"/>
            <button class="set-word">Set Word</button>

        </div>
    
    `
}

export default render;
