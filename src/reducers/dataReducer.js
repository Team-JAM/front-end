export const initialDataState = {
	// token: '',
	roomData: {},
	playerStatus: {},
	cooldown: 0,
	canMove: false,
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
				cooldown: action.payload.cooldown,
				canMove: false,
			};
		case 'GET_DATA_FAILURE':
			return {
				...state,
				error: 'Sorry, error retrieving game data',
				isLoading: false,
			};
		case 'GET_STATUS_SUCCESS':
			return {
				...state,
				error: '',
				isLoading: false,
				playerStatus: action.payload,
				cooldown: action.payload.cooldown,
				canMove: false,
			};
		case 'GET_STATUS_FAILURE':
			return {
				...state,
				error: 'Sorry, error retrieving player status and inventory',
				isLoading: false,
			};
		case 'SET_CAN_MOVE_TRUE':
			return {
				...state,
				canMove: true,
			};
		default:
			return state;
	}
};
