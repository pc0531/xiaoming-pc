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
                        <img src='http://sjbz.fd.zol-img.com.cn/t_s1080x1920c/g5/M00/0E/08/ChMkJ1rdiOmISLfOAAK6M6ALnEwAAn0ugIe20kAArpL111.jpg' />
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-left'>
                    <a>
                        <img src='https://pic.qqtn.com/up/2018-4/15241069988679136.jpg' />
                        <p style={{color:'#3cb46d'}}>新东方高级讲师</p>
                        <p style={{ paddingTop: '10px' }}>誉为</p>
                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-top'>
                    <a>
                        <img src='https://pic.qqtn.com/up/2018-4/15241069979748106.jpg' />
                        <div>
                            <p style={{color:'#3cb46d'}}>北京师范大学</p>
                            <p>于成冠</p>
                        </div>

                    </a>
                </li>
                <li className='recommendTeacher-bottom-center-top' style={{ marginTop: '16px' }}>
                    <a>
                        <img src='https://pic.qqtn.com/up/2018-4/15241069973913679.jpg' />
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
