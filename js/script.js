AOS.init();
let typed = new Typed(".auto-input", {
    strings: ["Mechanic", "Web Developer", "Photography"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form dari reload halaman

    // Ambil data dari input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Format teks untuk di kirim ke WhatsApp
    var whatsappMessage = `Nama: ${encodeURIComponent(name)}\nEmail: ${encodeURIComponent(email)}\nPesan: ${encodeURIComponent(message)}`;

    // Nomor tujuan WhatsApp (contoh nomor Bang Zery)
    var whatsappNumber = '6289519565470';

    // Buat URL WhatsApp dengan pesan
    var whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect ke URL WhatsApp
    window.open(whatsappURL, '_blank');
});
  