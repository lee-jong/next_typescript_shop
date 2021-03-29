const Buy = () => {
    let rkfl = ['1','1','1','1','1','1','1','1']
    return (
        <table className = "MyPageTableBox">
            <colgroup>
                <col style={{width : '80px'}} />
                <col style={{width : '300px'}} />
                <col style={{width : 'auto'}} />
                <col style={{width : 'auto'}} />
                <col style={{width : 'auto'}} />
            </colgroup>
            <thead>
                <tr>
                    <td>NO.</td>
                    <td>이미지</td>
                    <td>상품명</td>
                    <td>상태</td>
                    <td>후기</td>
                </tr>
            </thead>
            <tbody>
                {rkfl.map(() => (
                    <tr>
                        <td>1</td>
                        <td><img src = "../../static/images/dev.jpg"/></td>
                        <td>상품명</td>
                        <td>상태</td>
                        <td>후기</td>
                     </tr>   
                ))}
            </tbody>
        </table>
    )
}

export default Buy