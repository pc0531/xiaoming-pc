import React, { Component } from "react"
import { Switch, Redirect, Route, NavLink } from "react-router-dom"

class TopNav extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className='top'>
                    <div className='course-content'>
                        <div className='course-box'>
                            <div className='course-row'>
                                <span>方向</span>
                                <div className='course-row-right'>
                                    <ul>
                                        <li><a>全部</a></li>
                                        <li><a>前端开发</a></li>
                                        <li><a>后端开发</a></li>
                                        <li><a>移动开发</a></li>
                                        <li><a>数据库</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='course-row'>
                                <span>分类</span>
                                <div className='course-row-right'>
                                    <ul>
                                        <li><a>全部</a></li>
                                        <li><a>HTML</a></li>
                                        <li><a>JS</a></li>
                                        <li><a>CSS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )

    }
}
export default TopNav