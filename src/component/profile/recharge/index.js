import React, { Component } from 'react';
import { post } from '../../../utils/request'
import { message } from 'antd'

export default class Recharge extends Component {
    state = {
        userName: '',
        rechargeCash: ''
    }
    render() {
        const { userName, rechargeCash } = this.state;
        return (
            <div className='recharge'>
                <div className='rechargeContent'>
                    <h3>充值管理</h3>
                    <p>
                        <span>充值账号：</span>
                        <input value={userName} onChange={(e) => {
                            this.setState({ userName: e.target.value })
                        }} />
                    </p>
                    <p>
                        <span>充值金额：</span>
                        <input value={rechargeCash} onChange={(e) => {
                            this.setState({ rechargeCash: e.target.value })
                        }} />
                    </p>
                    <button onClick={() => {
                        post('/user/recharge', { userName: userName, rechargeCash: rechargeCash }).then((res) => {
                            if (res) {
                                this.setState({
                                    userName: '',
                                    rechargeCash: ''
                                })
                                message.success('充值成功！')
                            }
                        }).catch((err) => {
                            if (err) {
                                message.error("系统异常！")
                            }
                        })
                    }}>充值</button>
                </div>
            </div>
        )
    }
}