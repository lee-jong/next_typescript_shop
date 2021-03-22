import React from 'react';

//Component
import ImageBanner from '../components/main/ImageBanner'
import NewProduct from '../components/main/NewProduct'
import Review from '../components/main/Review'
import Popularity from '../components/main/Popularity'

import { DummyNewProductImg, DummyReviewImg, PublicImage } from '../helpers/dummy'


interface imageList {
  newProductList : Array<any>;
  reviewList : Array<any>;
  publicList : Array<any>;
}


class Home extends React.Component<imageList> {
  static async getInitialProps({}) {
    let newProductList = await DummyNewProductImg
    let reviewList = await DummyReviewImg
    let publicList = await PublicImage
    return {
      newProductList,
      reviewList,
      publicList
    };
  }
  render() {
    let { newProductList, reviewList, publicList } = this.props
    return (
      <>
        <div className="body">
            <ImageBanner />
            <Popularity list = {publicList}/>
            <NewProduct list = { newProductList }/>
            <Review list = { reviewList }/>
        </div>
      </>
    );
  }
}

export default Home;
