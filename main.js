function fetchUser() {
    let searchUser = document.querySelector(".barra-pesquisa").value;

    axios.get(`https://api.github.com/users/${searchUser}`) /*Axios serve para consumir dados de uma API. */
        .then(response => {
            user = response.data;

            fillData();
        })
        .catch(error => {
            alert(error);
        })
}

function construtor() {
    /* QuerySelector serve para buscar algum elemento de HTML e trazer para o Javascript para que possa ser
    manipulado */
    let areaResultado = document.querySelector('.area-resultado');
    let instrucoes = document.querySelector('.instrucoes');
    let nome = document.querySelector('.nome');
    let bio = document.querySelector('.bio');
    let avatar = document.querySelector('.avatar');
    let repos = document.querySelector('.repos');
    let followers = document.querySelector('.followers');

    return { areaResultado, instrucoes, nome, avatar, bio, repos, followers }
}

function fillData() {
    const { areaResultado, instrucoes, avatar, nome, bio, repos, followers } = construtor();

    areaResultado.style.display = "flex";
    instrucoes.style.display = "none";
    nome.innerHTML = user.name;
    bio.innerHTML = user.bio;
    avatar.setAttribute('src', user.avatar_url);
    repos.innerHTML = user.public_repos;
    followers.innerHTML = user.followers;
}