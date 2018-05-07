import React, { Component } from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import { Modal, Input, Button } from 'antd'
import {ws} from '../../../utils/ws'

const { TextArea } = Input

class Friends extends Component {

    state = {
        chatModal: false
    }

    componentDidMount(){
        ws.init();
        ws.open();
    }

    messageListRender(){
        const {messageList ,userId} =  this.props;
        if(messageList){
            return <ul>
                {
                     messageList.map((ele) => {
                        if (ele.sendId === userId) {
                            return <li style={{textAlign:'right',color:'rgb(56, 188, 164)'}}>{ele.msg}</li>
                        }
                        else {
                            return <li style={{textAlign:'left',color:'#606060'}}>{ele.msg}</li>
                        }
                    })
                }
                </ul>
           
        }
    }
    render() {
        let chatModal = this.state.chatModal;
        const { messageList, userId , acceptId , message ,changeData} = this.props;
        return (
            <div className='personInfo'>
                <div className='personInfoContent'>
                    <h3>好友列表</h3>
                    <p>
                        <span>姓名：</span>
                        <span>pengcheng</span>
                    </p>
                    <a onClick={() => {
                        this.setState({ chatModal: true })
                        if( userId === '5af0269c2592181b123f69cc'){
                            changeData('acceptId','5adabf88f786ee126976c188')
                        }
                        else{
                            changeData('acceptId','5af0269c2592181b123f69cc')
                        }
                    }}>
                        聊天
                    </a>
                    <p>
                        <span>姓名：</span>
                        <span>pengcheng</span>
                    </p>
                    <p>
                        <span>姓名：</span>
                        <span>pengcheng</span>
                    </p>
                    <p>
                        <span>姓名：</span>
                        <span>pengcheng</span>
                    </p>
                    <p>
                        <span>姓名：</span>
                        <span>pengcheng</span>
                    </p>
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
                    className = 'chatModal'
                >
                    <div className='friends-chat-content'>
                        {this.messageListRender()}
                    </div>
                    {/* <TextArea rows={4} value={message} onChange = {
                        (e)=>{
                            console.error("e.target.value:"+e.target.value)
                            changeData('message',e.target.value)
                        }
                    }/> */}
                    <Input value = {message} onChange={
                        (e)=>{
                            console.error("e.target.value:"+e.target.value)
                            changeData('message',e.target.value)
                        }
                    }/>
                    <Button onClick={()=>{
                        ws.sendMessage()
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