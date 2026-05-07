const dataSoal = [
    {
        icon: 'img/discord-icon.png',
        full: 'img/discord-full.png',
        nama: 'DISCORD'
    },
    {
        icon: 'img/instagram-heart.png',
        full: 'img/instagram-full.png',
        nama: 'INSTAGRAM'
    },
    {
        icon: 'img/spotify-play.png',
        full: 'img/spotify-full.png',
        nama: 'SPOTIFY'
    }
];

let indexSekarang = 0;

const questionImg = document.getElementById('question-img');
const answerSection = document.getElementById('answer-section');
const answerName = document.getElementById('answer-name');
const fullImg = document.getElementById('full-img');
const btnReveal = document.getElementById('btn-reveal');
const btnNext = document.getElementById('btn-next');

// Fungsi tampilkan jawaban
btnReveal.addEventListener('click', () => {
    answerSection.classList.remove('hidden');
    btnReveal.classList.add('hidden');
    btnNext.classList.remove('hidden');
});

// Fungsi soal berikutnya
btnNext.addEventListener('click', () => {
    indexSekarang++;
    if (indexSekarang < dataSoal.length) {
        // Update konten
        questionImg.src = dataSoal[indexSekarang].icon;
        fullImg.src = dataSoal[indexSekarang].full;
        answerName.innerText = dataSoal[indexSekarang].nama;
        
        // Reset tampilan
        answerSection.classList.add('hidden');
        btnReveal.classList.remove('hidden');
        btnNext.classList.add('hidden');
    } else {
        alert("Hebat! Kamu hafal banyak desain UI!");
        indexSekarang = -1; // Balik ke awal
        btnNext.click();
    }
});