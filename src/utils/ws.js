
import store from '../store'

console.error("123123123")
let ch = ""
// ws.addEventListener('open', () => {
//     const { userid } = store.getState().userConfig;
//     console.log('WebSocket open!')

//     console.log('WebSocket open!')

//     var content = {
//         "nickName": '15161181368',
//         "msg": '123123',
//         "date": new Date(),
//         // "avatar": temp.user.avatar,
//         "userId": userid,
//         "acceptId": userid,
//         "send": true
//     }
//     var content_msg = JSON.stringify(content);
//     ws.send(content_msg);

//     // const { moleculeCoinId, denominatorCoinId } = store.getState().tradingCenter
//     // ch = `channel_${moleculeCoinId}_${denominatorCoinId}`
//     // ws.send(JSON.stringify({  // init
//     //     act: "on",
//     //     ch,
//     //     timestamp: Date.now()
//     // }))

//     // store.subscribe(() => {
//     //     // const { moleculeCoinId, denominatorCoinId } = store.getState().tradingCenter
//     //     const newCh = `channel_${moleculeCoinId}_${denominatorCoinId}`

//     //     if (ch !== newCh) {
//     //         console.log(' WebSocket xxx1')
//     //         ws.send(JSON.stringify({  // init
//     //             act: "off",
//     //             ch,
//     //             timestamp: Date.now()
//     //         }))


//     //         ws.send(JSON.stringify({  // init
//     //             act: "on",
//     //             ch: newCh,
//     //             timestamp: Date.now()
//     //         }))

//     //         ch = newCh
//     //     }
//     // })
// })

// ws.addEventListener('close', () => {
//     console.log('WebSocket close!')
// })

export const ws = function () {
}

ws.init = function () {
    var temp = this;
    temp.websocket = new WebSocket(`ws://${window.location.host}/wsapi/ws`)
}

ws.open = function () {
    var temp = this;
    temp.websocket.onopen = () => {
        console.log("websock连接")
    }
    temp.websocket.addEventListener('message', event => {
        const { data } = event
        console.log('message:', data)
        const dataJson = JSON.parse(data)
        const { messageList, messages, acceptId } = dataJson.sendId === '5afaad700ae8291b72cba72b' ? store.getState().classes : store.getState().friends;
        if (dataJson.sendId === '5afaad700ae8291b72cba72b') {
            let newmessageList = messageList.map((ele) => {
                return ele
            })
            newmessageList.push(dataJson)
            store.dispatch({
                type: `class-changemessageList`,
                data: newmessageList
            })
        } else {
            let newmessages = [];
            if (messages.length !== 0) {
                let mark = false;
                messages.map((ele) => {
                    if (ele.sendId === dataJson.sendId) {
                        ele.latesttime = dataJson.date;
                        ele.msg = dataJson.msg;
                        ele.messageList.push(dataJson);
                        mark = true;
                    }
                    newmessages.unshift(ele)
                })
                if (!mark) {
                    let newmessage = {
                        sendId: dataJson.sendId,
                        nickName: dataJson.nickName,
                        latesttime: dataJson.date,
                        msg: dataJson.msg,
                        messageList: []
                    };
                    newmessage.messageList.push(dataJson);
                    newmessages.unshift(newmessage)
                }
            }
            else {
                let newmessage = {
                    sendId: dataJson.sendId,
                    nickName: dataJson.nickName,
                    latesttime: dataJson.date,
                    msg: dataJson.msg,
                    messageList: []
                };
                newmessage.messageList.push(dataJson);
                newmessages.push(newmessage)
            }

            store.dispatch({
                type: `friends-changemessages`,
                data: newmessages
            })
            if (acceptId === dataJson.sendId) {
                let newmessageList = messageList.map((ele) => {
                    return ele
                })
                newmessageList.push(dataJson)
                store.dispatch({
                    type: `friends-changemessageList`,
                    data: newmessageList
                })
            }
        }
    })
}

ws.sendMessage = function (direct) {
    var temp = this;
    const { userId, userName } = store.getState().userConfig;
    const { acceptId, message, messageList, messages } = direct === 'class' ? store.getState().classes : store.getState().friends;
    let content = {
        nickName: userName,
        msg: message,
        userId: userId,
        acceptId: acceptId,
        date: new Date()
    };
    var content_msg = JSON.stringify(content);
    temp.websocket.send(content_msg);
    let newmessageList = [];
    if (messageList) {
        newmessageList = messageList.map((ele) => {
            return ele
        })
    }
    newmessageList.push({ ...content, sendId: userId });
    console.error("acceptId:" + acceptId);
    if (direct === 'class') {
        store.dispatch({
            type: `class-changemessageList`,
            data: newmessageList
        })
        store.dispatch({
            type: `class-changemessage`,
            data: ''
        })
    }

    else {
        let mark = false;
        let newmessages = messages.map((ele) => {
            if (ele.sendId === acceptId) {
                ele.messageList.push({ ...content, sendId: userId })  
            }
            return ele;
        })
        console.error("newmessages" + JSON.stringify(newmessages))
        store.dispatch({
            type: `friends-changemessages`,
            data: newmessages

        })
        store.dispatch({
            type: `friends-changemessageList`,
            data: newmessageList

        })
        store.dispatch({
            type: `friends-changemessage`,
            data: ''
        })

    }

}

ws.close = function () {
    var temp = this;
    //关闭Websocket连接
    if (temp.websocket != null && temp.websocket != '') {
        temp.websocket.close();
        temp.websocket = null;
    }
}
