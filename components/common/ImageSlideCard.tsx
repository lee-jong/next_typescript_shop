import React from 'react'

interface imageCardProps { 
    imageInfo : {
        id : number
        image : string
        title : string
        content : string
    };
}

const ImageSlideCard  = ({ imageInfo } : imageCardProps) =>{
    let { image } = imageInfo
    return (
        <div className="card">
            <img className ="imageCard"
                src = { image }
            /> 
        </div>
    )
}

export default ImageSlideCard