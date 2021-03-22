import React from 'react'

class ImageBanner extends React.Component {
    render(){
        return (
            <>
                <div className ="imageBanner">
                    <img className ="imageCard"
                        src = '../../static/images/bannerImage.jpg'
                    /> 
                </div>
            </>
        )
    }
}


export default ImageBanner