// Fungsi untuk menangani login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Logika sederhana untuk login
    if (username === "admin" && password === "password") {
        alert("Login berhasil!");
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('title').textContent = "Katalog Barang";
        document.getElementById('catalog').style.display = 'block';
    } else {
        alert("Username atau password salah!");
    }
});

// Fungsi untuk menangani penambahan barang
document.getElementById('barangForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const harga = document.getElementById('harga').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const gambar = document.getElementById('gambar').value
