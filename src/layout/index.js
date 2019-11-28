import React from 'react';
import './index.css';


export default class CommonLayout extends React.Component {


    /**
     * 获取子元素
     * @param {} name 标签名 
     */
    selectChildren = (name) => {
        /* 只有一个子元素时 children是对象，有多个子元素时是数组 */
        return this.props.children.length !== undefined ? this.props.children.map((item) => {
            if (item.type.name === name) return item;
        }) : this.props.children;
    }

    render() {

        return (
            <div className="c-layout">
                <div className="left-l">
                    {this.selectChildren('Sider')}
                </div>
                <div className="head-l">
                    {this.selectChildren('Header')}
                </div>
                <div className="content-l">
                    {this.selectChildren('Content')}
                </div>
                <div className="footer-l">
                    {this.selectChildren('Footer')}
                </div>
            </div>
        )
    }

}