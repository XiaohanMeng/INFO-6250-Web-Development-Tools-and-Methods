
const state = {
    username : '',
    word : ''
};

export const errorMessage = {
    'auth-missing' : "Session is invalid.",
    'required-username' : "Username invalid",
    'auth-insufficient' : "Dog is invalid.",
    'required-word' : "Word is required.",
    'invalid-word' : "Word is invalid.",
    'network-error' : "The connection is down."
}


export default state;