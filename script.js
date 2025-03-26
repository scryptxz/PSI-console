// Link do site: https://www.last.fm/pt/user/ScryptRG/library/albums?date_preset=LAST_30_DAYS&page=1

// Tornar o container da tabela em grade
let group = document.querySelector("[data-playlisting-add-entries]");
group.style.display = "flex";
group.style.flexWrap = "wrap";
group.style.gap = "30px";

// Remover tudo o que está escrito
let spans = document.querySelectorAll(
  ".chartlist-index, .chartlist-play, .chartlist-name, .chartlist-artist, .chartlist-buylinks, .chartlist-more, .chartlist-bar"
);
for (let i = 0; i < spans.length; i++) {
  spans[i].style.display = "none";
}

// Fazer com que as linhas da tabela seja do tamanho da imagem
let linhas = document.querySelectorAll(".chartlist-row");
for (let i = 0; i < linhas.length; i++) {
  linhas[i].style.width = "100px";
  linhas[i].style.height = "100px";
  linhas[i].style.position = "static";
}

// Mudar os tamanhos das imagens para 100px
let imagesBox = document.querySelectorAll(".chartlist-image");
for (let i = 0; i < imagesBox.length; i++) {
  imagesBox[i].style.width = "100px";
  imagesBox[i].style.height = "100px";
}

// Arrendondar as bordas e colocar sombra nas imagens
let images = document.querySelectorAll(".cover-art > img");
for (let i = 0; i < images.length; i++) {
  images[i].style.borderRadius = "10px";
  images[i].style.boxShadow = "5px 5px 8px 0px rgba(0, 0, 0, 0.35)";
}

// Formatação do título
document.querySelector(".metadata-item").style.display = "flex";
document.querySelector(".metadata-item").style.flexDirection = "row-reverse";
document.querySelector(".metadata-item").style.justifyContent = "center";
document.querySelector(".metadata-item").style.gap = "10px";
document.querySelector(".metadata-item").style.float = "none";

document.querySelector(".metadata-item > h2").style.fontSize = "25px";
document.querySelector(".metadata-item > p").style.fontSize = "26px";
document.querySelector(".metadata-item > p").style.color = "#D1170E";
