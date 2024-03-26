export async function get(resource: string, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const config = token ? {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  } : {}
  const response = await fetch(`${url}/${resource}`, config)
  if (response.ok) {
    return await response.json()
  }
  return null
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

export async function put(resource: string, data: any, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  // const response = await fetch(`${url}/${resource}`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data)
  // })
  const response = await fetch(`${url}/${resource}`, generateConfig('PUT', data, token))
  return response.json()
}

export async function del(resource: string, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  // const response = await fetch(`${url}/${resource}`, {
  //   method: 'DELETE',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  const response = await fetch(`${url}/${resource}`, generateConfig('DELETE', token))
  return response.json()
}

export async function post(resource: string, data: any, token?: string) {
  const url = process.env.NEXT_PUBLIC_API_URL
  const response = await fetch(`${url}/${resource}`, generateConfig('POST', token, data))
  // const response = await fetch(`${url}/${resource}`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(data)
  // })
  return response.json()
}
