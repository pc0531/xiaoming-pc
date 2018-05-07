import React, { Component } from "react"
import { NavLink, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

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

class Header extends Component {

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
        const { userName } = this.props;
        return (
            <header>
                <div className="headerTop">
                    <div className="headerContent">
                        {
                            userName ? <span>您好：{userName}</span> : <Link to='/signin'>登录</Link>
                        }
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

const wh = connect(state => ({
    ...state.userConfig
}))(Header)

export default withRouter(wh)