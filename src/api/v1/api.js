import axios from 'axios';
import services from '../services.js';
const NODE_ENV = process.env.NODE_ENV;

export async function sendContact(name, email) {
	let baseUrl;
	if (NODE_ENV !== 'production') {
		baseUrl = services.contact.dev;
	} else {
		baseUrl = services.contact.prod;
	}

	const URL = `${baseUrl}`;
	const DATA = {
		name,
		email,
	};

	try {
		const response = await axios.post(URL, DATA);
		const { data } = await response;
		return data;
	} catch (error) {
		console.log(error);
	}
}
