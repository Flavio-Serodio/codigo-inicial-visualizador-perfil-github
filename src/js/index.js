const inputSearch = document.getElementById('input-search');
const btnsearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results')

const baseUrl = 'https://api.github.com'

btnsearch.addEventListener('click' , async () => {
    const userName = inputSearch.value;
    if(userName) {
        profileResults.innerHTML = '<p>Carregando...</p>'

        try {

        
        const response = await fetch(`${baseUrl}/users/${userName}`)
    if(!response.ok){
        alert('Usuario não encontrado,Por favor verifique se o nome esta correto e tente novamente')
        profileResults.innerHTML = ''
        return;
    }

    const data = await response.json()
     console.log(data) //para ver se o fetch esta funcionando

     profileResults.innerHTML = `
        <div class="profile-card">
            <img src='${data.avatar_url}' alt="avatar de ${data.name}" class="profile-avatar" >
        

            <div class='infoUsuario'>
                <h2> ${data.name}</h2>
                <p> ${data.bio || 'sem biografia disponível😢'} </p>
            </div>
        </div>
     `;



    }catch (error){
        console.error('Erro ao Buscar ao perfil do Usuario:', error)
    }
    }else{
        alert('por favor digite um nome de usuario')
    }
})

