import React from 'react'


class Qa extends React.Component {
    state = {
        active : ''
    }


    handleActive = (active : string) => {
        this.setState({
            active 
        })
    }

    render(){
        let rkfl = ['1','2','3','4','5','6','7','8','9','10']
        let { active } = this.state
        return (
            <>
                <table className="commBox">
                    <colgroup>
                        <col className="col180"/>
                        <col className="colAuto"/>
                        <col className="col180"/>
                    </colgroup>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>제목</td>
                            <td>작성자</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rkfl.map((item) => {
                            if(active == item ) {
                                return (
                                    <>
                                    <tr onClick={() => this.handleActive(item)} className = { active == item ? 'commActive' : ''}>
                                        <td className="commActiveItem">{item}</td>
                                        <td className="commActiveItem">제목</td>
                                        <td className="commActiveItem">J-Shop</td>
                                    </tr>
                                    <tr className="commContent">
                                        <th colSpan={3}>
                                            rkfl;
                                        </th>
                                    </tr>
                                    </>
                                )
                            }
                            if(active != item){
                                return (
                                    <tr onClick={() => this.handleActive(item)}>
                                        <td>{item}</td>
                                        <td>제목</td>
                                        <td>J-Shop</td>
                                    </tr>
                                )
                            }
                        }
                        )}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Qa