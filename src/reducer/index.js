import { combineReducers } from "redux"

import userConfig from "./userConfig"
import friends from '../component/profile/friends/modules/reducer'


export default combineReducers({
    userConfig,
    friends
})