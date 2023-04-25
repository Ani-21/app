const UsersLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-full grid place-content-center bg-main">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        {children}
      </div>
    </div>
  </main>
)

export default UsersLayout
