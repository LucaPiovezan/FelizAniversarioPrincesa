// Dados das fotos
const photos = [
  { src: "foto1.png", caption: "Nossa 1 vez saindo" },
  { src: "foto2.png", caption: "Essa é a sua preferida KKK" },
  { src: "foto3.png", caption: "minha 1 vez na sua igreja vendo culto com você KKAAK" }
];

let currentPhoto = 0;

// Criar corações flutuantes
function createFloatingHearts() {
  const container = document.getElementById('floatingHearts');
  
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    
    const size = 8 + Math.random() * 10;
    const left = Math.random() * 100;
    const delay = Math.random() * 10; 
    const duration = 10 + Math.random() * 8;
    const opacity = 0.15 + Math.random() * 0.15;
    
    heart.style.cssText = `
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      --opacity: ${opacity};
    `;
    heart.querySelector('svg').style.cssText = `width: ${size}px; height: ${size}px;`;
    
    container.appendChild(heart);
  }
}

// Lightbox
function openPhoto(index) {
  currentPhoto = index;
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  
  img.src = photos[index].src;
  img.onerror = function() {
    this.src = 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&h=1000&fit=crop&q=80';
  };
  caption.textContent = photos[index].caption;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePhoto() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function nextPhoto() {
  currentPhoto = (currentPhoto + 1) % photos.length;
  openPhoto(currentPhoto);
}

function prevPhoto() {
  currentPhoto = (currentPhoto - 1 + photos.length) % photos.length;
  openPhoto(currentPhoto);
}

// Fechar com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePhoto();
  if (e.key === 'ArrowRight') nextPhoto();
  if (e.key === 'ArrowLeft') prevPhoto();
});

// Inicializar
createFloatingHearts();
document.getElementById("revealVerse").addEventListener("click", () => {
  document.getElementById("verseText").classList.add("show");
});
