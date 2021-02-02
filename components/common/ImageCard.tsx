import React from 'react'

interface imageCardProps { 
    page : Number;
}

const ImageCard  = ({page} : imageCardProps) =>{
    return (
        <>
        {page == 1 ? 
            <img className ="imageCard"
                 src = "../../static/images/dev.jpg"
            /> 
            :
            <img className ="imageCard"
                 src = "../../static/images/dev.jpg"
            />
        }
         
        </>
    )
}

export default ImageCard