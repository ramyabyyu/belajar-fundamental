/* getElementById -> manggil id */
let judul2 = document.getElementById('judul2');

/* querySelector -> hanya dapat satu element yang paling atas */
let judul3 = document.querySelector('.judul3');

/* querySelectorAll -> manggil semuanya */
let judul_3 = document.querySelectorAll('.judul3');

/* getElementByTagName */
let h5 = document.getElementsByTagName('h2');

/* getElementByClassName */
let byClass = document.getElementsByClassName('judul3');

console.log(judul2);

function ubahWarna(btn) {
    let judul = document.getElementById('judul');
    judul.style.color = 'green';

    btn.style.backgroundColor = 'red';
}

function submitForm() {
    let nama = document.getElementById('name').value;
    let password = document.getElementById('password').value;

    let pNama = document.getElementById('pNama');
    let pPassword = document.getElementById('pPassword');

    console.log(document.getElementById('cek').checked);

    pNama.innerHTML = nama;
    pPassword.innerHTML = password;
}

function lihatPassword() {
    let password = document.getElementById('password');

    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

/* Backend - Frontend - Fullstack */
