import React from 'react';

//Component
import ImageBanner from '../components/main/ImageBanner'
import NewProduct from '../components/main/NewProduct'
import Review from '../components/main/Review'
import Sales from '../components/main/Sales'

import { DummyNewProductImg } from '../helpers/dummy'

interface ImageList {
  id : Number,
  title : String,
  sub: String,
  url : String,
  price : Number,
  sale : Number,
  color : String[]
}

interface Props {
  newProductList : ImageList[];
}


class Home extends React.Component<Props> {
  static async getInitialProps({}) {
    let newProductList = await DummyNewProductImg
    return {
      newProductList
    };
  }
  render() {
    let { newProductList } = this.props
    return (
      <>
        <div className="body">
            <ImageBanner />
            <Sales />
            <NewProduct list ={ newProductList }/>
            <Review />
        </div>
      </>
    );
  }
}

export default Home;
