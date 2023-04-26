export default async function postComment(postId: string, comment: string) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/comments',
    {
      method: 'POST',
      body: JSON.stringify({
        postId,
        id: 1,
        name: 'Test Name',
        email: 'Test@mail.com',
        body: comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
  if (!response.ok) throw new Error('Failed to fetch')
  return response.json()
}
