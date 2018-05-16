import React, { Component } from 'react';
import { Icon, Input, Button, Table, Modal, Form, Select } from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import moment from 'moment'
const Option = Select.Option;

const FormItem = Form.Item

const provinceData = ['学前辅导', '小学辅导', '中学辅导', '高等教育', '兴趣培训', '舞蹈培训', '乐器'];

const cityData = {
    学前辅导: ['幼儿', '幼儿多元化智能'],
    小学辅导: ['1-3年级', '4-6年级'],
    中学辅导: ['主修', '辅修'],
    高等教育: ['技能', '专业'],
    兴趣培训: ['乐器', '舞蹈'],
    舞蹈培训: ['幼儿', '幼儿多元化智能'],
    乐器: ['Hangzhou', 'Ningbo', 'Wenzhou'],
};


class ClassManage extends Component {
    state = {
        modalShow: false,
        cities: cityData[provinceData[0]],
        secondCity: cityData[provinceData[0]][0],
        firstvalue: '学前辅导',
        secondvalue: '幼儿'
    }

    componentDidMount() {
        const { getClassList } = this.props;
        getClassList();
    }

    handleProvinceChange = (value) => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
            firstvalue: value
        });
    }

    onSecondCityChange = (value) => {
        this.setState({
            secondCity: value,
            secondvalue: value
        });
    }

    render() {
        const { classList, deleteClass, addClass } = this.props;
        let modalShow = this.state.modalShow;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const columns = [
            {
                dataIndex: 'addTime',
                title: '新增时间',
                width: '21%',
                align: 'center',
                render: (text) => (
                    <span>{moment(text).format("YYYY-MM-DD HH:mm:ss")}</span>
                )
            },
            {
                dataIndex: 'goodsId',
                title: '课程编号',
                width: '15%',
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
                title: '剩余数量',
                width: '13%',
                align: 'center'
            },
            {
                dataIndex: 'goodsPrice',
                title: '课程价格',
                width: '13%',
                align: 'center'
            },
            {
                dataIndex: 'goodsType',
                title: '分类',
                width: '10%',
                align: 'center',
            },
            {
                title: '操作',
                width: '10%',
                align: 'center',
                render: (text) => (
                    <p>
                        {/* <a onClick={() => {
                            this.setState({ modalShow: true })
                        }}
                            style={{ paddingRight: '10px' }}
                        >修改</a> */}
                        <a onClick={() => {
                            deleteClass(text.goodsId)
                        }}>删除</a>
                    </p>
                )
            },
        ]
        const { getFieldDecorator, getFieldsValue, validateFields } = this.props.form;
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
        return (
            <div className='personInfo'>
                <div className='personInfoContent'>
                    <h3>课程管理
                        <a onClick={() => {
                            this.setState({ modalShow: true })
                        }}
                            style={{ float: 'right' }}
                        >
                            新增课程
                        </a>
                    </h3>
                    <Table columns={columns} dataSource={classList} />
                </div>



                <Modal
                    visible={modalShow}
                    onCancel={() => {
                        this.setState({
                            modalShow: false
                        })
                    }}
                    onOk={() => {
                        validateFields((err) => {
                            if (err) {
                                return
                            }
                            const formatData = getFieldsValue()
                            let price = Number(formatData.goodsPrice);
                            let num = Number(formatData.goodsNum);
                            const { firstvalue, secondvalue } = this.state;
                            let first = '';
                            let second = '';
                            let third = '0';
                            if (firstvalue === '学前辅导') {
                                first = '0'
                            }
                            if (firstvalue === '小学辅导') {
                                first = '1'
                            }
                            if (firstvalue === '中学辅导') {
                                first = '2'
                            }
                            if (firstvalue === '高等教育') {
                                first = '3'
                            }
                            if (firstvalue === '兴趣培训') {
                                first = '4'
                            }

                            if (firstvalue === '舞蹈培训') {
                                first = '5'
                            }

                            if (firstvalue === '乐器') {
                                first = '6'
                            }
                            if (secondvalue === '幼儿' || secondvalue === '1-3年级' || secondvalue === '主修' || secondvalue === '技能' || secondvalue === '乐器') {
                                second = '0'
                            }
                            if (secondvalue === '幼儿多元化智能' || secondvalue === '4-6年级' || secondvalue === '辅修' || secondvalue === '专业' || secondvalue === '舞蹈') {
                                second = '1'
                            }

                            let type = first + '-' + second + '-' + third;
                            addClass({ ...formatData, goodsPrice: price, goodsNum: num, goodsType: type }, () => {
                                this.setState({
                                    modalShow: false
                                })
                            })
                        })
                    }}
                    width='500px'
                >
                    <div className='classmanageForm'>
                        <Form className='inputForm'>
                            <FormItem label="课程名" {...formItemLayout}>
                                {getFieldDecorator('goodsName', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入课程名',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="价格" {...formItemLayout}>
                                {getFieldDecorator('goodsPrice', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入价格',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <div className='classmanageForm-type'>
                                <label style={{ color: 'rgba(0, 0, 0, 0.85)' }}>类别：</label>
                                <Select defaultValue={provinceData[0]} style={{ width: 130 }} onChange={this.handleProvinceChange}>
                                    {provinceOptions}
                                </Select>
                                <Select value={this.state.secondCity} style={{ width: 130 }} onChange={this.onSecondCityChange}>
                                    {cityOptions}
                                </Select>
                            </div>
                            <FormItem label="课程编号" {...formItemLayout}>
                                {getFieldDecorator('goodsId', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入课程名',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="课程数量" {...formItemLayout}>
                                {getFieldDecorator('goodsNum', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入课程数量',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="图片地址" {...formItemLayout}>
                                {getFieldDecorator('picUrl', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入图片地址',
                                    }],
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </Form>

                    </div>
                </Modal>
            </div>
        )
    }
}

const ClassManageForm = Form.create()(ClassManage)

const mapStateToProps = (state) => {
    return { ...state.classmanage }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassManageForm);