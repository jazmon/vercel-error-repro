import Head from 'next/head'
import { Flex } from 'theme-ui'

export default function Home(): JSX.Element {
  return (
    <Flex>
      <Head>
        <title id="home-title">Site</title>
        <meta name="description" content="Template Site" />
      </Head>
      <Flex as="main" id="main">
        <div sx={{ color: (t) => t.colors.background }}>Hello world</div>
      </Flex>
    </Flex>
  )
}
