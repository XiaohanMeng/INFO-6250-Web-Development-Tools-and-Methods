import { MESSAGES } from "./constants";

function Error({ error }) {
	const message = MESSAGES[error] || MESSAGES.default;
	return (
		<>
			{!!error &&  
				<div className="error"><p className="error-message">{message}</p></div>}
		</>);
}

export default Error;