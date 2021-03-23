import React from 'react';
import App, { Container } from 'next/app';
import BaseLayout from '../components/layout/BaseLayout';

interface Props {
  nowPage : string
}


class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx } : any) {
    let pageProps = {};
    let nowPage = ctx.asPath
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, nowPage };
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
  }

  render() {
    const { Component, pageProps, nowPage } = this.props;
    return (
      <Container>
        <BaseLayout nowPage={nowPage}>
          <Component {...pageProps}/>
        </BaseLayout>
      </Container>
    );
  }
}

export default MyApp;
