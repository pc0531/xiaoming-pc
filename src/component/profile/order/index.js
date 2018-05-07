
import React, { Component } from 'react';
import { Icon, Input, Button, Table } from 'antd'


const columns = [
    {
        dataIndex: 'time',
        title: '时间',
        width:'20%',
        align:'center'
    },
    {
        dataIndex: 'name',
        title: '课程名称',
        width:'20%',
        align:'center'
    },
    {
        dataIndex: 'class',
        title: '课时数',
        width:'20%',
        align:'center'
    },
    {
        dataIndex: 'price',
        title: '价格',
        width:'20%',
        align:'center'
    },
    {
        dataIndex: 'operation',
        title: '操作',
        width:'20%',
        align:'center'
    },


]

class Order extends Component {
    render() {
        return (
            <div className='order'>
                <div className='orderContent'>
                    <h3>全部订单</h3>
                    <Table columns={columns} />
                </div>
            </div>
        )
    }
}

export default Order;