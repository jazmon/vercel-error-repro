import Head from 'next/head'
import { Flex, Heading } from 'theme-ui'
type BaseLayoutProps = {
  children: React.ReactNode
}

export default function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props

  return (
    <Flex sx={{ flexDirection: 'column', minHeight: '100vh' }}>
      <Head>
        <title id="home-title">Site</title>
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

      {children && (
        <Flex
          as="main"
          sx={{
            position: 'relative',
            flexDirection: 'column',
            alignItems: 'center',
            flex: '1',
          }}
          id="main"
        >
          <Heading
            as="h1"
            sx={{
              position: 'absolute',
              width: '1px',
              height: '1px',
              margin: -'1px',
              border: '0',
              padding: '0',
              clip: 'rect(0 0 0 0)',
              overflow: 'hidden',
            }}
          >
            Title
          </Heading>

          {children}
        </Flex>
      )}
    </Flex>
  )
}
