// // video 1

// document.getElementById("playVideo").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal");
//   const video = document.getElementById("skillsVideo");
  
//   // Exibe o modal e inicia o vídeo
//   modal.style.display = "flex";
//   video.play();
// });

// document.getElementById("closeModal").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal");
//   const video = document.getElementById("skillsVideo");

//   // Oculta o modal e pausa o vídeo
//   modal.style.display = "none";
//   video.pause();
// });

// // video 2
// document.getElementById("playVideo2").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal2");
//   const video = document.getElementById("skillsVideo2");
  
//   // Exibe o modal e inicia o vídeo
//   modal.style.display = "flex";
//   video.play();
// });

// document.getElementById("closeModal2").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal2");
//   const video = document.getElementById("skillsVideo2");

//   // Oculta o modal e pausa o vídeo
//   modal.style.display = "none";
//   video.pause();
// });

// // video 3
// document.getElementById("playVideo3").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal3");
//   const video = document.getElementById("skillsVideo3");
  
//   // Exibe o modal e inicia o vídeo
//   modal.style.display = "flex";
//   video.play();
// });

// document.getElementById("closeModal3").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal3");
//   const video = document.getElementById("skillsVideo3");

//   // Oculta o modal e pausa o vídeo
//   modal.style.display = "none";
//   video.pause();
// });

// // video 4
// document.getElementById("playVideo4").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal4");
//   const video = document.getElementById("skillsVideo4");
  
//   // Exibe o modal e inicia o vídeo
//   modal.style.display = "flex";
//   video.play();
// });

// document.getElementById("closeModal4").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal4");
//   const video = document.getElementById("skillsVideo4");

//   // Oculta o modal e pausa o vídeo
//   modal.style.display = "none";
//   video.pause();
// });

// // video5
// document.getElementById("playVideo5").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal5");
//   const video = document.getElementById("skillsVideo5");
  
//   // Exibe o modal e inicia o vídeo
//   modal.style.display = "flex";
//   video.play();
// });

// document.getElementById("closeModal5").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal5");
//   const video = document.getElementById("skillsVideo5");

//   // Oculta o modal e pausa o vídeo
//   modal.style.display = "none";
//   video.pause();
// });

// // video 6
// document.getElementById("playVideo6").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal6");
//   const video = document.getElementById("skillsVideo6");
  
//   // Exibe o modal e inicia o vídeo
//   modal.style.display = "flex";
//   video.play();
// });

// document.getElementById("closeModal6").addEventListener("click", function () {
//   const modal = document.getElementById("videoModal6");
//   const video = document.getElementById("skillsVideo6");

//   // Oculta o modal e pausa o vídeo
//   modal.style.display = "none";
//   video.pause();
// });

// video 1
const video = document.getElementById("meuVideo");

video.addEventListener("ended", () => {
  // Aguarda um pequeno intervalo para garantir que o vídeo é pausado e resetado
  setTimeout(() => {
    video.currentTime = 0; // Volta ao início
    video.load();          // Recarrega o vídeo para exibir o poster novamente
  }, 100); // 100 ms de atraso para evitar comportamento inesperado
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 20000)

function nextImage(){
  count++;
  if(count>4){
    count=1;
  }

  document.getElementById("radio"+count).checked = true;
}


function adjustText() {
  const items = [
    { selector: ".nav-buttons", full: "Navigation Buttons", short: "Nav Btns" },
    { selector: ".settings", full: "Settings", short: "Sett" },
    { selector: ".profile", full: "User Profile", short: "Profile" },
    { selector: ".dashboard", full: "Dashboard", short: "Dash" }
  ];

  items.forEach(item => {
    const element = document.querySelector(item.selector);
    if (element) {
      const textSpan = element.querySelector(".nav-text");
      if (textSpan) {
        textSpan.textContent = window.innerWidth <= 360 ? item.short : item.full;
      }
    }
  });
}

window.addEventListener("resize", adjustText);
document.addEventListener("DOMContentLoaded", adjustText);








