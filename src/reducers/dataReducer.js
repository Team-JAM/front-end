export const initialDataState = {
	// token: '',
	roomData: {},
	playerStatus: {},
	itemInfo: {},
	playerInfo: {},
	cooldown: 0,
	cooldownOver: false,
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
				cooldownOver: false,
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
				cooldownOver: false,
			};
		case 'EXAMINE_ITEM_SUCCESS':
			return {
				...state,
				error: '',
				isLoading: false,
				itemInfo: action.payload,
				cooldown: action.payload.cooldown,
				cooldownOver: false,
			};
		case 'EXAMINE_PLAYER_SUCCESS':
			return {
				...state,
				error: '',
				isLoading: false,
				playerInfo: action.payload,
				cooldown: action.payload.cooldown,
				cooldownOver: false,
			};
		case 'SET_CAN_MOVE_TRUE':
			return {
				...state,
				cooldownOver: true,
			};
		case 'TAKE_ITEM':
			return {
				...state,
				playerStatus: {
					...state.playerStatus,
					inventory: [...state.playerStatus.inventory, action.payload],
				},
			};
		case 'DROP_ITEM':
			return {
				...state,
				playerStatus: {
					...state.playerStatus,
					inventory: state.playerStatus.inventory.filter(
						item => item !== action.payload,
					),
				},
			};
		default:
			return state;
	}
};
