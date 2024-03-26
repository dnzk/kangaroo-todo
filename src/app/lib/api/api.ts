export async function get(resource: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`)
  if (response.ok) {
    return await response.json()
  }
  return null
}

export async function put(resource: string, data: any) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  return response.json()
}

export async function del(resource: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
