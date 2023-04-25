'use client'

import React, { SyntheticEvent } from 'react'

const FormComment = () => {
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
  }

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <textarea
          id="comment"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none bg-main dark:text-white dark:placeholder-gray-400 dark:bg-main"
          placeholder="Write a comment..."
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-light rounded-lg focus:ring-4 focus:ring-light dark:focus:ring-secondary hover:bg-secondary"
      >
        Post comment
      </button>
    </form>
  )
}

export default FormComment
