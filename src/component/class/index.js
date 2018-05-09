import React, { Component } from "react"
import { Switch, Redirect, Route ,Link} from "react-router-dom"
import { Button, Tabs } from "antd";
const TabPane = Tabs.TabPane;


const router = {
    pathname: '/order',
    state: ''
}

class Class extends Component {
    render() {
        let classDetail = this.props.location.state;
        console.error("classDetail.picUrl:"+classDetail.picUrl)
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
                                        <span>中级</span>
                                    </div>
                                    <div className='course-class-static-first'>
                                        <span>中级</span>
                                    </div>
                                    <div className='course-class-static-first'>
                                        <span>中级</span>
                                    </div>
                                </div>



                            </div>
                            <div className='course-class-info-price'>
                                <span> ¥ {classDetail.goodsPrice}</span>
                            </div>
                            <div className='course-class-info-buy'>
                                <Button>
                                    <Link to= {{...router,state:classDetail}}>
                                    立刻购买</Link>
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
                                    style={{backgroundImage:`url(${classDetail.picUrl})`}}
                                    >
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="组合套餐" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="课程章节" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Class