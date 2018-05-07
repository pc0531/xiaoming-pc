import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import Home from '../home'
import SignIn from '../signin'
import Header from '../header'
import Footer from '../footer'
import Profile from '../profile'
export default class Layout extends Component {
    render() {
        return [
            <Header key='Header'/>,

            <Switch key="homeContent">
                <Redirect exact from="/" to="/home" />

                <Route path="/home" component={Home} />
                <Route path="/signin" component={SignIn} />
                <Route path="/profile" component={Profile} />
            </Switch>,
            <Footer key='Footer'/>,
           
        ]
    }
}