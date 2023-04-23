import { Inter } from 'next/font/google'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Home = () => (
  <main className={inter.className}>
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Приложение
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
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
