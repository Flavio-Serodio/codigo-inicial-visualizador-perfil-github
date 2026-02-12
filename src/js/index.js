import{buscaApi,buscaRepoApi } from './githubAPI.js';
import { renderProfileUser } from './profileView.js';


const inputSearch = document.getElementById('input-search');
const btnsearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results')

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        const userName = inputSearch.value;
        buscarPerfil(userName)
        
    }
})

btnsearch.addEventListener('click', buscarPerfil)

async function buscarPerfil() {
    const userName = inputSearch.value;
    if(!userName) {
        alert('Por Favor, verifique o nome de usuario e tente novamente')
    profileResults.innerHTML = ""
    return;
     }
     profileResults.innerHTML = "<p class='loading'>Carregando...</p> "
     try{
         
         const userInfo = await buscaApi(userName);
         const userRepo = await buscaRepoApi(userName)
         renderProfileUser(userInfo,userRepo, profileResults )
         console.log(userRepo)
     }catch (error){
        console.error('Erro ao buscar o perfil do usuário:', error)
        alert('Usuário não encontrado, Por favor, verifique o nome de usuário e tente novamente.')
        profileResults.innerHTML = ""
     }



}

