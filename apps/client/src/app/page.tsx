import { Inter } from 'next/font/google'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Home = () => (
  <main className={inter.className}>
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Lorem Ipsum App
          </h2>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Link href="/posts">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Go To Posts
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Explore all posts, comments and publish your own
              </p>
            </div>
          </Link>
          <Link href="/users">
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Go To Users
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Explore users individual posts and create more
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default Home
