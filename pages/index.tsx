import { GetStaticProps } from 'next'
import BaseLayout from '../components/BaseLayout'

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

type Page = {
  title: string
}

const getPageIdBySlug = async (slug: string) => {
  if (slug === '/') return 'home'
  return null
}

const getPageById = async (id: string): Promise<Page> => {
  await sleep(200)
  return { title: 'My page ' + id }
}

type Maybe<T> = T | null

type Props = {
  page?: Maybe<Page>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const slug = '/'

  const id = await getPageIdBySlug(slug)

  if (!id) {
    return {
      notFound: true,
    }
  }

  const page = await getPageById(id!)

  return {
    props: {
      page,
    },
    revalidate: 300, // Seconds. Revalidate existing pages every 5 minutes
  }
}

export default function Home({ page }: Props): JSX.Element {
  return (
    <BaseLayout footer>
      <h1 className="title">{page.title}</h1>
    </BaseLayout>
  )
}
