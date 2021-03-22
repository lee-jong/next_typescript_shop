import React from 'react'


class Login extends React.Component {
    render(){
        return (
            <div className ="login">
                <div className="headerPath"></div>
                <div className = "loginBox">
                    <div className ="loginTitle">
                        <span>LOGIN</span>
                    </div>
                    <div className="loginContent">
                        <input type="text" placeholder="아이디"/>
                        <input type="text" placeholder="비밀번호"/>
                        <button className ="btn-black">로그인</button>
                    </div>
                    <div className="loginPassPortBox">
                        <div className="passPort naver">
                            <img src = '../../static/images/Logo2.png'/><div> NAVER 로그인</div>
                        </div>
                        <div className="passPort kakao">
                            <img src = '../../static/images/Logo2.png'/><div> 카카오 로그인</div>
                        </div>
                    </div>
                    <div className="loginFind">
                        <span className="find">아이디 찾기</span>
                        <span className='bar'/>
                        <span className="find">비밀번호 찾기</span>
                    </div>
                    <div className="loginFooter">
                        <button className ="btn-gray">회원가입</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login