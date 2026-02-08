export async function buscaApi (username) {
    const baseUrl = 'https://api.github.com';
        const response = await fetch(`${baseUrl}/users/${username}`)
        if(!response.ok){
            throw new Error ('Usuario não encontrado')
    }
    return await response.json();
}
