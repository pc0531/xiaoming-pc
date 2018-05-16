import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import { Modal } from 'antd'

class PersonInfo extends Component {
    state = {
        update: false,
        updatePayPwd: false,
        modalShow: false
    }

    componentDidMount() {
        const { getUserInfo } = this.props;
        getUserInfo();
    }

    render() {
        const { userInfo, changeData, updateUserInfo, updatePayPassword } = this.props;
        let update = this.state.update;
        let updatePayPwd = this.state.updatePayPwd;
        let modalShow = this.state.modalShow;
        return (
            <div className='personInfo'>
                <div className='personInfoContent'>
                    <h3>基本资料
                    {update ?
                            <a style={{ float: 'right' }} onClick={() => {
                                updateUserInfo();
                                this.setState({ update: false })
                            }}>保存</a>
                            : <a style={{ float: 'right' }} onClick={() => {
                                this.setState({ update: true })
                            }}>修改</a>
                        }
                    </h3>
                    <div className='personInfo-detail'>
                        <p>
                            <span>姓名：</span>
                            {update ?
                                <input
                                    name='name'
                                    onChange={(e) => {
                                        changeData(e.target.name, e.target.value)
                                    }} />
                                :
                                <span>{userInfo.name ? userInfo.name : "未设置"}</span>}
                        </p>
                        <p>
                            <span>年龄：</span>
                            {update ?
                                <input
                                    name='age'
                                    onChange={(e) => {
                                        changeData(e.target.name, e.target.value)
                                    }}
                                />
                                :
                                <span>{userInfo.age ? userInfo.age : "未设置"}</span>}
                        </p>
                        {/* <p>
                            <span>性别：</span>
                            {update ? <input /> : <span>{userInfo.sex ? userInfo.sex : "未设置"}</span>}

                        </p> */}
                        <h3>安全设置</h3>
                        <p>
                            <span>支付密码：</span>
                            {userInfo.payPassword ?
                                <span>已设置
                                    <a onClick={() => {
                                        this.setState({ modalShow: true })
                                    }}
                                        style={{ marginLeft: '10px' }}
                                    >修改</a>
                                </span>
                                : (updatePayPwd ?
                                    <span>
                                        <input
                                            name='payPassword'
                                            onChange={(e) => {
                                                changeData(e.target.name, e.target.value)
                                            }} />
                                        <a
                                            onClick={() => {
                                                updatePayPassword()
                                                this.setState({ updatePayPwd: false })
                                            }}
                                            style={{ marginLeft: '10px' }}
                                        >
                                            保存
                                        </a>
                                    </span>
                                    :
                                    <a onClick={() => {
                                        this.setState({ updatePayPwd: true })
                                    }}>
                                        去设置
                                        </a>
                                )
                            }
                        </p>
                    </div>
                </div>
                <Modal
                    visible={modalShow}
                    onCancel={() => {
                        this.setState({ modalShow: false })
                    }}
                    onOk={() => {
                        updatePayPassword()
                        this.setState({modalShow: false})
                    }}
                    width='300px'
                >
                    <p>
                        <span>支付密码：</span>
                        <input
                            name='payPassword'
                            onChange={(e) => {
                                changeData(e.target.name, e.target.value)
                            }} /></p>
                </Modal>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.personInfo }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonInfo)