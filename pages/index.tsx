import React from 'react';

//Component
import ImageBanner from '../components/main/ImageBanner'
import NewProduct from '../components/main/NewProduct'
import Review from '../components/main/Review'
import Sales from '../components/main/Sales'


class Home extends React.Component {
  static async getInitialProps({}) {
    return {};
  }
  render() {
    return (
      <>
        <div className="body">
            <ImageBanner />
            <Sales />
            <NewProduct />
            <Review />
        </div>
      </>
    );
  }
}

export default Home;
