const express = require('express');
const path = require('path');

/* Hidupkan fungsi nya */
const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let projects = [
    {
        id: 1,
        name: 'Membuat projek sosial media',
        startDate: '2023-10-27',
        endDate: '2023-11-27',
    },
    {
        id: 2,
        name: 'Membuat projek perpustakaan',
        startDate: '2023-11-27',
        endDate: '2023-12-27',
    },
    {
        id: 3,
        name: 'Membuat projek ujian sekolah',
        startDate: '2023-12-27',
        endDate: '2024-01-27',
    },
];

/* Routing -> frontend */
/* Endpoint -> backend / api */

// routing utama
// req / request -> permintaan (dari user)
// res / response -> jawaban (dari server)
app.get('/', (req, res) => {
    res.render('index', {
        projects,
    });
});

/* get -> server mengirim response / jawaban ke client */
app.get('/upload-project', (req, res) => {
    res.render('uploadProject');
});

/* post -> client mengirim permintaan / request ke server */
app.post('/upload-project', (req, res) => {
    /* Tambahkan ke array projects */
    /* Ambil project dengan index paling terakhir, 
    lalu set id project baru = id project dengan index terakhir + 1 */
    let projectTerakhir = projects[projects.length - 1];
    let projectBaru = { id: projectTerakhir.id + 1, ...req.body };
    projects.push(projectBaru);
    res.redirect('/');
});

/* Ternary Operation */
const umur = 20;
/* Kalau umur diatas 18, console.log diatas 18 tahun */
/* Selain itu, console.log diatas dibawah umur */
// if (umur > 18) {
//     console.log('diatas 18 tahun');
// } else {
//     console.log('dibawah umur');
// }

const port = 5000;
/* listen -> dengar */
/* Menghidupkan si server */
app.listen(port, () => {
    console.log('Server running on port ' + port);
});

/* Looping -> pengulangan */
/* Element => setiap nilai di dalam array, sebutnya element */
/* index => urutan element, dimulai dari 0 */
/* length => panjang / jumlah element di dalam array */

/* 
< lebih kecil / kurang dari
> lebih besar 
<= kurang dari atau sama dengan
>= lebih besar dari atau sama dengan
*/

// Cara pusing
// for (let i = 0; i < 4; i++) {
//     console.log(bubuahan[i]);
// }

// let bubuahan = ['Jambu', 'Mangga', 'Semangka', 'Apel', 'Nangka'];
// cara gamapng
// for ... of
// for (const buah of bubuahan) {
//     console.log(buah);
// }
/* constant -> tetap */

// let nama = 'arkan';
// nama = 'ramy';

/* HOF -> Higher Order Function */
/* filter, forEach, map, reduce, callback */
/* filter -> saring */
// let bubuahan = ['Jambu', 'Mangga', 'Semangka', 'Apel', 'Nangka'];
// bubuahan.forEach((buah) => {
//     console.log(buah);
// });

// bubuahan.map((buah) => console.log('Buah ' + buah));

// let angka = [1, 2, 3];
// let jumalah = angka.reduce(
//     (angkaSebelumnya, angkaSetelahnya) => angkaSebelumnya + angkaSetelahnya,
//     0
// );
// console.log(jumalah);
// let filterAngka = angka.filter((a) => a % 2 !== 0);
// console.log(filterAngka);

/* 
    Callback, function yang parameternya adalah function juga
*/

// function sayHello() {
//     console.log('hello');
// }

// function tampilkan(sayHello) {
//     sayHello();
// }

// tampilkan(sayHello);
