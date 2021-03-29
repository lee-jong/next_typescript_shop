import React from 'react'


const MyPageInfo = () => {
    return (
        <>
            <div className ="myPageBox">
                <div className = "myPageBaseInfo">
                    <div>
                        <img src="../../static/images/dev.jpg"/>
                    </div>
                    <div>
                        <span> ID : syuiop9001 </span>
                        <span> 이름 : 이종 </span>
                        <span> 비밀번호 : ******* </span>
                        <span> 닉네임 : TwoBell </span>
                        <span> 등급 / 다음 등급 까지 </span>
                    </div>
                </div>
                <div className="myPageAddInfo">
                    <div>
                        <span>생년월일 : </span>
                        <span>성별 :</span>
                        <span>주소 : </span>
                        <span>상세주소 : </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyPageInfo