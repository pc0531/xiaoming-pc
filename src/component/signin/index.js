import React from 'react';
import { Icon, Input, Button, Form, message } from 'antd'
import * as actions from './modules/action'
import axios from 'axios'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const FormItem = Form.Item

class SignIn extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }

    loginHander = () => {
        const { validateFields, getFieldValue,getFieldsValue } = this.props.form;
        const {signIn} = this.props;
        validateFields((err) => {
            if (err) {
                return
            }
            const formatData = getFieldsValue()
            signIn(formatData,()=>{
                this.gotoPage("/profile/personInfo")
            })
            
        })

    }



    render() {
        const { getFieldDecorator, getFieldsValue } = this.props.form;
        return (
            <div className="signin">
                <div className='loginContent'>
                    <h1>登录</h1>
                    <div className='loginForm'>
                        <Form className='inputForm'>
                            <div>
                                <FormItem className='usernameInput'>
                                    {getFieldDecorator('userName', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入用户名',
                                        }],
                                    })(
                                        <Input placeholder="用户名" />
                                    )}
                                </FormItem>
                            </div>
                            <div>
                                <FormItem className='usernameInput'>
                                    {getFieldDecorator('logPassword', {
                                        validateTrigger: ["onBlur"],
                                        rules: [{
                                            required: true,
                                            message: '请输入密码',
                                        }],
                                    })(
                                        <Input placeholder="密码" />
                                    )}
                                </FormItem>

                            </div>

                            <Button
                                className='loginBut'
                                onClick={() => {
                                    this.loginHander()
                                }}
                            >
                                登录
                            </Button>
                        </Form>
                    </div>

                </div>
            </div>
        );

    };
}

const SigninForm = Form.create()(SignIn)

const mapStateToProps = (state) => {
    return { ...state.signIn }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm)