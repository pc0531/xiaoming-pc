import React, { Component } from 'react';
import { Switch, Redirect, Route, NavLink } from "react-router-dom"

const activeStyle = {
    color:'#38BCA4'
}
class ProfileLeft extends Component {
    render() {
        return (
            <div className='profileLeft'>
                <ul>
                    <li><NavLink to='/profile/personInfo' activeStyle = {activeStyle}>个人资料</NavLink></li>
                    <li><NavLink to='/profile/myOrder' activeStyle = {activeStyle}>我的订单</NavLink></li>
                    <li><NavLink to='/profile/friends' activeStyle = {activeStyle}>我的好友</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>收藏</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>笔记</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>文章</NavLink></li>
                    <li><NavLink to='/profile/personCenter' activeStyle = {activeStyle}>售后</NavLink></li>
                </ul>
            </div>
        )
    }
}
export default ProfileLeft;