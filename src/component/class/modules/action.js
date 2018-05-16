const profix = `class`

export const sendMessage = () => dispatch =>{
    
}

export const changeData = ( mark , data ) => dispatch =>{
    dispatch({type:`${profix}-change${mark}`,data:data})
}