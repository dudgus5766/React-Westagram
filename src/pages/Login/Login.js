import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import './Login.scss';


class Login extends Component {
    goToMain = () => {
        this.props.history.push("/main");
    }
    render() {
        return (
            <div className="login">
                <div className="background">
                    <h1>Westagram</h1>
                    <div className="boxes">
                        <input type="text" className ="id" placeholder="전화번호, 사용자 이름 또는 이메일" />
                        <input type="password" className = "pw" placeholder="비밀번호" />
                        <button type="button" className="loginBtn" onClick={this.goToMain}>로그인</button>
                    </div>
                    <span>비밀번호를 잊으셨나요?</span>
                </div>
            </div>
        );
    }
}

export default Login;