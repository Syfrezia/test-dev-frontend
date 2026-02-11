## Test Development Integrasia — Ringkasan Solusi

Repositori ini berisi sebuah aplikasi frontend kecil (React) yang mengimplementasikan soal-soal dari tugas. Aplikasi menampilkan data hewan peliharaan Esa, utilitas, dan komponen kecil yang menyelesaikan setiap poin tugas (1–9).

README ini menjelaskan bagaimana setiap tugas diselesaikan, di mana kode berada, cara menjalankan proyek secara lokal, cara verifikasi, serta prompt yang digunakan saat memanfaatkan bantuan ChatGPT untuk styling.

## Panduan cepat

1. Pasang dependensi

```bash
npm install
```

2. Jalankan server development

```bash
npm run dev
```

Buka alamat yang tercetak di terminal (biasanya http://localhost:5173).

## Struktur proyek (file penting)

- `src/App.jsx` — file utama, menyimpan state daftar hewan (`petList`) dan favorit, serta handler yang dipakai oleh komponen
- `src/lib/data.js` — data awal (`pets`) dan `favorites`; file case JSON ada di `src/assets/json`
- `src/lib/utils.js` — fungsi utilitas (mis. `isAnagram`, `sumEvenNumbers`, pengecekan palindrome, formatter JSON)
- `src/components/PetTable.jsx` — tampilan tabel hewan dan kontrol (Tambah Rino, ubah Persia → Maine Coon, tampilkan jumlah)
- `src/components/IsAnagramTestCases.jsx` — tabel test case anagram
- `src/components/SumOfEvenNumbers.jsx` — menampilkan bilangan genap dan jumlahnya
- `src/components/PalindromePetList.jsx` — daftar hewan yang namanya mengandung palindrome (beserta panjang nama)
- `src/components/FormatJson.jsx` — komponen yang memformat `assets/json/case.json` menjadi seperti struktur `assets/json/expectation.json`

## Penjelasan solusi per soal

Berikut ringkasan bagaimana setiap soal (1–9) diimplementasikan, lokasi file, dan cara verifikasi.

1. Buat data array (jenis, ras, nama, karakteristik)

- File: `src/lib/data.js`
- Implementasi: `data.js` mengekspor array `pets`, masing-masing objek memiliki bentuk: { name, type, race, description }. Juga tersedia array `favorites` untuk menyimpan hewan kesayangan Esa.
- Verifikasi: Lihat tabel hewan di aplikasi (`PetTable`) atau buka `src/lib/data.js`.

2. Tambah hewan baru 'Rino' (Badak Jawa) dan jadikan favorit

- File: `src/App.jsx`, `src/components/PetTable.jsx`
- Implementasi: `App.jsx` menyediakan `handleAddPet` dan `handleAddRino`. `handleAddRino()` memanggil `handleAddPet({ name: 'Rino', type: 'badak', race: 'Badak Jawa', description: 'Pekerja keras.' }, { isFavorite: true })` sehingga menambah ke state dan ke favorit bila diminta.
- Kontrak:
  - Input: objek hewan dan opsi { isFavorite: boolean }
  - Output: memperbarui state React (pet list & favorites)
- Verifikasi: Klik tombol "Tambah Rino ke Daftar Peliharaan" pada `PetTable` — tombol akan nonaktif setelah Rino ditambahkan.

3. Ambil daftar hewan kesayangan Esa secara ascending / descending

- File: `src/lib/utils.js`, `src/components/FavoritePetList.jsx`
- Implementasi: fungsi utilitas untuk mengurutkan array nama favorit secara ascending/descending (alfabet).
- Verifikasi: `FavoritePetList` menampilkan kedua urutan.

4. Ganti kucing ras 'Persia' menjadi 'Maine Coon'

- File: `src/App.jsx`, `src/components/PetTable.jsx`
- Implementasi: handler `changePersianToMaineCoon` memetakan `petList` dan mengganti properti `race` dari `'Persia'` menjadi `'Maine Coon'`, lalu memperbarui state.
- Verifikasi: Klik tombol "Ganti Persia ke Maine Coon" di `PetTable`.

5. Hitung jumlah hewan berdasarkan jenis

- File: `src/App.jsx`, `src/components/PetTable.jsx`
- Implementasi: `typeCount` dihasilkan dari `petList` (contoh: { dog: 3, cat: 2, fish: 2 }) dan ditampilkan di bawah tabel.
- Verifikasi: Lihat bagian jumlah jenis di bawah tabel.

6. Cek nama hewan yang mengandung kata palindrome dan tampilkan panjang namanya

- File: `src/lib/utils.js`, `src/components/PalindromePetList.jsx`
- Implementasi: fungsi utilitas mencari substring palindrome dalam nama (atau mengecek nama penuh sesuai interpretasi) dan mengembalikan hasil serta panjang nama.
- Kontrak:
  - Input: string (nama hewan)
  - Output: { hasPalindrome: boolean, palindromeMatches: [...], nameLength: number }
- Verifikasi: `PalindromePetList` menampilkan hewan yang cocok dan panjang namanya.

7. Jumlahkan bilangan genap dari array [15,18,3,9,6,2,12,14] dan tampilkan bilangan genap

- File: `src/components/SumOfEvenNumbers.jsx`, `src/lib/data.js`, `src/lib/utils.js`
- Implementasi rinci:
  - Data input disimpan di `src/lib/data.js` sebagai `arrayOfNum = [15,18,3,9,6,2,12,14]`.
  - Fungsi pembantu `isEven` di `src/lib/utils.js` memeriksa apakah sebuah bilangan genap: `isEven(n) => n % 2 === 0`.
  - Komponen `SumOfEvenNumbers.jsx` melakukan langkah berikut ketika tombol ditekan:
    1. Mem-filter array dengan `arrayOfNum.filter(isEven)` untuk memperoleh bilangan genap: `[18, 6, 2, 12, 14]`.
    2. Menjumlahkan elemen genap menggunakan `reduce((acc, cur) => acc + cur, 0)` → hasil `52`.
    3. Menyimpan daftar genap dan hasil jumlah ke state lokal (`evenNumbers`, `evenSum`) untuk ditampilkan di UI.

- Kontrak fungsi/komponen:
  - Input: array angka (dalam implementasi: `arrayOfNum` tanpa parameter dari UI)
  - Output: objek/hasil yang disimpan di state dan ditampilkan: `{ evens: number[], sum: number }
    - Contoh hasil: { evens: [18,6,2,12,14], sum: 52 }

- Contoh potongan kode (disederhanakan):

```javascript
const arrayOfNum = [15, 18, 3, 9, 6, 2, 12, 14];
const isEven = (n) => n % 2 === 0;
const evens = arrayOfNum.filter(isEven); // [18,6,2,12,14]
const sum = evens.reduce((a, b) => a + b, 0); // 52
```

- Verifikasi:
  - Klik tombol "Hitung Jumlah Bilangan Genap" — komponen akan menampilkan:
    - Baris yang menunjukkan array input
    - Daftar bilangan genap: `[18, 6, 2, 12, 14]`
    - Jumlah: `52`

Jika Anda ingin, saya bisa mengubah komponen agar menerima array input secara props atau menambahkan tes unit untuk memverifikasi fungsi `isEven` dan perhitungan jumlah.

8. Fungsi pengecek anagram dengan parameter

- File: `src/lib/utils.js`, `src/components/IsAnagramTestCases.jsx`
- Implementasi: `isAnagram(str1, str2)` mengembalikan boolean. `IsAnagramTestCases` membaca `anagramTestCases` dari `src/lib/data.js` dan menampilkan hasil aktual vs yang diharapkan.
- Kontrak:
  - Input: dua string
  - Output: boolean (true jika anagram)
- Verifikasi: Tabel "Test Kasus Anagram" menampilkan `Cocok` bila hasil fungsi sama dengan expected.

9. Format JSON: ubah `assets/json/case.json` → `assets/json/expectation.json`

- File: `src/components/FormatJson.jsx`, `src/assets/json/case.json`, `src/assets/json/expectation.json`, helper di `src/lib/utils.js`
- Implementasi: formatter membaca struktur JSON input dan mengubahnya sesuai struktur target di `expectation.json`. Logika utama ada di helper `formatJson`.
- Verifikasi: Jalankan komponen `FormatJson` atau bandingkan output formatter dengan `assets/json/expectation.json`.

## Cara cepat verifikasi

1. Jalankan server development:

```bash
npm run dev
```

2. Buka aplikasi di browser dan periksa:

- Tabel hewan: Klik "Tambah Rino", klik "Ganti Persia ke Maine Coon", lihat jumlah jenis
- Test anagram: Pastikan setiap baris menampilkan `Cocok` bila hasil fungsi sama dengan expected
- Sum of evens dan palindrome list: buka komponen terkait
- Format JSON: jalankan komponen `FormatJson` dan bandingkan output dengan `assets/json/expectation.json`

## Prompt yang digunakan dengan ChatGPT

Saya menggunakan ChatGPT untuk membantu menerapkan palet warna di komponen. Prompt (diterjemahkan dari bahasa Inggris):

"Terapkan palet warna pada aplikasi: gunakan utility Tailwind dengan nilai hex dan gradient untuk styling header, tabel, baris, dan tombol. Jangan ubah `src/style.css`; terapkan kelas inline pada komponen sehingga palet konsisten."
