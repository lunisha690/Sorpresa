const heartsContainer = document.getElementById("hearts");
const textElement = document.getElementById("typewriter");
const musicBtn = document.getElementById("musicBtn");

// 💌 mensaje final intenso
const message = `Feliz cumpleaños, Fabri ❤️

Desde que apareciste,
todo tiene un matiz distinto.

Me encanta verte sonreír,
me encanta el color de tus ojos,
y la manera en que sin darte cuenta
logras desarmarme.

Llegaste como una coincidencia,
pero te quedaste como algo que siento profundo.

Despiertas en mí
cada emoción bonita,
cada impulso sincero,
cada latido que no sabía que llevaba tu nombre.

Nunca permitas que nadie te ame
menos de lo que realmente mereces,
porque yo…
yo sería capaz de darlo todo
por verte feliz,
por verte en paz,
por verte brillar. ❤️`;

let index = 0;

function typeWriter() {
  if (index < message.length) {
    textElement.innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 35);
  } else {
    setTimeout(showFinalSignature, 800);
  }
}

function showFinalSignature() {
  const signature = document.createElement("div");
  signature.style.marginTop = "15px";
  signature.style.fontSize = "1.3rem";
  signature.style.color = "#ff6b6b";
  signature.style.opacity = "0";
  signature.style.transition = "opacity 2s ease";
  signature.innerHTML = "Fa ❤️";

  textElement.parentElement.appendChild(signature);

  setTimeout(() => {
    signature.style.opacity = "1";
  }, 100);
}

typeWriter();

// ❤️ corazones rojos
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 200 + "px";
  heart.style.top = Math.random() * 130 + "px";
  heart.style.animationDelay = Math.random() * 4 + "s";
  heartsContainer.appendChild(heart);
}

// ✨ estrellas cayendo
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.animationDuration = (3 + Math.random() * 5) + "s";
  starsContainer.appendChild(star);
}

// 🎵 Spotify
musicBtn.addEventListener("click", () => {
  window.open("https://open.spotify.com/search/Doma%20Josean%20Log", "_blank");
});
