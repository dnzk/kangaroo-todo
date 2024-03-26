export async function get(resource: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`)
  if (response.ok) {
    return await response.json()
  }
  return null
}
