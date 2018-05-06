import React, { Component } from "react"
import { NavLink } from 'react-router-dom'

const initRows = [
    { title: '首页', url: '/home' },
    { title: '产品中心', url: '/product' },
    { title: '解决方案', url: '/solve' },
    { title: '客户案例', url: '/customer' },
    { title: '新闻动态', url: '/news' },
    { title: '联系我们', url: '/connect' },
]

const style = {
    background: '#38BCA4',
    color: '#fff'
}

export default class Header extends Component {

    state = {
        rows: []
    }

    componentWillMount() {
        // let newRows = initRows.map((params) => {
        //     return params.title === '首页' ? { title: '首页', active: true } : params;
        // })
        // this.setState({
        //     rows: newRows
        // })
    }

    render() {
        return (
            <header>
                <div className="headerTop">
                    <div className="headerContent">
                        <a>免费申请</a>
                        <a>登录</a>
                    </div>
                </div>
                <nav>
                    <div className="container">
                        <a><img /></a>
                        <ul>
                            {
                                initRows.map((params, index) => (
                                    <li key={index}><NavLink to={params.url} activeStyle={style} >{params.title}</NavLink></li>
                                ))
                            }
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

}