import React from 'react'
import { Helmet } from 'react-helmet'

function SEOHead({ title, description, keywords, image, url }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
      <meta
        name='keywords'
        content={keywords}
      />
      <meta
        property='og:title'
        content={title}
      />
      <meta
        property='og:description'
        content={description}
      />
      <meta
        property='og:image'
        content={image}
      />
      <meta
        property='og:url'
        content={url}
      />
      <meta
        name='twitter:title'
        content={title}
      />
      <meta
        name='twitter:description'
        content={description}
      />
      <meta
        name='twitter:image'
        content={image}
      />
      <link
        rel='canonical'
        href={url}
      />
    </Helmet>
  )
}

export default SEOHead
