import React from 'react'
import { $nextRouter } from '../../helpers/nextUtil'

class UserInfo extends React.Component {
    render() {
        return (
            <div className = "userInfo">
                <div>
                    <span onClick={() => $nextRouter('/')}>홈</span>
                    <span className="bar"/>
                    <span onClick={() => $nextRouter('/login')}>로그인</span>
                    <span className="bar"/>
                    <span onClick={() => $nextRouter('/user/join')}>회원가입</span>
                </div>
                <div>
                    <span onClick={() => $nextRouter('/basket')}>장바구니</span>
                    <span className="bar"/>
                    <span>마이페이지</span>
                    <span className="bar"/>
                    <span>커뮤니티</span>
                    <span className="bar"/>
                    <span>문의사항</span>
                </div>
            </div>
        )
    }
}

export default UserInfo