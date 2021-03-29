const Shopping = () => {
    let rkfl = ['1','1','1','1','1','1','1','1']
    return (
        <table className = "MyPageTableBox">
            <colgroup>
                <col className="col140"/>
                <col className="col300" />
                <col className="colAuto"/>
                <col className="colAuto"/>
                <col className="colAuto"/>
            </colgroup>
            <thead>
                <tr>
                    <td>NO.</td>
                    <td>이미지</td>
                    <td>상품명</td>
                    <td>상태</td>
                    <td>수량</td>
                    <td>발송주소</td>
                </tr>
            </thead>
            <tbody>
                {rkfl.map(() => (
                    <tr>
                        <td>1</td>
                        <td><img src = "../../static/images/dev.jpg"/></td>
                        <td>상품명</td>
                        <td>상태</td>
                        <td>수량</td>
                        <td>발송주소</td>
                     </tr>   
                ))}
            </tbody>
        </table>
    )
}


export default Shopping