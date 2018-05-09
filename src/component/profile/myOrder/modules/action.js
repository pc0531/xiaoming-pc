import {post} from '../../../../utils/request'
import {message} from 'antd'
const profix = `myOrder`;

export const getOrderList = () => (dispatch,getState) =>{
    const state = getState();
    let userCode = state.userConfig.userCode
    post('/order/findOrdersByUserCode',{userCode:userCode}).then((res)=>{
        if(res.dataList){
            dispatch({type:`${profix}-getOrderList`,data:res.dataList})
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}