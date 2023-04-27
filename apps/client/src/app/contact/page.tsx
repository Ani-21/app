'use client'

const ContactPage = () => (
  <div className="mx-5">
    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
      <h1 className="text-3xl mb-3">Contact me</h1>
      <p className="text-lg">
        You can contact me whenever you need help or just curious about
        something.
      </p>
    </div>
    <div className="hover:scale-125 ease-in duration-500 py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
      <h2 className="font-semibold text-2xl mb-6">
        Git Hub:{' '}
        <span className="block">
          <a href="/" className="font-medium text-light hover:underline">
            Ani-21
          </a>
        </span>
      </h2>
      <p className="capitalize text-xl mt-1">
        Telegram:
        <span className="block">
          <a href="/" className="font-medium text-light hover:underline">
            @anikvikvinia
          </a>
        </span>
      </p>
    </div>
  </div>
)

export default ContactPage
