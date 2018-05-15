const initState = {
    userInfo:'',
    age:'',
    name:'',
    payPassword:''
}
const profix = `personInfo`;

export default function(state = initState,action){
    switch(action.type){
        case `${profix}-getUserInfo` : return {...state ,userInfo:action.data}
        case `${profix}-changeage` : return {...state ,age:action.data}
        case `${profix}-changename` : return {...state ,name:action.data}
        case `${profix}-changepayPassword` : return {...state ,payPassword:action.data}
        default : return state
    }
}