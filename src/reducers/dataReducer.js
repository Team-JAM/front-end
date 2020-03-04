export const initialDataState = {
	// token: '',
	roomData: { messages: [] },
	playerStatus: {
		name: localStorage.getItem('name'),
		inventory: [],
		abilities: [],
		status: [],
	},
	itemInfo: {},
	playerInfo: {},
	rooms: {},
	coinBalance: localStorage.getItem('coinBalance'),
	roomToMine: localStorage.getItem('roomToMine'),
	roomToFind: undefined,
	cooldown: 0,
	cooldownOver: false,
	warpMode: localStorage.getItem('warp_mode') === 'true',
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
		case 'GET_ROOMS_SUCCESS':
			return {
				...state,
				rooms: action.payload,
				isLoading: false,
			};
		case 'GET_BALANCE_SUCCESS':
			return {
				...state,
				coinBalance: action.payload,
				isLoading: false,
				cooldownOver: false,
			};
		case 'GET_MINING_ROOM_SUCCESS':
			return {
				...state,
				// roomData: {
				// 	...state.roomData,
				// 	messages: [...state.roomData.messages, action.payload],
				// },
				roomToMine: action.payload,
			};
		case 'TOGGLE_WARP_MODE':
			return {
				...state,
				warpMode: !state.warpMode,
			};
		case 'SET_ROOM_TO_FIND':
			return {
				...state,
				roomToFind: action.payload,
			};
		case 'RESET_ITEM_INFO':
			return {
				...state,
				itemInfo: {},
			};
		default:
			return state;
	}
};
