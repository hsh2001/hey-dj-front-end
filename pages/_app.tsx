import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>신청곡이요</title>
          <link rel="icon" href="/favicon.ico" />

          <link
            href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css"
            rel="stylesheet"
          />
        </Head>
        <SWRConfig
          value={{
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            fetcher: (...args) => fetch(...args).then((res) => res.json()),
          }}
        >
          <RecoilRoot>
            <Component {...pageProps} />
          </RecoilRoot>
        </SWRConfig>
      </>
    );
  }
}

export default MyApp;
