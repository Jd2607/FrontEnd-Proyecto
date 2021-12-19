export async function recibir(url){
    const path = new URL(url)
    const result = await fetch(path)
    return await result.json()
}