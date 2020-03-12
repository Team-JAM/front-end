import axios from 'axios';
import { teamJamBackendBaseURL } from './baseURL';

// Util function to hit Django back-end endpoints
export const axiosTeamJamBackEnd = () => {
	return axios.create({
		baseURL: teamJamBackendBaseURL,
	});
};
