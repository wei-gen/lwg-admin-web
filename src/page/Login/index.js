import React from 'react';
import './index.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    /**
     * 处理登录
     */
    handleLogin = () => {
        console.log("登录成功")
    }

    /**
     * 处理用户名变化
     */
    usernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    /**
     * 处理密码变化
     */
    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-frame">
                    <h1>LWG-ADMIN</h1>
                    <input type="text" className="username" placeholder="用户名"></input>
                    <input type="password" className="password" placeholder="密码"></input>
                    <input type="submit" className="login-but" value="登录" onClick={this.handleLogin}></input>
                </div>
            </div>
        )
    }

}