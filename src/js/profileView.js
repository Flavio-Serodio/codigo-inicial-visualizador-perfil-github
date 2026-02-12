export function renderProfileUser(data, repos, container) {
    const repositoriesHTML = repos && repos.length > 0 ? repos.map(repo => `
        <a href="${repo.html_url}" target="_blank">
        <div class="repositoryCard">
            <h3>${repo.name}</h3>
            <div class="repo-info">
                <span> ⭐ ${repo.stargazers_count} </span>
                <span> 🍴 ${repo.forks_count} </span>
                <span> 👀 ${repo.watchers_count} </span>
                <span> 💻 ${repo.language || 'Não informado'} </span>
            </div>
        </div>
        </a>
        
        `).join('') : '<p>Nenhum repositório encontrado.</p>'
    container.innerHTML = `
        <div class="profile-card">
            <img src='${data.avatar_url}' alt="avatar de ${data.name}" class="profile-avatar" >
        

            <div class='infoUsuario'>
                <h2> ${data.name || 'Não possui nome cadastrado 😢'}</h2>
                <p> ${data.bio || 'sem biografia disponível😢'} </p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="fallowers">
                <p>👥 Seguidores</p>
                <span>${data.followers}</span>
            </div> 

            <div class="fallowing">
                <p>👥 Seguindo</p>
                <span>${data.following}</span>
            </div>
        </div>

        <div class="profile-repos">
            ${repositoriesHTML}
        </div>
     `;
}
