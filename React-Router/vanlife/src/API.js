export async function getVans() {
    const response = await fetch('/api/vans')
    const data = await response.json()
    return data.vans
}