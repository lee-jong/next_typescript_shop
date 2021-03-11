import React from 'react'


const Footer = () => {
    return (
        <>
            <div className = "footer">
                <div className="footer_top">
                    <div>
                        <div>
                            {/* 기본 나중에 바꾸고 싶은 링크로 수정 */}
                            <span>회사소개</span><span className="bar"/>
                            <span>이용약관</span><span className="bar"/>
                            <span>개인정보취급방침</span><span className="bar"/>
                            <span>이용안내</span><span className="bar"/>
                            <span>제휴문의</span>
                        </div>
                        <div>
                            <span>아이콘</span><span className="bar"/>
                            <span>아이콘</span>
                        </div>
                    </div>
                </div>
                <div className="footer_body">
                    <div>
                        <ul>
                            <li>
                                <span className="font_mini">CUSTOMER CENTER</span>
                                <div>
                                    <span>i</span> &nbsp;&nbsp;
                                    <span className="font_big">1588-1588</span>
                                </div>
                                <span className="font_mini">월~금 13:00 ~ 17:00 / 토,일,공휴일 휴무</span>
                                <div>
                                    <span className="font_mini">
                                        * 본 쇼핑몰(J-shop)의 사진에 대한 저작권 및 초상권은 J-shop에 있으며, 본 쇼핑몰과 합의되지 않은 이용은 적벌 시 법적처벌과 손해배상을 청구할 수 있습니다.
                                    </span> 
                                </div>
                                <div className="font_mini">
                                    문의메일 : syuiop9001@nate.com
                                </div>
                            </li>
                            <span className="bar2"/>
                            <li>
                                <div>
                                    <span className="font_mini">ACCOUNT INFO</span>
                                </div>
                                <div>
                                    <span className="font_mini">우리    1002-046-997728</span><br/>
                                    <span className="font_mini">카카오  3333-01-6822351</span>
                                </div>
                            </li>
                            <span className="bar2"/>
                            <li>
                                <div>
                                    <span className="font_mini">여기엔 무엇을.</span>
                                </div>
                                <div>
                                    <span className="font_mini">생각해보장</span><br/>
                                    <span className="font_mini">생각해보장</span>
                                </div>
                            </li>
                            <span className="bar2"/>
                            <li>
                                <div>
                                    <span className="font_mini">RETURN / EXCHANGE</span>
                                </div>
                                <div>
                                    <span className="font_mini">경기도 광주시 새오개길 6-106 프레리움B동 1층</span><br/>
                                    <span className="font_mini">이하 주소</span>
                                </div>
                                <div>
                                    <span className="font_mini">* 자세한 교환 및 반품에 관한 안내는 문의사항 및 공지사항을 참고하여주세요.</span>
                                </div>
                                <div>
                                    <span>아이콘</span>
                                    <span>아이콘</span>
                                    <span>아이콘</span>
                                    <span>아이콘</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer 