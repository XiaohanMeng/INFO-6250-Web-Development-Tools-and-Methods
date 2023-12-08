export const SERVER = {
    AUTH_MISSING: 'auth-missing',
    AUTH_INSUFFICIENT: 'auth-insufficient',
    REQUIRED_USERNAME: 'required-username',
	REQUIRED_WORD: 'required-word',
	INVALID_WORD: 'invalid-word',

};

export const CLIENT = {
	NETWORK_ERROR: 'network-error',
	NO_SESSION: 'noSession',
};

export const MESSAGES = {
	[CLIENT.NETWORK_ERROR]: 'Trouble connecting to the network, please try again later.',
	[SERVER.AUTH_MISSING]: 'Your session is invalid or has expired, logging you out...',
	[SERVER.REQUIRED_USERNAME]: 'Please enter a valid (within 20 letters and/or numbers) username.',
	[SERVER.AUTH_INSUFFICIENT]: 'Sorry, DOG is invalid, please use another username.',
	[SERVER.REQUIRED_WORD] : 'Please enter a word',
	[SERVER.INVALID_WORD] : "The word is invalid. Please enter a word from possible words that you haven't guessed yet.",
	default: 'Something went wrong, please try again later.',
};