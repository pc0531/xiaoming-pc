import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import Home from '../home'
import SignIn from '../signin'
import Header from '../header'
import Footer from '../footer'
import Profile from '../profile'
import Course from '../course'
import Class from '../class'
import Order from '../order'
import SignUp from '../signup'
export default class Layout extends Component {
    render() {
        return [
            <Header key='Header'/>,
            <Switch key="homeContent">
                <Redirect exact from="/" to="/signup" />

                <Route path="/home" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/profile" component={Profile} />
                <Route path="/course" component={Course} />
                <Route path="/class" component={Class} />
                <Route path="/order" component={Order} />
            </Switch>,
            <Footer key='Footer'/>,
           
        ]
    }
}