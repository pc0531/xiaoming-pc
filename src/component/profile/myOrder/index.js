
import React, { Component } from 'react';
import { Icon, Input, Button, Table } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import moment from 'moment'

const payStatus = {
    6: "已取消",

    5: "上课完成",

    2: "已支付",

    1: "待支付",

    3: "已分配",

    4: "已开始上课",

    7: "申请取消"

}
const columns = [
    {
        dataIndex: 'addTime',
        title: '时间',
        width: '21%',
        align: 'center',
        render: (text) => (
            <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>
        )
    },
    {
        dataIndex: 'id',
        title: '订单号',
        width: '19%',
        align: 'center'
    },
    {
        dataIndex: 'goodsName',
        title: '课程名称',
        width: '14%',
        align: 'center'
    },
    {
        dataIndex: 'goodsNum',
        title: '课时数',
        width: '10%',
        align: 'center'
    },
    {
        dataIndex: 'totalCash',
        title: '价格',
        width: '8%',
        align: 'center'
    },
    {
        dataIndex: 'payStatus',
        title: '支付状态',
        width: '14%',
        align: 'center',
        render: (text) => payStatus[text]
    },
    {
        dataIndex: 'operation',
        title: '操作',
        width: '14%',
        align: 'center'
    },


]

class MyOrder extends Component {
    componentDidMount() {
        const { getOrderList } = this.props;
        getOrderList();
    }
    render() {
        const { orderList } = this.props
        return (
            <div className='myorder'>
                <div className='myorderContent'>
                    <h3>全部订单</h3>
                    <Table columns={columns} dataSource={orderList} />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { ...state.myOrder }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);