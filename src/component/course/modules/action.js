import {post} from '../../../utils/request'
import {message} from 'antd'
const profix = `course`;

export const getClassList = () => dispatch =>{
    post('/goods/findAllGoods',{}).then((res)=>{
        if(res.dataList){
            dispatch({type:`${profix}-getClassList`,data:res.dataList})
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}