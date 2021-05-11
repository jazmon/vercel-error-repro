import Head from 'next/head'
import { Flex, Heading } from 'theme-ui'

export default function Home(): JSX.Element {
  return (
    <Flex>
      <Head>
        <title id="home-title">Site</title>
        <meta name="description" content="Template Site" />
      </Head>

      <Flex as="main" id="main">
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

        <div className="container">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <div sx={{ color: (t) => t.colors.background }}>Hello world</div>
          </main>
        </div>
      </Flex>
    </Flex>
  )
}
