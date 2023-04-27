// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react'

import PostCard from '../cards/Post'

test('should render post component', () => {
  const post = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  }
  render(<PostCard post={post} />)
  const postElement = screen.getAllByTestId('post-1')
  expect(postElement).toBeInTheDocument()
  expect(postElement).toHaveTextContent(
    'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  )
})
