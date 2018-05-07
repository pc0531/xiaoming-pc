export default function userConfig(state = {}, action) {
	switch (action.type) {
		case "signInSuccess": {
            const { userName,id} = action.data.user || {}
			return {
				...state,
				...action.data,
				// mobile: mobile ? maskPhone(mobile) : '',
				userName: userName,
				userId:id
			}
		}
		default:
			return state
	}
}
