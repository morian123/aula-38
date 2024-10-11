import api from "./api.js";
import rotaImagem from "../utils/rotaImagem.js";


{async function renderizarTodos() {
  try {
    const videos = await api("videos");
    const videosArea = document.querySelector(".videos__area");
    for (const video of videos) {
      const canal = await api(`canais/${video.canalID}`);
      videosArea.innerHTML += `
        <div class="video__container">
          <img
            class="video__thumbnail"
            src="${rotaImagem + video.imagem}"
            alt="Thumb do ${video.titulo}"
          />
          <div class="video__info">
            <img
              class="channel__avatar"
              src="./images/main/profile-youtube.svg"
              alt="Avatar do ${canal.nome}"
            />
            <div class="video__details">
              <h2>${video.titulo}</h2>
              <span>
                ${canal.nome}
                <img
                  class="verified__icon"
                  src="./images/main/check-circle.svg"
                  alt="Verificado"
                />
              </span>
              <p>${video.descricao}</p>
            </div>
            <button class="options__button">
              <img src="./images/main/options.svg" alt="Ícone de opções" />
            </button>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error(error);
  }
}
async function renderizarFotosDoUsuarios(usuario) {
  try{
      const fotoPerfilElemento = document.querySelector(".perfil__photo");
      fotoPerfilElemento.src = rotaImagem + usuario.imagem;
  } catch (error){
      console.error(error)
      alert("algo aconteceu ao renderizar foto do usuario")
  }
}}

export default new interfaceUsuario ();
