import React from 'react'
// import SimpleImageSlider from "react-simple-image-slider";



import { SalesImage2 } from '../../helpers/dummy'

interface State {
    imageBannerInfo : {
        width : number;
        height : number;
        images : { url : string }[];
        showNavs : boolean; 
        showBullets : boolean;	
    }
}


class ImageBanner extends React.Component<{}, State> {
    state : State = {
        imageBannerInfo : {
            width : 600,
            height : 600,
            images : SalesImage2,
            showNavs : true,
            showBullets : true
        }
    }
    SimpleImageSlider = '';

    

    render(){
        // const {width, height, images , showNavs, showBullets } = this.state.imageBannerInfo
        return (
            <>
                <div className ="imageBanner">
                    <img className ="imageCard"
                        src = '../../static/images/bannerImage.jpg'
                    /> 
                    {/* <SimpleImageSlider width ={width} height={height} images={images} showNavs={showNavs} showBullets={showBullets}/> */}
                </div>
            </>
        )
    }
}


export default ImageBanner