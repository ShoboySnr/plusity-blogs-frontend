import React, { useEffect } from 'react';
import Router from 'next/router';
import '../styles/main.css';
import HEAD from 'next/head';

function MyApp({ Component, pageProps, ...rest }: any): JSX.Element {
  // @ts-ignore
  const { Layout, ...others } = Component;

  if (Layout) {
    return (
      <>
        <HEAD>
          <link rel="icon" type="image/png" href="/images/YLW-Favicon 2.png" />
        </HEAD>
        <Layout {...others} {...rest} {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }

  return (
    <>
      <HEAD>
        <link rel="icon" type="image/png" href="/images/YLW-Favicon 2.png" />
      </HEAD>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
