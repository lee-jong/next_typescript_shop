import React from 'react'

class UserInfo extends React.Component {
    render() {
        return (
            <div className = "userInfo">
                <div>
                    <span>로그인</span>
                    <span>회원가입</span>
                </div>
                <div>
                    <span>장바구니</span>
                    <span>마이페이지</span>
                    <span>커뮤니티</span>
                    <span>문의사항</span>
                </div>
            </div>
        )
    }
}

export default UserInfo