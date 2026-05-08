// --- LOGIKA GAME TRIVIA ---
const dataSoal = [
    { icon: 'img/discord-icon.png', full: 'img/discord-full.png', nama: 'DISCORD' },
    { icon: 'img/instagram-icon.png', full: 'img/instagram-full.png', nama: 'INSTAGRAM' }
];

let indexSekarang = 0;
const btnReveal = document.getElementById('btn-reveal');
const btnNext = document.getElementById('btn-next');
const answerSection = document.getElementById('answer-section');

btnReveal.addEventListener('click', () => {
    answerSection.classList.remove('hidden');
    btnReveal.classList.add('hidden');
    btnNext.classList.remove('hidden');
});

btnNext.addEventListener('click', () => {
    indexSekarang = (indexSekarang + 1) % dataSoal.length;
    document.getElementById('question-img').src = dataSoal[indexSekarang].icon;
    document.getElementById('full-img').src = dataSoal[indexSekarang].full;
    document.getElementById('answer-name').innerText = dataSoal[indexSekarang].nama;
    answerSection.classList.add('hidden');
    btnReveal.classList.remove('hidden');
    btnNext.classList.add('hidden');
});

// --- LOGIKA ELEMEN MANTUL (BOUNCING ELEMENTS) ---
const container = document.getElementById('bg-bounce-container');
const images = ['karakter1.png', 'karakter2.png']; // Ganti dengan nama file fotomu
const itemCount = 12; // Jumlah elemen yang mau dimunculin
const items = [];

for (let i = 0; i < itemCount; i++) {
    const img = document.createElement('img');
    img.src = images[Math.floor(Math.random() * images.length)];
    img.className = 'bouncing-item';
    container.appendChild(img);

    // Set posisi dan kecepatan acak
    const item = {
        el: img,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: (Math.random() - 0.5) * 4, // Kecepatan X
        dy: (Math.random() - 0.5) * 4, // Kecepatan Y
        w: 80, // Harus sama dengan width di CSS
        h: 80
    };
    items.push(item);
}

function updateBounce() {
    items.forEach(item => {
        item.x += item.dx;
        item.y += item.dy;

        // Pantul Kanan & Kiri
        if (item.x + item.w > window.innerWidth || item.x < 0) {
            item.dx *= -1;
        }
        // Pantul Atas & Bawah
        if (item.y + item.h > window.innerHeight || item.y < 0) {
            item.dy *= -1;
        }

        item.el.style.left = item.x + 'px';
        item.el.style.top = item.y + 'px';
    });
    requestAnimationFrame(updateBounce);
}

updateBounce();