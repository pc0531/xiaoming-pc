const initState = {
    classList:[]
}
const profix = `course`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getClassList` : return {...state ,classList:action.data}
        default : return state
    }
}