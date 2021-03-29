import React from 'react'

import MyPageInfo from '../../components/myPage'
import Shipping from '../../components/myPage/Shipping'
import Buy from '../../components/myPage/Buy'



class MyPage extends React.Component {
    state = {
        header : 1
    }


    handleHeader = ( num : number ) => {
        this.setState({
            header : num
        })
    }

    render(){
        let { header } = this.state
        return (
            <div className="myPage">
                <div className="myPageContainer">
                    <div className="title">
                        <span>MyPage</span>
                    </div>
                    <div className="myPageHeader">
                        <div onClick={() => this.handleHeader(1)} className = { header == 1 ? 'chkHeader' : '' }>기본정보</div>
                        <div onClick={() => this.handleHeader(2)} className = { header == 2 ? 'chkHeader' : '' }>배송중</div>
                        <div onClick={() => this.handleHeader(3)} className = { header == 3 ? 'chkHeader' : '' }>구매현황</div>
                    </div>
                    {header == 1 && <MyPageInfo /> }
                    {header == 2 && <Shipping /> }
                    {header == 3 && <Buy /> }
                </div>
            </div>
        )
    }
}

export default MyPage