import Head from 'next/head'

import { seo } from '../data/data'
import logo from '../assets/logo.svg'

const SEO = ({
  title = seo.title,
  description = seo.description,
  favicon,
  url = seo.url,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={logo.src} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </Head>
  )
}

export default SEO
