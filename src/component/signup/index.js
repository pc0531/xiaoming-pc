import React from 'react';
import { Icon, Input, Button, Form, message } from 'antd'
import * as actions from './modules/action'
import axios from 'axios'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

const FormItem = Form.Item

class SignUp extends React.Component {
    state = {
        check:false
    }
    static contextTypes = {
        router: PropTypes.object
    }

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }

    siginUpHander = () => {
        const { validateFields, getFieldValue, getFieldsValue } = this.props.form;
        const { signUp } = this.props;
        validateFields((err) => {
            if (err) {
                return
            }
            const formatData = getFieldsValue()
            signUp(formatData, () => {
                this.gotoPage("/signin")
            })

        })

    }



    render() {
        const { getFieldDecorator, getFieldsValue ,getFieldValue} = this.props.form;
        return (
            <div className="signup">
                {/* <div className='signup-header'>
                    <p>小鸣学堂</p>
                </div> */}
                <div className='signup-content'>
                    <div className='signup-content-title'>
                        <h2>使用用户名注册</h2>
                    </div>
                    <div className='signup-content-inner'>
                        <Form className='inputForm'>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator('userName', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入用户名',
                                        }],
                                    })(
                                        <Input placeholder="用户名"  autoComplete="off"/>
                                    )}
                                </FormItem>
                            </div>
                            <div className='usernameInput'>
                                <FormItem>
                                    {getFieldDecorator('logPassword', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入密码',
                                        }],
                                    })(
                                        <Input placeholder="密码" type='password' autoComplete="off" />
                                    )}
                                </FormItem>

                            </div>
                            <div className='usernameInput'>
                                <FormItem>
                                {getFieldDecorator(`comfirmPwd`, {
                                initialValue: "",
                                validateTrigger: ["onBlur"],
                                rules: [
                                    {
                                        validator(rule, values, callback) {
                                            const ps = getFieldValue("logPassword")

                                            if (ps !== values) {
                                                callback(`两次输入不一致`)
                                            } else {
                                                callback()
                                            }
                                        }
                                    },
                                    {
                                        whitespace: true,
                                        message: "请去掉空格"
                                    }
                                ]
                            })(
                                <Input
                                    type="password"
                                    placeholder="确认密码"
                                    autoComplete="off"
                                />
                            )}
{/*                                     
                                    {getFieldDecorator('confirmPassword', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入密码',
                                        }],
                                    })(
                                        <Input placeholder="确认密码" type='password' autocomplete="off" />
                                    )} */}
                                </FormItem>

                            </div>
                            <div className = 'signup-protocol'>
                                <p><input type='checkbox' style={{marginRight:'5px'}} onChange = {(e)=>{
                                    this.setState({check:e.target.checked})
                                }}/><span>我已阅读并同意<a style={{marginLeft:'3px'}}>小鸣学堂服务协议</a></span></p>
                            </div>
                            <Button
                                className='loginBut'
                                onClick={() => {
                                    this.siginUpHander()
                                }}
                                disabled = {!this.state.check}
                            >
                                注册
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className='signup-have'>
                    <p>已有账号？<Link to='/signin'>立即登录</Link>
                    </p>
                </div>
            </div>
        );

    };
}

const SignUpForm = Form.create()(SignUp)

const mapStateToProps = (state) => {
    return { ...state.signUp }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)