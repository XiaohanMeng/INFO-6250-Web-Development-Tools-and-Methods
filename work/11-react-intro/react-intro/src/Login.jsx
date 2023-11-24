import { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState('');


    const isNameValid = (username) =>{
		if (!username || !username.match(/^[A-Za-z0-9_]+$/)) {
            setErrorMessage('Invalid username. Please use only letters and numbers');
			return false;
		}
		return true;
    };

    const isDogValid = (username) =>{
		if (username === "dog") {
            setErrorMessage('Dog is invalid.')
			return false;
		}
		return true;
    };



	const loginHandler = (e) => {
		e.preventDefault();
		const isValidUsername = isNameValid(username);
		const isMeaningValid = isDogValid(username);

        if(isValidUsername && isMeaningValid){
            onLogin(username);
        }
	};

	return (
		<div className="login-page">
            <h1>Login</h1>
            <form className="login-form" onSubmit={loginHandler}>
                <label className="form-label">
                    <span>Username:</span>
                    <input
                        className="login-username"
                        value={username}
                        placeholder="Enter username"
                        onInput={(e) => setUsername(e.target.value)}
                    />
                </label>

                <button
                    className='login-btn'
                    type="submit">
                        Login
                </button>
            </form>

            {errorMessage && (<div className='error-field'><p className='error-message'>{errorMessage}</p></div>)}		
			
		</div>
	);
}
  

export default Login;