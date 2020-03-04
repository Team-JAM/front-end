import axios from 'axios';
import { teamJamBackendBaseURL } from './baseURL';

export const axiosTeamJamBackEnd = () => {
	return axios.create({
		baseURL: teamJamBackendBaseURL,
	});
};
