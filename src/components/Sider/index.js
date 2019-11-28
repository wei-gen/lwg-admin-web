import React from 'react';
import './index.css';

export default class Sider extends React.Component {

    render() {
        return (
            <div className="middle">
                <div className="menu">
                    <li className="item" id="item-id">
                        <a href="#item-id" className="btn"><i></i>aa</a>
                        <div className="smenu">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                    <li className="item" id="m">
                        <a href="#m" className="btn"><i></i>aa</a>
                        <div className="smenu">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                    <li className="item" id="g">
                        <a href="#g" className="btn"><i></i>aa</a>
                        <div className="smenu">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                    <li className="item" id="d">
                        <a href="#d" className="btn"><i></i>aa</a>
                        <div className="smenu">
                            <a href="#">a</a>
                            <a href="#">a</a>
                        </div>
                    </li>
                </div>
            </div>
        )
    }

}