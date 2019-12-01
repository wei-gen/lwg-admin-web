import React from 'react';
import './index.css';

export default class Header extends React.Component {



    render() {

        return (
            <div className="ly-header">
                <span className="head-user">
                    <span>
                        <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"></img>
                    </span>
                    <span>
                        admin
                    </span>
                </span>

                <span className="head-exit">
                    {/* <a href="#">
                        退出
                    </a> */}
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        退出
                    </a>
                </span>
            </div>
        )
    }

}