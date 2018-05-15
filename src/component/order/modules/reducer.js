const initState = {
    orderId:''

}

const profix = `order`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-changeorderId` : return {...state ,orderId:action.data}
        default : return state
    }
}