import { post } from '../../../utils/request'
import RSA from '../../../utils/RSA'
import {message} from 'antd'
export const signUp = (param, subcb) => dispatch => {
    post('/user/register', { userName: param.userName, passWord: RSA.encryptedString(param.logPassword) }).then((res) => {
        if (res) {
            dispatch({
                type: `signInSuccess`,
                data: res
            })
            subcb()
        }
    }).catch((err) => {
        message.error(err.message)

    })
}