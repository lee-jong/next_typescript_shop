import React from 'react'
import * as Icon from 'react-bootstrap-icons';


class NewProduct extends React.Component {
    render(){
        return (
            <>
                <div className = "newProduct">
                    <h1>
                        <span>신상품</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="imageBoard">
                        {/* Start 여기서부터 Component 모듈로 생성 */}
                        <div className="imageBoard_card">
                            <img
                                src = '../../static/images/dev.jpg'
                            />
                            <div>
                                <div className="color_container">
                                    {/* DB에서 받아온 컬러를 사용할 수 있도록 */}
                                    <div style={{backgroundColor : 'red'}}></div>
                                    <div style={{backgroundColor : 'green'}}></div>
                                </div>
                                <div>
                                    <span className="card_title">title</span>
                                </div>
                            </div>
                            <div className="info_container">
                                <div>
                                    <span>설명</span>
                                </div>
                                <div>
                                    <span>가격</span>
                                </div>
                            </div>
                            <div className="icon_container">
                                <span className="cart_icon"><Icon.MenuDown size={24}/></span>
                                <span className="cart_icon"><Icon.Cart3 size={24}/></span>
                                <span className="cart_icon"><Icon.Heart size={24}/></span>
                                <span className="cart_icon"><Icon.ZoomIn size={24}/></span>
                            </div>
                        </div>
                        {/* 여기까지 */}
                        <div className="imageBoard_card">
                            <img
                                src = '../../static/images/dev.jpg'
                            />
                            <div>
                                <div>
                                    color
                                </div>
                                <div>
                                    title
                                </div>
                            </div>
                            <div>
                                <div>
                                    설명
                                </div>
                                <div>
                                    가격
                                </div>
                            </div>
                            <div>
                                아이콘
                            </div>
                        </div>
                        <div className="imageBoard_card">
                            <img
                                src = '../../static/images/dev.jpg'
                            />
                            <div>
                                <div>
                                    color
                                </div>
                                <div>
                                    title
                                </div>
                            </div>
                            <div>
                                <div>
                                    설명
                                </div>
                                <div>
                                    가격
                                </div>
                            </div>
                            <div>
                                아이콘
                            </div>
                        </div>
                        <div className="imageBoard_card">
                            <img
                                src = '../../static/images/dev.jpg'
                            />
                            <div>
                                <div>
                                    color
                                </div>
                                <div>
                                    title
                                </div>
                            </div>
                            <div>
                                <div>
                                    설명
                                </div>
                                <div>
                                    가격
                                </div>
                            </div>
                            <div>
                                아이콘
                            </div>
                        </div>
                        <div className="imageBoard_card">
                            <img
                                src = '../../static/images/dev.jpg'
                            />
                            <div>
                                <div>
                                    color
                                </div>
                                <div>
                                    title
                                </div>
                            </div>
                            <div>
                                <div>
                                    설명
                                </div>
                                <div>
                                    가격
                                </div>
                            </div>
                            <div>
                                아이콘
                            </div>
                        </div>
                        <div className="imageBoard_card">
                            <img
                                src = '../../static/images/dev.jpg'
                            />
                            <div>
                                <div>
                                    color
                                </div>
                                <div>
                                    title
                                </div>
                            </div>
                            <div>
                                <div>
                                    설명
                                </div>
                                <div>
                                    가격
                                </div>
                            </div>
                            <div>
                                아이콘
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewProduct