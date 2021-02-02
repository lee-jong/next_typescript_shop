import React from 'react'

// Component
import ImageCard from '../common/ImageCard'


class Sales extends React.Component {
    state = {
        page : 1
    }

    render (){
        return (
            <>
                <div className="Sales">
                    <h1>
                        <span>Title</span>
                        <span>SubTitle</span>
                    </h1>
                    <div className="Slide">
                        <ImageCard page = {this.state.page}/>
                        <ImageCard page = {this.state.page}/>
                        <ImageCard page = {this.state.page}/>
                        <ImageCard page = {this.state.page}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Sales