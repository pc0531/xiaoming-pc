import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import { Modal, Input, Button } from 'antd'
import { ws } from '../../../utils/ws'
import moment from 'moment'

const { TextArea } = Input

class Friends extends Component {

    state = {
        chatModal: false
    }

    componentDidMount() {
        ws.init();
        ws.open();
    }

    messageListRender() {
        const { messageList, userId } = this.props;
        if (messageList) {
            return <ul>
                {
                    messageList.map((ele) => {
                        if (ele.sendId === userId) {
                            return <li style={{ textAlign: 'right', color: 'rgb(56, 188, 164)' }}>{ele.msg}</li>
                        }
                        else {
                            return <li style={{ textAlign: 'left', color: '#606060' }}>{ele.msg}</li>
                        }
                    })
                }
            </ul>

        }
    }
    render() {
        let chatModal = this.state.chatModal;
        const { messageList, userId, acceptId, message, changeData ,messages } = this.props;
        return (
            <div className='personInfo'>
                <div className='personInfoContent'>
                    <h3>咨询列表</h3>
                    {
                        messages.map((ele) => {
                            return (
                                <p>
                                    <span style={{paddingRight:'20px'}}>用户名：{ele.nickName}</span>
                                    <span style={{paddingRight:'20px'}}>消息：{ele.msg}</span>
                                    <a onClick={() => {
                                        this.setState({ chatModal: true })
                                            changeData('acceptId', ele.sendId);
                                            if(acceptId !== ele.sendId){
                                                changeData('messageList', ele.messageList);
                                            }
                                    }}>
                                        聊天
                                    </a>
                                    <span style={{float:'right'}}>{moment(ele.latesttime).format("YYYY-MM-DD HH:mm:ss")}</span>
                                </p>
                            )
                        })
                    }
                </div>
                <Modal
                    visible={chatModal}
                    onCancel={
                        () => {
                            this.setState(
                                { chatModal: false }
                            )
                        }
                    }
                    footer={null}
                    className='chatModal'
                >
                    <div className='friends-chat-content'>
                        {this.messageListRender()}
                    </div>
                    <Input value={message} onChange={
                        (e) => {
                            changeData('message', e.target.value)
                        }
                    } />
                    <Button onClick={() => {
                       
                        ws.sendMessage('friends')
                    }}>

                        发送
                  </Button>
                </Modal>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.friends, ...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Friends);