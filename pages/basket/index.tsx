import React from 'react'


class Basket extends React.Component {
    render(){
        let rkfl = ['1','1','1','1','1','1','1','1','1','1'];
        return (
            <div className="basket">
                <div className="basketContainer">
                    <div className="title">
                        <span>장바구니</span>
                    </div>
                    <div className="basketBox">
                        <table>
                            <colgroup>
                                <col style={{width : '100px' }}/>
                                <col style={{width : '100px' }}/>
                                <col style={{width : '300px' }}/>
                                <col style={{width : 'auto' }}/>
                                <col style={{width : 'auto' }}/>
                                <col style={{width : 'auto' }}/>
                                <col style={{width : '100px;' }}/>
                            </colgroup>
                            <thead>
                                <tr>
                                    <td>NO.</td>
                                    <td>checkbox</td>
                                    <td>이미지</td>
                                    <td>품명</td>
                                    <td>옵션</td>
                                    <td>판매가</td>
                                    <td>수량</td>
                                </tr>
                            </thead>
                            <tbody>
                                {rkfl.map(() => 
                                    <tr className="basketItem">
                                        <td>1</td>
                                        <td><input type="checkbox" /></td>
                                        <td><img src="../../static/images/dev.jpg" /></td>
                                        <td>품명</td>
                                        <td>옵션</td>
                                        <td>판매가</td>
                                        <td>수량</td>
                                    </tr>
                                )}
                                <tr className="basketItemPrice">
                                    <td>주문합계</td>
                                    <td >가격</td>
                                    <td colSpan={6}/>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="basketButtonBox">
                        <button className="btn-black">전체삭제</button>
                        <button className="btn-black">선택삭제</button>
                    </div>
                    <div className="basketCareBox">
                        <span className="font_mini">구매 가능 수량이 1개로 제한된 상품은 주문 취소 시, 24시간 내 가상계좌 재주문이 불가합니다.</span>
                        <span className="font_mini">J-Shop은 기본적으로 전 상품 무료 배송입니다.</span>
                        <span className="font_mini">해외배송 상품은 배송료가 추가로 발생될 수 있습니다.</span>
                        <span className="font_mini">2개 이상 브랜드를 주문하신 경우, 각각 개별 배송됩니다.</span>
                        <span className="font_mini">장바구니에 담은 시점과 현재의 판매 가격이 달라질 수 있습니다.</span>
                        <span className="font_mini">결제 시 각종 할인 적용이 달라질 수 있습니다.</span>
                        <span className="font_mini">수량 제한 상품의 경우, 가상계좌를 통한 주문은 최대 2건까지만 가능합니다.(미입금 주문 기준, 기존 주문 합산)</span>
                    </div>
                    <div className="basketOrderBox">
                        <button className="btn-black"> 주문하기 </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Basket;