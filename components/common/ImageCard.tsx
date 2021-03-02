import React from 'react'

interface imageCardProps { 
    imageInfo : {
        index : number
        url : string
        title : string
        content : string
    };
}

const ImageCard  = ({ imageInfo } : imageCardProps) =>{
    let { url } = imageInfo
    return (
        <div className="card">
            <img className ="imageCard"
                src = { url }
            /> 
        </div>
    )
}

export default ImageCard