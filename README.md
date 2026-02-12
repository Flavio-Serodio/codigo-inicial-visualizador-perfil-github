# Visualizador de Perfil do GitHub

> Projeto simples que busca e exibe informações de perfis GitHub usando a API pública do GitHub.

## Funcionalidade
- Buscar um usuário pelo nome de usuário do GitHub.
- Exibir avatar, nome, bio, seguidores, seguindo e repositórios (até 10 mais recentes).
- Abrir repositórios no GitHub a partir da interface.

## Tecnologias
- HTML, CSS, JavaScript (ES Modules)
- API: GitHub REST API

## Como usar
1. Abra o projeto no seu editor ou pasta.
2. Para carregar os módulos corretamente, sirva os arquivos via servidor HTTP (por exemplo Live Server do VS Code ou Python):

   - Com Live Server (VS Code): clique em *Go Live*.
   - Com Python 3 (na pasta do projeto):

     ```bash
     python -m http.server 5500
     ```

3. Acesse `http://localhost:5500` (ou a porta escolhida) no navegador.
4. No campo de busca, digite o nome de usuário do GitHub e pressione `Enter` ou clique em `Buscar`.

## Estrutura do projeto

- `index.html` — página principal.
- `src/js/index.js` — lógica de UI e eventos.
- `src/js/githubAPI.js` — chamadas à GitHub API (`buscaApi`, `buscaRepoApi`).
- `src/js/profileView.js` — renderiza o perfil e repositórios.
- `src/css/` — estilos e animações.

## Observações
- A aplicação usa a API pública do GitHub e está sujeita a limites de rate limit anônimos.
- Para uso extensivo, configure um token de autenticação na chamada `fetch` (não incluído aqui).

## Exemplo de uso
1. Pesquise `octocat` e veja o perfil e os repositórios.

## Contribuição
- PRs são bem-vindas. Sugestões: melhorar tratamento de erros, paginação de repositórios, cache local.

## Licença
- Projeto aberto para uso educacional (sem licença específica).
