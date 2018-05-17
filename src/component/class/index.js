import React, { Component } from "react"
import { Switch, Redirect, Route, Link } from "react-router-dom"
import { Button, Tabs } from "antd";
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import { Modal, Input, message } from 'antd'
import { ws } from '../../utils/ws'
import PropTypes from 'prop-types'
import { initMenu } from '../../common/constants'

const TabPane = Tabs.TabPane;


const router = {
    pathname: '/order',
    state: '',

}

class Class extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        chat: false
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

    gotoPage = (args, event) => {
        const { history } = this.context.router
        history.push(args)
    }

    render() {
        let chat = this.state.chat;
        let classDetail = this.props.location.state;
        console.error("classDetail:" + JSON.stringify(classDetail))
        let goodsType0 = classDetail.goodsType.split("-")[0];
        let goodsType1 = classDetail.goodsType.split("-")[1];
        let goodsType2 = classDetail.goodsType.split("-")[2];
        let type0 = '';
        let type1 = '';
        let type2 = '';
        initMenu.map((ele) => {
            if (ele.id == goodsType0) {
                type0 = ele.firsttitle;
                ele.secondtitle.map((param) => {
                    if (param.id == goodsType1) {
                        type1 = param.title
                    }
                    param.thirdtitle.map((e) => {
                        if (e.id == goodsType2) {
                            type2 = e.title
                        }
                    })
                })
            }

        })
        const { userName, changeData, userId, message } = this.props;
        return (
            <div className='class'>
                <div className='course-class-infos'>
                    <div className='course-class-content'>
                        <div className='course-class-content-path'>
                            <span> {classDetail.goodsName}</span>
                        </div>
                        <div className='course-class-info-wrap'>
                            <div className='course-class-info-bar'>
                                <div className='course-class-statics'>
                                    <div className='course-class-static-first'>
                                        <span>{type0}</span>
                                    </div>
                                    <div className='course-class-static-first'>
                                        <span>{type1}</span>
                                    </div>
                                    <div className='course-class-static-first'>
                                        <span>{type2}</span>
                                    </div>
                                </div>



                            </div>
                            <div className='course-class-info-price'>
                                <span> ¥ {classDetail.goodsPrice}</span>
                            </div>
                            <div className='course-class-info-buy'>
                                <Button>
                                    <Link to={userName ? { ...router, state: classDetail } : '/signin'}>
                                        立刻购买</Link>

                                </Button>
                                <Button onClick={() => {
                                    if (userId) {
                                        this.setState({ chat: true })
                                        ws.init();
                                        ws.open();
                                        if (userId === '5afaad700ae8291b72cba72b') {
                                            changeData('acceptId', '5afa99da0ae8291ac210d781')
                                        }
                                        else {
                                            changeData('acceptId', '5afaad700ae8291b72cba72b')
                                        }
                                    }
                                    else {
                                        this.gotoPage('/signin')
                                    }
                                }}>
                                    咨询
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='course-infos-tab'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="课程介绍" key="1">
                            <div className='course-infolayout'>
                                <div className='course-info-introduct-content'>
                                    <div
                                        className='course-info-introduct-section1'
                                    >
                                        <div className='course-info-introduct-description'>
                                            <p>课程详情：</p>
                                            <p>{classDetail.goodsDescription}</p>
                                        </div>
                                        <div
                                            className='course-info-introduct-description'
                                            style={{ backgroundImage: `url(${classDetail.picUrl})` }}
                                        >
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="组合套餐" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="课程章节" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div>
                <Modal
                    visible={chat}
                    width='500px'
                    onCancel={() => {
                        this.setState({ chat: false })
                    }}
                    footer={null}
                    className='chatModal'
                >
                    <div className='friends-chat-content'>
                        {this.messageListRender()}
                    </div>
                    <Input value={message} onChange={
                        (e) => {
                            console.error("e.target.value:" + e.target.value)
                            changeData('message', e.target.value)
                        }
                    } />
                    <Button onClick={() => {

                        ws.sendMessage('class')
                    }}>

                        发送
                  </Button>
                </Modal>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state.userConfig, ...state.classes }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Class)