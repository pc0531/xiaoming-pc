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
    componentWillReceiveProps() {
        if (this.props.location.state) {
            this.setState(
                {
                    firsttitle: this.props.location.state.first,
                    secondtitle:this.props.location.state.second,
                    thirdtitle:this.props.location.state.third
                }
            )
        }
    }
    state = initState;

    componentDidMount() {
        const { getClassList } = this.props;
        getClassList();
    }

    componentDidUpdate() {

    }

    render() {
        const { classList } = this.props;
        const { firsttitle, secondtitle, thirdtitle } = this.state;
        let state = this.state;
        let newclassList = [];
        classList.map((param) => {
            let first = param.goodsType.split("-")[0];
            let second = param.goodsType.split("-")[1];
            let third = param.goodsType.split("-")[2];
            if (first == firsttitle) {
                if (second == secondtitle) {
                    if (third == thirdtitle) {
                        console.error("param" + JSON.stringify(param));
                        newclassList.push(param)
                    }
                    if (thirdtitle == -1) {
                        newclassList.push(param)
                    }
                }
                if (secondtitle == -1) {
                    newclassList.push(param)
                }
            }
            if (firsttitle == -1) {
                newclassList.push(param)
            }
        })
        return (
            <div className='course'>
                <TopNav {...state} changetitle={(mark, data) => {
                    if (mark === 'firsttitle') {
                        this.setState({ ...initState, firsttitle: data })
                    }
                    if (mark === 'secondtitle') {
                        this.setState({ secondtitle: data })
                    }
                    if (mark === 'thirdtitle') {
                        this.setState({ thirdtitle: data })
                    }

                }} />
                <div className='container'>
                    <div className='course-tool-bar'>
                        <div className='tool-left'>
                            <a>最新</a>
                            <a>最热</a>
                        </div>
                    </div>
                    <div className='course-list'>
                        <div className='moco-course-list'>
                            {newclassList.map((ele, index) => (
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