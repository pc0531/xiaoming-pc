import React from 'react';
import { Icon, Input, Button} from 'antd'

class SignIn extends React.Component {
    render() {
        {
            return (
                <div className="mui-content login-content">
                    <div className="goback">
                        <a onClick={() => {
                            console.error("返回")
                        }}>返回</a>
                    </div>
                    <p className="title">微信号/QQ/邮箱登录</p>
                    <form className="js-form">
                        {/* <figure>
                            <img src={this.state.icon} />
                            <p>{this.state.company}</p>
                        </figure> */}
                        <div className="login-input-form">
                                <div className="validate-group">
                                    <p>
                                        账号:
                                    </p>
                                    <Input
                                    className="login-input"
                                        size="large"
                                        placeholder="请输入手机号码"
                                    />
                                </div>
                                <div className="validate-group">
                                    <p>
                                        密码:
                                    </p>
                                    <Input
                                     className="login-input"
                                        size="large"
                                        placeholder="请输入密码"
                                    />
                                </div>
                                <Button className='login-but'>登录</Button>
                        </div>
                    </form>
                    
                </div>
            );

        };
    }


}

export default SignIn