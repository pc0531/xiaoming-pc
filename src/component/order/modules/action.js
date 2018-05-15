import { post } from '../../../utils/request'
import { message } from 'antd'
import RSA from '../../../utils/RSA'

const profix = `order`;

export const createOrder = (param, subcb) => dispatch => {
    post('/order/addOrder', param).then((res) => {
        if (res) {
            dispatch({
                type: `${profix}-changeorderId`,
                data: res.orderId
            })
            subcb()
        }
    }).catch((err) => {
        message.error("系统异常请稍后再试!")
    })
}

export const payOrder = (payType, userCode, payPassword, subcb) => (dispatch, getState) => {
    let orderId = getState().order.orderId
    let param = {
        orderId: orderId,
        payType: payType,
        payerCode: userCode,
        payPassword: RSA.encryptedString(payPassword)
    }
    post('/pay/addPay', param).then((res) => {
        if (res) {
            subcb()
        }
    }).catch((err) => {
        message.error("系统异常请稍后再试!")
    })
}