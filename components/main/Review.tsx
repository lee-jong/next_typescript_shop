import React from 'react'
import ImageCard from '../common/ImageCard'



interface ImageList {
    id : number,
    title : string,
    sub: string,
    image : string,
    price : number,
    sale : number,
    color : string[]
}

interface  Props {
    list : ImageList[];
}

class Review extends React.Component<Props> {
    render(){
        let { list } = this.props
        return (
            <>
                <div className="review">
                    <h1>
                        <span>리뷰</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="imageBoard">
                        {list.map((item : ImageList, index) => 
                            <ImageCard  key={index} item={item}/>
                        )}
                    </div>
                </div>
            </>
        )
    }
}


export default Review