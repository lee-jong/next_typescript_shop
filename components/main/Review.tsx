import React from 'react'
import ImageCard from '../common/ImageCard'


class Review extends React.Component {
    state = {
        item : ['1','2','3','4','5','6']
    
    }
    render(){
        let { item } = this.state
        return (
            <>
                <div className="review">
                    <h1>
                        <span>리뷰</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="imageBoard">
                        {/* {item.map((item, index) => 
                            <ImageCard key={index}/>
                        )} */}
                    </div>
                </div>
            </>
        )
    }
}


export default Review