import React from 'react';
import './index.css';

export default class Sider extends React.Component {

    render() {
        return (
            <div className="sider-con">
                <div className="logo">
                    <span>LWG-ADMIN</span>
                </div>
                <div className="menu">
                    <li className="item" id="item-id">
                        <span className="btn"><i></i>aa</span>
                        <div className="menu-link">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                    <li className="item" id="m">
                        <span className="btn"><i></i>aa</span>
                        <div className="menu-link">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                    <li className="item" id="g">
                        <span className="btn"><i></i>aa</span>
                        <div className="menu-link">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                    <li className="item" id="d">
                        <span className="btn"><i></i>aa</span>
                        <div className="menu-link">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                </div>
            </div>
        )
    }

}