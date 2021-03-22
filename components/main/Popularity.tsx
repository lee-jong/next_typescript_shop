import React from 'react'
import * as Icon from 'react-bootstrap-icons';

// Component
import ImageSlideCard from '../common/ImageSlideCard'
// Util
import { perPage } from '../../helpers/dummy'


interface ImageList {
    id : number,
    title : string,
    content: string,
    image : string,
}

interface  Props {
    list : ImageList[];
}

class Sales extends React.Component<Props> {
    state = {
        page : 1,
        maxPage : this.props.list.length / perPage
    }

    next = () : void => {
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
                <div className="Popularity">
                    <h1>
                        <span>인기 상품</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="Slide">
                        <Icon.ChevronCompactRight onClick={this.next} size={30}/>
                        <div className="Slide_Container" style={{ transform : 'translate(-' + (page - 1) * 1353.5 + 'px, 0px)' }}>
                            {this.props.list.map((item, index) => 
                                <ImageSlideCard imageInfo={item} key = {index}/>
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