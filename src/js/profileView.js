export function renderProfileUser(data,container ) {
container.innerHTML = `
        <div class="profile-card">
            <img src='${data.avatar_url}' alt="avatar de ${data.name}" class="profile-avatar" >
        

            <div class='infoUsuario'>
                <h2> ${data.name}</h2>
                <p> ${data.bio || 'sem biografia disponível😢'} </p>
            </div>
        </div>
     `;
}
