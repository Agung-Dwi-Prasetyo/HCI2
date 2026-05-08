// --- 1. DATA SOAL ---
const dataSoal = [
    { 
        icon: 'LINK_RAW_GITHUB_DISCORD_ICON', 
        nama: 'DISCORD' 
    },
    { 
        icon: 'LINK_RAW_GITHUB_INSTAGRAM_ICON', 
        nama: 'INSTAGRAM' 
    },
    { 
        icon: 'LINK_RAW_GITHUB_SPOTIFY_ICON', 
        nama: 'SPOTIFY' 
    }
];

let indexSekarang = 0;

// --- 2. LOGIKA GAME ---
function initGame() {
    const btnReveal = document.getElementById('btn-reveal');
    const btnNext = document.getElementById('btn-next');
    const answerSection = document.getElementById('answer-section');
    const qImg = document.getElementById('question-img');
    const fImg = document.getElementById('full-img');
    const aName = document.getElementById('answer-name');

    // Load Soal
    function loadSoal() {
        if (dataSoal[indexSekarang]) {
            qImg.src = dataSoal[indexSekarang].icon;
            aName.innerText = dataSoal[indexSekarang].nama;
        }
    }

    loadSoal();

    // Event Tombol
    btnReveal.onclick = () => {
        answerSection.classList.remove('hidden');
        btnReveal.classList.add('hidden');
        btnNext.classList.remove('hidden');
    };

    btnNext.onclick = () => {
        indexSekarang++;
        if (indexSekarang < dataSoal.length) {
            answerSection.classList.add('hidden');
            btnReveal.classList.remove('hidden');
            btnNext.classList.add('hidden');
            loadSoal();
        } else {
            showEnding();
        }
    };
}

function showEnding() {
    const gameCard = document.getElementById('game-card');
    gameCard.innerHTML = `
        <div style="animation: fadeIn 0.8s;">
            <h1 style="font-size: 32px;">MISSION COMPLETE! 🎓</h1>
            <p style="margin: 20px 0; line-height: 1.6;">Gokil! Lo berhasil tebak semua UI.<br>Siap jadi mahasiswa SPICE!</p>
            <button id="btn-reset">MAIN LAGI</button>
        </div>
    `;
    
    document.getElementById('btn-reset').onclick = () => {
        indexSekarang = 0;
        // Kembalikan HTML ke struktur awal
        gameCard.innerHTML = `
            <h1>TEBAK UI APLIKASI</h1>
            <p id="sub-title">Potongan UI ini milik aplikasi apa?</p>
            <div class="card">
                <img id="question-img" src="" alt="Tebak ini apa">
                <div id="answer-section" class="hidden">
                    <h2 id="answer-name">NAMA APLIKASI</h2>
                    <img id="full-img" src="" alt="Full UI Screenshot">
                </div>
            </div>
            <div class="controls">
                <button id="btn-reveal">CEK JAWABAN</button>
                <button id="btn-next" class="hidden">NEXT SOAL</button>
            </div>
        `;
        initGame(); // Jalankan ulang logika tombol
    };
}

// Jalankan logika pertama kali
initGame();

// --- 3. LOGIKA BACKGROUND MANTUL ---
const container = document.getElementById('bg-bounce-container');
const bgImages = [
    '1.png', 
    '2.png'
]; 

const items = [];
for (let i = 0; i < 12; i++) {
    const img = document.createElement('img');
    img.src = bgImages[Math.floor(Math.random() * bgImages.length)];
    img.className = 'bouncing-item';
    container.appendChild(img);
    items.push({
        el: img,
        x: Math.random() * (window.innerWidth - 80),
        y: Math.random() * (window.innerHeight - 80),
        dx: (Math.random() - 0.5) * 4,
        dy: (Math.random() - 0.5) * 4,
        w: 80, h: 80
    });
}

function updateBounce() {
    items.forEach(item => {
        item.x += item.dx;
        item.y += item.dy;
        if (item.x + item.w > window.innerWidth || item.x < 0) item.dx *= -1;
        if (item.y + item.h > window.innerHeight || item.y < 0) item.dy *= -1;
        item.el.style.left = item.x + 'px';
        item.el.style.top = item.y + 'px';
    });
    requestAnimationFrame(updateBounce);
}
updateBounce();
const music = document.getElementById('bgm');
const musicBtn = document.getElementById('btn-music');
let isPlaying = false;

// Fungsi untuk play/pause musik
function toggleMusic() {
    if (isPlaying) {
        music.pause();
        musicBtn.innerText = "🔇";
    } else {
        music.play();
        musicBtn.innerText = "🎵";
    }
    isPlaying = !isPlaying;
}
const music = document.getElementById('bgm');
music.volume = 0.5;
musicBtn.onclick = toggleMusic;

// Bonus: Musik otomatis jalan saat user mulai berinteraksi dengan game
document.addEventListener('click', () => {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
        musicBtn.innerText = "🎵";
    }
}, { once: true }); // 'once: true' artinya cuma jalan sekali pas klik pertama