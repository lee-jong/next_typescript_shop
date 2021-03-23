import React from 'react'



class userJoin extends React.Component {
    render(){
        return (
            <div className="userJoin">
                <div className="userJoinContainer">
                    <div className="title">
                        <span>회원가입</span>
                    </div>
                    <div className="userJoinBox">
                        <div className="userContent">
                            <span>아이디</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>비밀번호</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>비밀번호 확인</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>이름</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>생년월일</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>주소</span>
                            <div className="addr">
                                <div>
                                    <input type="text" />
                                    <button className="btn-white">주소찾기</button>
                                </div>
                                <div>
                                    <input type="text" />
                                    <span> 주소 </span>
                                </div>
                                <div>
                                    <input type="text" />
                                    <span> 나머지 주소 </span>
                                </div>
                            </div>
                        </div>
                        <div className="userContent">
                            <span>일반전화</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>휴대전화</span>
                            <input type="text" />
                        </div>
                        <div className="userContent">
                            <span>이메일</span>
                            <input type="text" />
                        </div>
                        <div className="userJoinFooter">
                            <button className="btn-black">회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default userJoin