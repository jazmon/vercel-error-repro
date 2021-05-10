import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title id="home-title">My site</title>
          <meta name="description" content="Template Site" />
          <link rel="icon" href="/favicons/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="android-chrome-icon"
            sizes="192x192"
            href="/favicons/android-chrome-192x192.png"
          />
          <link
            rel="android-chrome-icon"
            sizes="512x512"
            href="/favicons/android-chrome-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
