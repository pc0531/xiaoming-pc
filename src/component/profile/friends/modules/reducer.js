const initState = {
    messageList: [],
    acceptId: '',
    message: '',
    messages: []
}

const profix = `friends`;

export default function (state = initState, action) {
    switch (action.type) {
        case `${profix}-sendMessage`: return { ...state, messageList: action.data }
        case `${profix}-changeacceptId`: return { ...state, acceptId: action.data }
        case `${profix}-changemessage`: return { ...state, message: action.data }
        case `${profix}-changemessageList`: return { ...state, messageList: action.data }
        case `${profix}-changemessages`: return { ...state, messages: action.data }
        default: return state
    }
}