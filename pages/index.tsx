import type { NextPage } from 'next'
import { Header } from '@/components';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </>
  )
}

export default Home
