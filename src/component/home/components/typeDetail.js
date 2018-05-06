import React, { Component } from 'react'
import { Link } from "react-router-dom"

const A = [
    {
        id:0,
        content:(
            <div className='typeDetail'>
                <div className='innerBox'>
                    <div className='boxContent'>
                        <p>进阶A</p>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                    </div>
                    <div className='boxContent'>
                        <p>进阶A</p>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
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
                        <p>进阶B</p>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                    </div>
                    <div className='boxContent'>
                        <p>进阶</p>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
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
                        <p>进阶C</p>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                    </div>
                    <div className='boxContent'>
                        <p>进阶</p>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
                        <Link to='/home'>123123</Link>
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
        // console.error("a:"+a?a.content:0)
        return (
            a?a.content:<div></div>
        )
    }
}