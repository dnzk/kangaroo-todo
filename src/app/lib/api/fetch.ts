export default function fetcher(resource: string, token: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  return fetch(`${url}/${resource}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
}
