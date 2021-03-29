import React from 'react'

import Noti from '../../components/comm/Noti'
import Event from '../../components/comm/Event'
import Qa from '../../components/comm/Qa'
import Review from '../../components/comm/Review'

class Comm extends React.Component {
    state = {
        active : 1
    }

    handleActive = (active : number ) => {
        this.setState({
            active
        })
    }

    render(){
        let { active } = this.state
        return (
            <div className="comm">
                <div className="commContainer">
                    <div className="commHeader">
                        <div onClick={() => this.handleActive(1)} className ={ active == 1 ? 'chkHeader' : ''}>공지사항</div>
                        <div onClick={() => this.handleActive(2)} className ={ active == 2 ? 'chkHeader' : ''}>이벤트</div>
                        <div onClick={() => this.handleActive(3)} className ={ active == 3 ? 'chkHeader' : ''}>문의사항</div>
                        <div onClick={() => this.handleActive(4)} className ={ active == 4 ? 'chkHeader' : ''}>리뷰</div>
                    </div>
                    {active == 1 && <Noti />}
                    {active == 2 && <Event />}
                    {active == 3 && <Qa />}
                    {active == 4 && <Review />}
                </div>
            </div>
        )
    }
}

export default Comm