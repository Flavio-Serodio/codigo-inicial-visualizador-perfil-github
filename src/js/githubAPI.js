const baseUrl = 'https://api.github.com';

export async function buscaApi (userName) {
        const response = await fetch(`${baseUrl}/users/${userName}`)
        if(!response.ok){
            throw new Error ('Usuario não encontrado')
    }
    return await response.json();
}

export async function buscaRepoApi (userName) {
 const response = await fetch(`${baseUrl}/users/${userName}/repos?per_page=10&sort=crated`)  
    if(!response.ok){
        throw new Error ('Repositorio não encontrado')
    }
    return response.json();
    console.log(response)
}