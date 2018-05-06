import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import Home from '../home'
import SignIn from '../signin'
import Header from '../header'
import Footer from '../footer'
export default class Layout extends Component {
    render() {
        return [
            <Header key='Header'/>,

            <Switch key="homeContent">
                <Redirect exact from="/" to="/home" />

                <Route path="/home" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                {/* 
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/forgetPwd" component={ForgetPwd} />
                <Route exact path="/modifyPwd" component={ModifyPwd} />
                <Route exact path="/tradingCenter" component={TradingCenter} />
                <Route path="/legalTender" component={LegalTender} />

                <Route path="/profile" component={Profile} />
                <Route path="/help" component={Help} />

                <Route path="/agreement" component={Agreement} /> */}

            </Switch>,
            <Footer key='Footer'/>

        ]
    }
}