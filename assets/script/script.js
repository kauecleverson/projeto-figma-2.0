// Seleciona os elementos
const imgs = document.querySelectorAll("#content-wrapper-news img");
const dots = document.querySelectorAll(".pagination .dot");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // Tempo para transição automática

// Função para definir classes e visibilidade
const defClass = (startPos, index) => {
  // Esconde todas as imagens e reseta os dots
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  // Mostra a imagem atual e atualiza o dot
  imgs[index].style.display = "block";
  dots[index].classList.add("active");
};

// Inicializa o slider
defClass(1, 0);

// Event Listeners para as setas
leftArrow.addEventListener("click", function () {
  currentIndex <= 0 ? (currentIndex = imgs.length - 1) : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function () {
  currentIndex >= imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
  defClass(0, currentIndex);
});

// Event Listeners para os dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    defClass(0, currentIndex);
  });
});

// Função para iniciar o slideshow automático
const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length - 1 ? (currentIndex = 0) : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

// Inicia o slideshow automático
startAutoSlide();
