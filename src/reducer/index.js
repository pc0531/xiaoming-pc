import { combineReducers } from "redux"

import userConfig from "./userConfig"
import friends from '../component/profile/friends/modules/reducer'
import myOrder from '../component/profile/myOrder/modules/reducer'
import course from '../component/course/modules/reducer'
import order from '../component/order/modules/reducer'
import signUp from '../component/signup/modules/reducer'
import personInfo from '../component/profile/personInfo/modules/reducer'
import classes from '../component/class/modules/reducer'

export default combineReducers({
    userConfig,
    course,
    friends,
    myOrder,
    order,
    signUp,
    personInfo,
    classes
})