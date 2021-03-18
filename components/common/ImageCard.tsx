import React from 'react'
import * as Icon from 'react-bootstrap-icons';


interface itemInfo {
    id : number,
    title : string,
    sub: string,
    image : string,
    price : number,
    sale : number,
    color : string[]
}

interface Props {
    item : itemInfo;
}

class ImageCard extends React.Component<Props> {
    render (){
        let { image, title, sub, price, color, sale } = this.props.item
        console.log("check object", this.props.item)
        return (
            <>
                <div className="imageBoard_card">
                    <span className={sale > 0 ? "boxHide salesPercent" : 'boxHide'}>
                        {sale}%
                    </span>
                    <img
                        src = { image }
                    />
                    <div>
                        <div className="color_container">
                            {color.length > 0 && color.map((cr, idx) =>
                                <div className="colorBox" key={idx} style={{backgroundColor : `${cr}`}}></div>
                            )}
                        </div>
                        <div>
                            <span className="card_title">{title}</span>
                        </div>
                    </div>
                    <div className="info_container">
                        <div>
                            <span>{sub}</span>
                        </div>
                        <div>
                            <span className={`${sale > 0 && 'del_line'}`}>{price}원</span>
                            {sale > 0 && 
                                <>
                                    <span className="icon arrow"><Icon.ArrowRight size={10}/></span> 
                                    <span className="arrow" style={{color : '#FF0000'}}>{ Math.ceil(price * ((100 - sale) / 100))}원</span>
                                </>
                            }
                        </div>
                    </div>
                    <div className="icon_container">
                        <span className="icon"><Icon.MenuDown size={24}/></span>
                        <span className="icon"><Icon.Cart3 size={24}/></span>
                        <span className="icon"><Icon.Heart size={24}/></span>
                        <span className="icon"><Icon.ZoomIn size={24}/></span>
                    </div>
                </div>
            </>
        )
    }
}
export default ImageCard