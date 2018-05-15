import React, { Component } from "react"
import Menu from './components/menu'
import TypeDetail from './components/typeDetail'
import RecommendClass from './components/recommendClass'
import RecommendTeacher from './components/recommendTeacher'
import RecommendSchool from './components/recommendSchool'
import { Link } from "react-router-dom"


class Home extends Component {
    state = {
        activeId: -1
    }

    render() {
        let activeId = this.state.activeId;

        return (
            <div className='home'>
                <div className='banner'>
                    <div className='bannerContent'
                        onMouseLeave={() => {
                            this.setState({ activeId: -1 })
                        }}
                    >
                        <Menu
                            activeId={activeId}
                            onMouseOver={(id) => {
                                this.setState({ activeId: id })
                            }}
                        />
                        <TypeDetail activeId={activeId} />
                        <div className='bannerRight'>
                            <img src='//img1.sycdn.imooc.com/5ad40b8e0001983009360316.jpg' />
                        </div>

                    </div>
                </div>
                <RecommendTeacher />
                <RecommendSchool />
                <RecommendClass />

            </div>
        )
    }
}

export default Home;