import{buscaApi} from './githubAPI.js';
import { renderProfileUser } from './profileView.js';

const inputSearch = document.getElementById('input-search');
const btnsearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results')


btnsearch.addEventListener('click' , async () => {
    const userName = inputSearch.value;
    console.log(userName)
    if(!userName) {
        alert('Por Favor, verifique o nome de usuario e tente novamente')
    profileResults.innerHTML = ""
    return;
     }
     profileResults.innerHTML = "<p class='loading'>Carregando...</p> "
     try{
         
         const userInfo = await buscaApi(userName);
         renderProfileUser(userInfo, profileResults )
         console.log(userInfo)
     }catch (error){
        console.error('Erro ao buscar o perfil do usuário:', error)
        alert('Usuário não encontrado, Por favor, verifique o nome de usuário e tente novamente.')
        profileResults.innerHTML = ""
     }



})

