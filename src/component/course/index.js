import React, { Component } from "react"
import { Switch, Redirect, Route, NavLink, Link } from "react-router-dom"
import TopNav from './components/topNav'
import * as actions from './modules/action'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const router = {
    pathname: '/class',
    state: ''
}

const initState = {
    firsttitle: -1,
    secondtitle: -1,
    thirdtitle: -1,
}


class Course extends Component {
    state = initState;

    componentDidMount() {
        const { getClassList } = this.props;
        getClassList();
    }
    render() {
        const { classList } = this.props;
        let state = this.state;
        return (
            <div className='course'>
                <TopNav {...state}/>
                <div className='container'>
                    <div className='course-tool-bar'>
                        <div className='tool-left'>
                            <a>最新</a>
                            <a>最热</a>
                        </div>
                    </div>
                    <div className='course-list'>
                        <div className='moco-course-list'>
                            {
                                classList.map((ele, index) => (
                                    <div className='course-card-container' key={index}>
                                        <Link to={{ ...router, state: ele }}>
                                            <div className='course-card-top'>
                                                <img src={ele.picUrl}>
                                                </img>
                                            </div>
                                            <div className='course-card-content'>
                                                <h3>{ele.goodsName}</h3>
                                                <div className='course-card-bottom'>
                                                    <div className='course-card-info'>
                                                        <span>入门</span>
                                                        <span>入门</span>
                                                    </div>
                                                    <p className='course-card-desc'>HTML+CSS基础教程8小时带领大家步步深入学习标签用法和意义</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.course, ...state.userConfig }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Course);