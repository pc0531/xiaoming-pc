import React, { Component } from "react"
import { Switch, Redirect, Route, NavLink } from "react-router-dom"
import { initMenu } from '../../../common/constants'

class TopNav extends Component {

    render() {
        const { firsttitle, secondtitle, thirdtitle, changetitle } = this.props;
        let second = initMenu.find((param) => {
            return param.id === firsttitle;
        })

        let third = second.secondtitle.find((param) => {
            return param.id === secondtitle;
        })
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
                                                                changetitle('firsttitle', ele.id)
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
                                                            changetitle('firsttitle', ele.id)
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
                                                                    changetitle('secondtitle', ele.id)

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
                                                                changetitle('secondtitle', ele.id)
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
                                                                    changetitle('thirdtitle', ele.id)

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
                                                                changetitle('thirdtitle', ele.id)
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