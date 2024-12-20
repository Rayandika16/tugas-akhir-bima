document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
            form.reset();
        } else {
            alert("Harap isi semua bidang formulir sebelum mengirim.");
        }
    });
});
