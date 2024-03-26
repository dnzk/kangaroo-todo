export default function post(resource: string, data: any) {
  const url = process.env.NEXT_PUBLIC_API_URL
  return fetch(`${url}/${resource}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}
