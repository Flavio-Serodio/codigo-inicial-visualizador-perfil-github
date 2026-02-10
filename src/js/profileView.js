export function renderProfileUser(data,container ) {
container.innerHTML = `
        <div class="profile-card">
            <img src='${data.avatar_url}' alt="avatar de ${data.name}" class="profile-avatar" >
        

            <div class='infoUsuario'>
                <h2> ${data.name}</h2>
                <p> ${data.bio || 'sem biografia disponível😢'} </p>
            </div>
        </div>

        <div class="profile-counters">
            <div class="fallowers">
                <h3>👥 Seguidores</h3>
                <span>${data.followers}</span>
            </div> 

            <div class="fallowing">
                <h3>👥 Seguindo</h3>
                <span>${data.following}</span>
            </div>
        </div>
     `;
}
