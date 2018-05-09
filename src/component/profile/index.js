import React from 'react';

import { Switch, Redirect, Route } from "react-router-dom"
import ProfileLeft from '../profileLeft'
import PersonInfo from './personInfo'
import Friends from './friends'
import MyOrder from './myOrder'

class Profile extends React.Component {
    render() {
        return (

            <div className='profile'>
                <div className='profileContent'>
                    <Redirect from='/profile' to='/profile/personInfo' />
                    <ProfileLeft key='prol' />
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

export default Profile