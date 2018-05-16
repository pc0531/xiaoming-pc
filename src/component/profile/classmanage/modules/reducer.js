const initState = {
    classList: [],
}

const profix = `classmanage`;

export default function (state = initState, action) {
    switch (action.type) {
        case `${profix}-getClassList`: return { ...state, classList: action.data }
        // case `${profix}-changeacceptId`: return { ...state, acceptId: action.data }
        // case `${profix}-changemessage`: return { ...state, message: action.data }
        // case `${profix}-changemessageList`: return { ...state, messageList: action.data }
        // case `${profix}-changemessages`: return { ...state, messages: action.data }
        default: return state
    }
}