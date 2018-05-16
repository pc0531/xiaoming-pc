import {post} from '../../../../utils/request'
import {message} from 'antd'
const profix = `classmanage`

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


export const deleteClass = (goodsId) => dispatch =>{
    post('/goods/deleteGoods',{goodsId:goodsId}).then((res)=>{
        if(res){
            message.success("删除成功")
            dispatch(getClassList())
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}

export const addClass = (formatData,cb) => dispatch =>{
    post('/goods/addGoods',formatData).then((res)=>{
        if(res){
            message.success("新增成功!")
            cb()
            dispatch(getClassList())
        }
    }).catch((err)=>{
        if(err){
            message.error("系统异常！")
        }
    })
}


export const changeData = ( mark , data ) => dispatch =>{
    dispatch({type:`${profix}-change${mark}`,data:data})
}