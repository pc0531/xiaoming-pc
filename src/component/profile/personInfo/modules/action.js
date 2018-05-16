import { post } from '../../../../utils/request'
import {message} from 'antd'
import RSA from '../../../../utils/RSA'

const profix = `personInfo`;
export const updateUserInfo = () => (dispatch,getState)=> {
    const state = getState();
    let userId = state.userConfig.userId;
    let userName = state.userConfig.userName;
    const { name ,age} = state.personInfo;
    let param = {};
    param.id = userId;
    param.name = name;
    param.age = age;
    param.userName = userName;
    post('/user/updateUserInfoById', param).then((res) => {
        if (res) {
            dispatch(getUserInfo())
        }
    }).catch((err) => {
        message.error(err.message)

    })
}

export const updatePayPassword = () => (dispatch,getState)=> {
    const state = getState();
    let userName = state.userConfig.userName;
    let payPassword = RSA.encryptedString(state.personInfo.payPassword);
    let param = {};
    param.userName = userName;
    param.payPassword = payPassword;
    post('/user/resetPayPassword', param).then((res) => {
        if (res) {
            message.success("设置成功!")
            dispatch(getUserInfo())
        }
    }).catch((err) => {
        message.error(err.message)

    })
}

export const getUserInfo = () => (dispatch,getState)=> {
    const state = getState();
    let userName = state.userConfig.userName;
    post('/user/findUserInfoByUsername', {username:userName}).then((res) => {
        if (res) {
            dispatch({
                type:  `${profix}-getUserInfo`,
                data: res
            })
        }
    }).catch((err) => {
        message.error(err.message)

    })
}

export const changeData = (mark,data) => (dispatch)=> {
    dispatch({
        type:  `${profix}-change${mark}`,
        data: data
    })
}