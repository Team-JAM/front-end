export const initialDataState = {
	// token: '',
	roomData: '',
	isLoading: false,
	error: '',
};

export const dataReducer = (state = initialDataState, action) => {
	switch (action.type) {
		case 'GET_DATA_START':
			return { ...state, error: '', isLoading: true };
		case 'GET_DATA_SUCCESS':
			return {
				...state,
				error: '',
				isLoading: false,
				roomData: action.payload,
			};
		case 'GET_DATA_FAILURE':
			return {
				...state,
				error: 'Sorry, error retrieving game data',
				isLoading: false,
			};
		default:
			return state;
	}
};
