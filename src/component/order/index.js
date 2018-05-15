import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import { Button, Modal, Input } from "antd";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import PropTypes from 'prop-types'

const payType = {
    balance:1,
    ali:2,
    wechat:3
}

class Order extends Component {

    static contextTypes = {
        router: PropTypes.object
    }
    
    state = {
        visible: false,
        payPassword:''
    }

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }

    handleOk = ()=> {
        const { payOrder,userCode } = this.props;
        payOrder(payType.balance,userCode,this.state.payPassword,()=>{
            console.error("过来")
            this.gotoPage("/profile/myOrder")
        })
       
    }

    handleCancel = ()=> {
        this.setState({ visible: false })
    }


    render() {
        let classDetail = this.props.location.state;
        let payPassword = this.state.payPassword
        const { createOrder ,  userCode} = this.props;
        return (
            <div className='order'>
                <div className='order-bc-hearder'>
                    <div className='order-bc-hearder-warp'>
                        <div className='order-bc-hearder-left'>
                            <h1>确认订单</h1>
                        </div>
                    </div>
                </div>
                <div className='order-bc-body'>
                    <div className='order-bc-title-box'>
                        <p className='goods-info-title'>商品信息</p>
                    </div>
                    <div className='order-bc-detail-box'>
                        <ul>
                            <li>
                                <a><img src='//szimg.mukewang.com/5ac2dfe100014a9005400300-160-90.jpg' /></a>
                                <div className='text-info-box'>
                                    <a><p className='package-info-title'> {classDetail.goodsName}</p></a>
                                </div>
                                <p className='info-price'><span>￥{classDetail.goodsPrice}</span></p>
                            </li>
                        </ul>
                    </div>
                    <div className='order-bc-pay-box'>
                        <div className='goods-total-price-box'>
                            <p className='price-num'><span>￥{classDetail.goodsPrice}</span></p>
                            <p className='price-text'><span>共1件商品，商品总金额:</span></p>
                        </div>
                        <div className='pay-price-box'>
                            <p className='order-price'><span>￥{classDetail.goodsPrice}</span></p>
                            <p className='price-text'><span>应付:</span></p>
                        </div>
                    </div>
                    <div className='order-bc-pay-account-box'>
                        <p className='pay-account'>购买账号：大斧的亮亮</p>
                    </div>
                    <div style={{ height: '50px' }}>
                        <Button className='order-submitbut'
                            onClick={() => {
                                let param = {
                                    goodsName:classDetail.goodsName,
                                    goodsId:classDetail.goodsId,
                                    buyId:userCode,
                                    goodsNum:1,
                                    totalCash:20,
                                }
                                createOrder(param,()=>{
                                    this.setState({ visible: true })
                                });
                            }}
                        >
                            立即购买
                        </Button>
                    </div>
                </div>
                <Modal
                    title="收银台"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width = '200px'
                >
                    <div className='payModal'>
                        <span>请输入支付密码</span>
                        <Input 
                        className = 'payPasswordInput' 
                        value={payPassword} 
                        onChange={(e)=>{
                            this.setState({payPassword:e.target.value})
                        }}/>
                    </div>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.order,...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);