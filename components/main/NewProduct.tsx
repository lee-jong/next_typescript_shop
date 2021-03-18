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

interface Props {
    list : ImageList[];
}

class NewProduct extends React.Component<Props> {
    render(){
        let { list } = this.props
        return (
            <>
                <div className = "newProduct">
                    <h1>
                        <span>신상품</span>
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

export default NewProduct