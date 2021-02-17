import React from 'react'
import * as Icon from 'react-bootstrap-icons';

// Component
import ImageCard from '../common/ImageCard'
// Util
import { SalesImage, perPage } from '../../helpers/dummy'


class Sales extends React.Component {
    state = {
        page : 1,
        maxPage : SalesImage.length / perPage
    }

    next = () : void => {
        console.log("next")
        let { page, maxPage } = this.state
        if(maxPage <= page) {
            this.setState({
                page : 1
            })
        }else{
            this.setState({
                page  : page + 1
            })
        }
    }

    pre = () : void => {
        let { page, maxPage } = this.state
        if(1 >= page) {
            this.setState({
                page : maxPage
            })
        }else{
            this.setState({
                page : this.state.page - 1
            })
        }
    }

    render (){
        let { page } = this.state
        return (
            <>
                <div className="Sales">
                    <h1>
                        <span>세일 상품</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="Slide">
                        <Icon.ChevronCompactRight onClick={this.next} size={30}/>
                        <div className="Slide_Container" style={{ transform : 'translate(-' + (page - 1) * 1353.5 + 'px, 0px)' }}>
                            {SalesImage.map((item, index) => 
                                <ImageCard imageInfo={item} key = {index}/>
                                )}
                        </div>
                        <Icon.ChevronCompactLeft onClick={this.pre} size={30}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Sales