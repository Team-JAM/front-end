import axios from 'axios';
import { lambdaServerBaseURL } from './baseURL';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		baseURL: lambdaServerBaseURL,
		headers: {
			Authorization: `Token ${token}`,
		},
	});
};
