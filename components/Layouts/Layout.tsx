import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { NONAME } from 'dns'

type LayoutProps = {
  title?: string
}
const layoutStyle = {
  margin: 20,
  padding: 20,
}
const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <div style={layoutStyle}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
)
export default Layout