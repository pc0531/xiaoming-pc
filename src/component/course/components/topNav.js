import React, { Component } from "react"
import { Switch, Redirect, Route, NavLink } from "react-router-dom"
import {initMenu} from '../../../common/constants'


const initState = {
    firsttitle: -1,
    secondtitle: -1,
    thirdtitle: -1,
}

class TopNav extends Component {
    state = initState

    render() {
        const { firsttitle, secondtitle, thirdtitle } = this.state;
        let second = initMenu.find((param) => {
            return param.id === firsttitle;
        })
       
            let third = second.secondtitle.find((param) => {
                return param.id === secondtitle;
            })

        console.error("firsttitle："+firsttitle);
        console.error("secondtitle"+secondtitle);
        console.error("secondtitle"+secondtitle)
        return (
            <div className='wrap'>
                <div className='top'>
                    <div className='course-content'>
                        <div className='course-box'>
                            <div className='course-row'>
                                <span>方向</span>
                                <div className='course-row-right'>
                                    <ul>{
                                        initMenu.map((ele) => {
                                            if (firsttitle === ele.id) {
                                                return (
                                                    <li>
                                                        <a
                                                            style={{ background: '#2b333b', color: '#fff', borderRadius: '2px' }}
                                                            onClick={() => {
                                                                this.setState({ ...initState ,firsttitle: ele.id })
                                                            }}
                                                        >
                                                            {ele.firsttitle}
                                                        </a>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li>
                                                        <a onClick={() => {
                                                            this.setState({...initState , firsttitle: ele.id })
                                                        }}>
                                                            {ele.firsttitle}
                                                        </a>
                                                    </li>)
                                            }
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                            <div className='course-row'>
                                <span>分类</span>
                                <div className='course-row-right'>
                                    <ul>
                                        {
                                            second.secondtitle.map((ele) => {
                                                if (secondtitle === ele.id) {
                                                    return (
                                                        <li>
                                                            <a
                                                                style={{ background: '#2b333b', color: '#fff', borderRadius: '2px' }}
                                                                onClick={() => {
                                                                    this.setState({secondtitle: ele.id })
                                                                }}
                                                            >
                                                                {ele.title}
                                                            </a>
                                                        </li>
                                                    )
                                                } else {
                                                    return (
                                                        <li>
                                                            <a onClick={() => {
                                                                this.setState({ secondtitle: ele.id })
                                                            }}>
                                                                {ele.title}
                                                            </a>
                                                        </li>)
                                                }

                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='course-row'>
                                <span>类型</span>
                                <div className='course-row-right'>
                                    <ul>
                                        {
                                            third.thirdtitle.map((ele) => {
                                                if (thirdtitle === ele.id) {
                                                    return (
                                                        <li>
                                                            <a
                                                                style={{ background: '#2b333b', color: '#fff', borderRadius: '2px' }}
                                                                onClick={() => {
                                                                    this.setState({ thirdtitle: ele.id })
                                                                }}
                                                            >
                                                                {ele.title}
                                                            </a>
                                                        </li>
                                                    )
                                                } else {
                                                    return (
                                                        <li>
                                                            <a onClick={() => {
                                                                this.setState({ thirdtitle: ele.id })
                                                            }}>
                                                                {ele.title}
                                                            </a>
                                                        </li>)
                                                }

                                            })
                                        }
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