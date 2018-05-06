import React, { Component } from 'react'
const initMenu = [
    {
        id: 0,
        title: '初级教育'
    },
    {
        id: 1,
        title: '高等教育'
    },
    {
        id: 2,
        title: '成人教育'
    },
    {
        id: 3,
        title: '幼儿教育'
    },
    {
        id: 4,
        title: '厨艺'
    },
    {
        id: 5,
        title: '乐器'
    },
    {
        id: 6,
        title: '乐器'
    }
]

export default class Menu extends Component {
    state = {
        activeId: -1
    }

    render() {
        let activeId = this.state.activeId;
        return (
            <div className='menu'>
                {
                    initMenu.map((ele, index) => (
                        <div className={`menuDetail` + ` ` + `${activeId === ele.id ? `menuDetailActive` : ``}`}
                            key={ele + index}
                            onMouseOver={() => {
                                this.setState({ activeId: ele.id })
                                this.props.onMouseOver(ele.id);
                            }}
                            onMouseLeave={() => {
                                this.setState({ activeId: -1 })
                                this.props.onMouseLeave();
                            }}
                        >
                            <a>
                                <span>{ele.title}</span>
                                <i></i>
                            </a>
                        </div>
                    ))
                }

            </div>
        )
    }
}