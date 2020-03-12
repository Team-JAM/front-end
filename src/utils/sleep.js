// Sleep helper function to handle cooldowns
export const sleep = seconds =>
	new Promise(resolve => setTimeout(resolve, seconds * 1000));
