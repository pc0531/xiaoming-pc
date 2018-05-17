import React, { Component } from 'react';
import { Icon, Input, Button, Table, Modal, Form, Select, TreeSelect,message} from 'antd'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as actions from './modules/action'
import moment from 'moment'
const Option = Select.Option;

const FormItem = Form.Item;

const TreeNode = TreeSelect.TreeNode;

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
        secondvalue: '幼儿',
        rowData: '',
        mark: ''
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

    treeSelectChange = (value) => {
        console.error("value:"+value)
        this.setState({ value });
    }

    render() {
        const { classList, deleteClass, addClass, updateClass } = this.props;
        const { rowData, modalShow, mark } = this.state;
        const { getFieldDecorator, getFieldsValue, validateFields, setFieldsValue, resetFields } = this.props.form;
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
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
                        <a onClick={() => {
                            setFieldsValue(
                                {
                                    goodsName: text.goodsName,
                                    goodsPrice: text.goodsPrice,
                                    goodsId: text.goodsId,
                                    goodsNum: text.goodsNum,
                                    picUrl: text.picUrl,
                                    goodsDescription: text.goodsDescription
                                }
                            )
                            this.setState({ modalShow: true, mark: 'update',value:text.goodsType })
                        }}
                            style={{ paddingRight: '10px' }}
                        >修改</a>
                        <a onClick={() => {
                            deleteClass(text.goodsId)
                        }}>删除</a>
                    </p>
                )
            },
        ]

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
                            const { firstvalue, secondvalue ,value} = this.state;
                            // let first = '';
                            // let second = '';
                            // let third = '0';
                            // if (firstvalue === '学前辅导') {
                            //     first = '0'
                            // }
                            // if (firstvalue === '小学辅导') {
                            //     first = '1'
                            // }
                            // if (firstvalue === '中学辅导') {
                            //     first = '2'
                            // }
                            // if (firstvalue === '高等教育') {
                            //     first = '3'
                            // }
                            // if (firstvalue === '兴趣培训') {
                            //     first = '4'
                            // }

                            // if (firstvalue === '舞蹈培训') {
                            //     first = '5'
                            // }

                            // if (firstvalue === '乐器') {
                            //     first = '6'
                            // }
                            // if (secondvalue === '幼儿' || secondvalue === '1-3年级' || secondvalue === '主修' || secondvalue === '技能' || secondvalue === '乐器') {
                            //     second = '0'
                            // }
                            // if (secondvalue === '幼儿多元化智能' || secondvalue === '4-6年级' || secondvalue === '辅修' || secondvalue === '专业' || secondvalue === '舞蹈') {
                            //     second = '1'
                            // }

                            // let type = first + '-' + second + '-' + third;
                            console.error("value:"+value)
                            if(!value){
                                message.error("请选择类别！")
                                return 
                            }
                            if (mark === 'update') {
                                updateClass
                                updateClass({ ...formatData, goodsPrice: price, goodsNum: num, goodsType: value }, () => {
                                    resetFields()
                                    this.setState({
                                        modalShow: false
                                    })
                                })
                            }
                            else {
                                addClass({ ...formatData, goodsPrice: price, goodsNum: num, goodsType: value }, () => {
                                    resetFields()
                                    this.setState({
                                        modalShow: false
                                    })
                                })
                            }

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
                                {/* <Select defaultValue={provinceData[0]} style={{ width: 130 }} onChange={this.handleProvinceChange}>
                                    {provinceOptions}
                                </Select>
                                <Select value={this.state.secondCity} style={{ width: 130 }} onChange={this.onSecondCityChange}>
                                    {cityOptions}
                                </Select> */}
                                <TreeSelect
                                    showSearch
                                    style={{ width: 300 }}
                                    value={this.state.value}
                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                    placeholder="请选择类别"
                                    allowClear
                                    treeDefaultExpandAll
                                    onChange={this.treeSelectChange}
                                >
                                    <TreeNode value="0-0-0" title="学前辅导" key="0">
                                        <TreeNode value="0-0-0" title="幼儿" key="0-0">
                                            <TreeNode value="0-0-0" title={<b style={{ color: '#38BCA4' }}>语文</b>} key="0-0-0" />
                                            <TreeNode value="0-0-1" title={<b style={{ color: '#38BCA4' }}>数学</b>} key="0-0-1" />
                                            <TreeNode value="0-0-2" title={<b style={{ color: '#38BCA4' }}>英语</b>} key="0-0-2" />
                                        </TreeNode>
                                        <TreeNode value="0-1-0" title="幼儿多元化智能" key="0-1">
                                            <TreeNode value="0-1-0" title={<b style={{ color: '#38BCA4' }}>语文</b>} key="0-1-0" />
                                            <TreeNode value="0-1-1" title={<b style={{ color: '#38BCA4' }}>数学</b>} key="0-1-1" />
                                            <TreeNode value="0-1-2" title={<b style={{ color: '#38BCA4' }}>英语</b>} key="0-1-2" />
                                        </TreeNode>
                                    </TreeNode>
                                    <TreeNode value="1-0-0" title="小学辅导" key="1">
                                        <TreeNode value="1-0-0" title="1-3年级" key="1-0">
                                            <TreeNode value="1-0-0" title={<b style={{ color: '#38BCA4' }}>语文</b>} key="1-0-0" />
                                            <TreeNode value="1-0-1" title={<b style={{ color: '#38BCA4' }}>数学</b>} key="1-0-1" />
                                            <TreeNode value="1-0-2" title={<b style={{ color: '#38BCA4' }}>英语</b>} key="1-0-2" />
                                        </TreeNode>
                                        <TreeNode value="1-1-0" title="4-6年级" key="1-1">
                                            <TreeNode value="1-1-0" title={<b style={{ color: '#38BCA4' }}>语文</b>} key="1-1-0" />
                                            <TreeNode value="1-1-1" title={<b style={{ color: '#38BCA4' }}>数学</b>} key="1-1-1" />
                                            <TreeNode value="1-1-2" title={<b style={{ color: '#38BCA4' }}>英语</b>} key="1-1-2" />
                                        </TreeNode>
                                    </TreeNode>
                                    <TreeNode value="2-0-0" title="中学辅导" key="2">
                                        <TreeNode value="2-0-0" title="主修" key="2-0">
                                            <TreeNode value="2-0-0" title={<b style={{ color: '#38BCA4' }}>语文</b>} key="2-0-0" />
                                            <TreeNode value="2-0-1" title={<b style={{ color: '#38BCA4' }}>数学</b>} key="2-0-1" />
                                            {/* <TreeNode value="2-0-2" title={<b style={{ color: '#08c' }}>英语</b>} key="random" /> */}
                                        </TreeNode>
                                        <TreeNode value="2-1-0" title="辅修" key="2-1">
                                            <TreeNode value="2-1-0" title={<b style={{ color: '#38BCA4' }}>生物</b>} key="2-1-0" />
                                            <TreeNode value="2-1-1" title={<b style={{ color: '#38BCA4' }}>历史</b>} key="2-1-1" />
                                            <TreeNode value="2-1-2" title={<b style={{ color: '#38BCA4' }}>化学</b>} key="2-1-2" />
                                            <TreeNode value="2-1-3" title={<b style={{ color: '#38BCA4' }}>物理</b>} key="2-1-3" />
                                        </TreeNode>
                                    </TreeNode>
                                    <TreeNode value="3-0-0" title="高等教育" key="3">
                                        <TreeNode value="3-0-0" title="技能" key="3-0">
                                            <TreeNode value="3-0-0" title={<b style={{ color: '#38BCA4' }}>CET</b>} key="3-0-0" />
                                            <TreeNode value="3-0-1" title={<b style={{ color: '#38BCA4' }}>托福</b>} key="3-0-1" />
                                            <TreeNode value="3-0-2" title={<b style={{ color: '#38BCA4' }}>雅思</b>} key="3-0-2" />
                                        </TreeNode>
                                        <TreeNode value="3-1-0" title="专业" key="3-1">
                                            <TreeNode value="3-1-0" title={<b style={{ color: '#38BCA4' }}>计算机</b>} key="3-1-0" />
                                            <TreeNode value="3-1-1" title={<b style={{ color: '#38BCA4' }}>会计</b>} key="3-1-1" />
                                            <TreeNode value="3-1-2" title={<b style={{ color: '#38BCA4' }}>考研</b>} key="3-1-2" />
                                        </TreeNode>
                                    </TreeNode>
                                    <TreeNode value="4-0-0" title="兴趣培训" key="4">
                                        <TreeNode value="4-0-0" title="乐器" key="4-0">
                                            <TreeNode value="4-0-0" title={<b style={{ color: '#38BCA4' }}>钢琴</b>} key="4-0-0" />
                                            <TreeNode value="4-0-1" title={<b style={{ color: '#38BCA4' }}>吉他</b>} key="4-0-1" />
                                            <TreeNode value="4-0-2" title={<b style={{ color: '#38BCA4' }}>小提琴</b>} key="4-0-2" />
                                        </TreeNode>
                                        <TreeNode value="4-1-0" title="舞蹈" key="4-1">
                                            <TreeNode value="4-1-0" title={<b style={{ color: '#38BCA4' }}>poping</b>} key="4-1-0" />
                                            <TreeNode value="4-1-1" title={<b style={{ color: '#38BCA4' }}>国标</b>} key="4-1-1" />
                                            <TreeNode value="4-1-2" title={<b style={{ color: '#38BCA4' }}>街舞</b>} key="4-1-2" />
                                            <TreeNode value="4-1-3" title={<b style={{ color: '#38BCA4' }}>桑巴</b>} key="4-1-3" />
                                        </TreeNode>
                                    </TreeNode>
                                    {/* <TreeNode value="5-0-0" title="乐器" key="0-3">
                                        <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                                            <TreeNode value="3-1-0" title={<b style={{ color: '#08c' }}>语文</b>} key="random" />
                                            <TreeNode value="3-1-1" title={<b style={{ color: '#08c' }}>数学</b>} key="random" />
                                            <TreeNode value="3-1-2" title={<b style={{ color: '#08c' }}>英语</b>} key="random" />
                                        </TreeNode>
                                        <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                                            <TreeNode value="3-1-0" title={<b style={{ color: '#08c' }}>语文</b>} key="random" />
                                            <TreeNode value="3-1-1" title={<b style={{ color: '#08c' }}>数学</b>} key="random" />
                                            <TreeNode value="3-1-2" title={<b style={{ color: '#08c' }}>英语</b>} key="random" />
                                        </TreeNode>
                                    </TreeNode> */}
                                </TreeSelect>
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
                            <FormItem label="课程描述" {...formItemLayout}>
                                {getFieldDecorator('goodsDescription', {
                                    validateTrigger: ["onBlur"],
                                    rules: [{
                                        required: true,
                                        message: '请输入课程描述',
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