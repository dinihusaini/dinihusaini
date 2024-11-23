const pbo = {
    model: {
        mahasiswa: [
            { username: 'dini', pin: 'dini2312' },
            { username: 'admin', pin: 'admin123' },
            { username: 'arya', pin: 'arya1809' },
        ],
        barang: [],
    },
    view: {
        signform: function () {
            return `
                <div class="input-form">
                    Username: <input type='text' id='username'><br/>
                    Pin: <input type='password' id='pin'><br/>
                    <button id='login'>Login</button>
                    <button id='cancel'>Cancel</button>
                </div>
            `;
        },
        catalog: function () {
            return `
                <h1>Katalog Barang</h1>
                <form id="barangForm">
                    <input type="text" id="nama" placeholder="Nama Barang" required>
                    <input type="number" id="harga" placeholder="Harga" required>
                    <textarea id="deskripsi" placeholder="Deskripsi"></textarea>
                    <input type="text" id="gambar" placeholder="URL Gambar" required>
                    <button type="submit">Tambah Barang</button>
                </form>
                <ul id="barangList"></ul>
            `;
        },
    },

    controller: {
        init: function () {
            const app = document.getElementById('app');
            app.innerHTML = pbo.view.signform();
            
            document.getElementById('login').addEventListener('click', this.signin);
            document.getElementById('cancel').addEventListener('click', this.signout);
        },
        
        signin: function () {
            const username = document.getElementById('username').value;
            const pin = document.getElementById('pin').value;

            const userFound = pbo.model.mahasiswa.find(
                (user) => user.username === username && user.pin === pin
            );

            if (userFound) {
                alert('Login berhasil!');
                pbo.controller.showCatalog();
            } else {
                alert('Username atau Pin salah!');
            }
        },
        
        signout: function () {
            document.getElementById('username').value = '';
            document.getElementById('pin').value = '';
        },

        showCatalog: function () {
            const app = document.getElementById('app');
            app.innerHTML = pbo.view.catalog();
            
            document.getElementById('barangForm').addEventListener('submit', this.addBarang);
        },

        addBarang: function (e) {
            e
