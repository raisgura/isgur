function like() {
    alert("Anda memberikan like!");
}

function showComments(event) {
    var commentsSection = event.currentTarget.parentNode.querySelector('.comments');
    commentsSection.style.display = (commentsSection.style.display === 'none' || commentsSection.style.display === '') ? 'block' : 'none';
}

function share() {
    alert("Anda membagikan proyek ini!");
}

function reactLove() {
    alert("Anda memberikan love reaction!");
}

// Menampilkan overlay pada item portofolio saat dihover
function showOverlay(element) {
    var overlay = element.querySelector('.overlay');
    overlay.style.opacity = '1';
}

// Menyembunyikan overlay pada item portofolio saat tidak dihover
function hideOverlay(element) {
    var overlay = element.querySelector('.overlay');
    overlay.style.opacity = '0';
}

// Menggunakan event delegation untuk menangani klik pada item portofolio
document.addEventListener('click', function(event) {
    var target = event.target;

    // Menangani klik pada item portofolio
    if (target.classList.contains('portfolio-item')) {
        alert("Anda mengklik item portofolio!");
        // Tambahkan tindakan khusus yang ingin Anda lakukan saat item portofolio diklik
    }
});
