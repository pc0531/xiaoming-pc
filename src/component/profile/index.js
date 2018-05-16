import React from 'react';

import { Switch, Redirect, Route } from "react-router-dom"
import ProfileLeft from '../profileLeft'
import PersonInfo from './personInfo'
import Friends from './friends'
import MyOrder from './myOrder'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

class Profile extends React.Component {
    render() {
        const {userName } =this.props;
        console.error("userName:"+userName)
        return (

            <div className='profile'>
                <div className='profileContent'>
                    <Redirect from='/profile' to='/profile/personInfo' />
                    <ProfileLeft key='prol' userName={userName}/>
                    <Switch key='profile'>
                        <Route path='/profile/personInfo' component={PersonInfo} />
                        <Route path='/profile/myOrder' component={MyOrder} />
                        <Route path='/profile/friends' component={Friends} />
                    </Switch>
                </div>
            </div>

        )

    };
}

const mapStateToProps = (state) => {
    return { ...state.userConfig }
}

export default connect(mapStateToProps)(Profile)