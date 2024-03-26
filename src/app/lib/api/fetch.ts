export default async function fetcher(resource: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  return fetch(`${url}/${resource}`, {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
}
