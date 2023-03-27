export async function getVans(id = null) {
    let url = '/api/vans'
    if (id) {
        url += `/${id}`
    }
    const response = await fetch(url)
    if (!response.ok) {
        throw {
            message: 'Failed to fetch data',
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}

export async function getHostVans(id = null) {
    let url = '/api/host/vans'
    if (id) {
        url += `/${id}`
    }
    const response = await fetch(url)
    if (!response.ok) {
        throw {
            message: 'Failed to fetch data',
            statusText: response.statusText,
            status: response.status
        }
    }
    const data = await response.json()
    return data.vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}