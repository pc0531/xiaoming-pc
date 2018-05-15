import React, { Component } from 'react'
import { Link } from "react-router-dom"

const A = [
    {
        id:0,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>幼儿</p>
                        <Link to='/home'>语文</Link>
                        <Link to='/home'>数学</Link>
                        <Link to='/home'>英语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>幼儿多元化智能</p>
                        <Link to='/home'>语文</Link>
                        <Link to='/home'>数学</Link>
                        <Link to='/home'>英语</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )

    },
    {
        id:1,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>1-3年级</p>
                        <Link to='/home'>语文</Link>
                        <Link to='/home'>数学</Link>
                        <Link to='/home'>英语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>4-6年级</p>
                        <Link to='/home'>语文</Link>
                        <Link to='/home'>数学</Link>
                        <Link to='/home'>英语</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )

    },
    {
        id:2,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>主修</p>
                        <Link to='/home'>语文</Link>
                        <Link to='/home'>数学</Link>
                        <Link to='/home'>外语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>辅修</p>
                        <Link to='/home'>生物</Link>
                        <Link to='/home'>历史</Link>
                        <Link to='/home'>化学</Link>
                        <Link to='/home'>物理</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:3,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>技能</p>
                        <Link to='/home'>CET</Link>
                        <Link to='/home'>托福</Link>
                        <Link to='/home'>雅思</Link>
                    </div>
                    <div className='boxContent'>
                        <p>专业</p>
                        <Link to='/home'>计算机</Link>
                        <Link to='/home'>会计</Link>
                        <Link to='/home'>考研</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:4,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>乐器</p>
                        <Link to='/home'>钢琴</Link>
                        <Link to='/home'>吉他</Link>
                        <Link to='/home'>小提琴</Link>
                    </div>
                    <div className='boxContent'>
                        <p>舞蹈</p>
                        <Link to='/home'>poping</Link>
                        <Link to='/home'>国标舞</Link>
                        <Link to='/home'>街舞</Link>
                        <Link to='/home'>桑巴</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },
    {
        id:5,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>主修</p>
                        <Link to='/home'>语文</Link>
                        <Link to='/home'>数学</Link>
                        <Link to='/home'>外语</Link>
                    </div>
                    <div className='boxContent'>
                        <p>辅修</p>
                        <Link to='/home'>生物</Link>
                        <Link to='/home'>历史</Link>
                        <Link to='/home'>化学</Link>
                        <Link to='/home'>物理</Link>
                    </div>
        
                </div>
                <div className='recommondBox'>
                </div>
            </div>
        )
    },

]



export default class TypeDetail extends Component {
    render() {
        let a = A.find((ele)=>(ele.id === this.props.activeId))
        return (
            a?a.content:<div></div>
        )
    }
}