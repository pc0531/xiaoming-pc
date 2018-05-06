import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class RecommendTeacher extends Component {
    render(){
        return(
            <div className='recommendTeacher'>
            <div className='recommendTeacher-top'>
                <h3>名师推荐</h3>
                <span>限时出售 l 性价比高</span>
            </div>
            <ul className='recommendTeacher-bottom'>
                <li className='recommendTeacher-bottom-right'>
                    <a>
                        <img src='http://img3.yxlady.com/mr/UploadFiles_9207/20151021/20151021110728373.jpg' />
                        <div>
                            <p style={{color:'#3cb46d'}}>北京大学</p>
                            <p>李松</p>
                        </div>
                    </a>
                </li>
                <li className='recommendTeacher-bottom-left'>
                    <a>
                        <img src='https://image.guazistatic.com/gz01180207/17/59/9004988288a39bacd6cbe8bcc99e33a9.png@base@tag=imgScale' />
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-left'>
                    <a>
                        <img src='http://img3.duitang.com/uploads/item/201512/25/20151225132409_NKFCh.jpeg' />
                        <p style={{color:'#3cb46d'}}>新东方高级讲师</p>
                        <p style={{ paddingTop: '10px' }}>誉为</p>
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-top'>
                    <a>
                        <img src='http://img4.duitang.com/uploads/item/201407/27/20140727113834_xYLAK.jpeg' />
                        <div>
                            <p style={{color:'#3cb46d'}}>北京师范大学</p>
                            <p>于成冠</p>
                        </div>

                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-top' style={{ marginTop: '16px' }}>
                    <a>
                        <img src='http://f.hiphotos.baidu.com/zhidao/wh%3D600%2C800/sign=73137c5d5243fbf2c579ae25804ee6b8/6f061d950a7b0208cebb66b463d9f2d3572cc871.jpg' />
                        <div>
                            <p style={{color:'#3cb46d'}}>北京师范大学</p>
                            <p>立威廉</p>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
        )
    }
}
