import Head from "next/head"

type SEOProps = {
  title?: string
  description?: string
  og?: string
}

export default function SEO({
  title = "Tyler Benning",
  og = "og-home.png",
  description = "Tyler Benning is a product designer who fiddles with front end code.",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Tyler Benning" />
      <meta
        property="og:image"
        content={`https://tylerbenning.com/images/meta/${og}`}
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="twitter:image"
        content={`https://tylerbenning.com/images/meta/${og}`}
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="tylerbenning_" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="meta/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="meta/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="meta/favicon-16x16.png"
      />
      <link rel="manifest" href="meta/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}
