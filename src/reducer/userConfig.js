export default function userConfig(state = {}, action) {
	switch (action.type) {
		case "signInSuccess": {
            const { mobile} = action.data || {}
			return {
				...state,
				...action.data,
				// mobile: mobile ? maskPhone(mobile) : '',
				rawMobile: mobile,
			}
		}
		default:
			return state
	}
}
