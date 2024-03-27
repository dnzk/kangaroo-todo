export async function get(resource: string, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const config = token ? {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  } : {}
  const response = await fetch(`${url}/${resource}`, config)
  return response.json()
}

export async function put(resource: string, data: any, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`, generateConfig('PUT', token, data))
  return response.json()
}

export async function del(resource: string, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`, generateConfig('DELETE', token))
  return response.json()
}

export async function post(resource: string, data: any, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`, generateConfig('POST', token, data))
  return response.json()
}

function generateConfig(method: string, token?: string, data?: any) {
  const config: any = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  }
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }
  if (data) {
    config.body = JSON.stringify(data)
  }
  return config
}

