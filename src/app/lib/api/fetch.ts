export default function fetcher(resource: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  return fetch(`${url}/${resource}`)
    .then(res => res.json())
}
