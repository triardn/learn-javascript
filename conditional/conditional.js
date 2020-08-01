// if - else
const nama = "Raline"
const peran = "Werewolf"

if (nama == "") {
    console.log("Nama harus diisi!")
} else if (peran == "") {
    console.log("Halo %s, Pilih peranmu untuk memulai game!", nama)
} else {
    if (peran == "Penyihir") {
        console.log("Selamat datang di Dunia Werewolf, %s", nama)
        console.log("Halo Penyihir %s, kamu dapat melihat siapa yang menjadi werewolf!", nama)
    } else if (peran == "Guard") {
        console.log("Selamat datang di Dunia Werewolf, %s", nama)
        console.log("Halo Guard %s, kamu akan membantu melindungi temanmu dari serangan werewolf.", nama)
    } else if (peran == "Werewolf") {
        console.log("Selamat datang di Dunia Werewolf, %s", nama)
        console.log("Halo Werewolf %s, Kamu akan memakan mangsa setiap malam!", nama)
    } else {
        console.log("Peran tidak diketahui.")
    }
}

console.log("")

// switch case
const tanggal = 21; 
const bulan = 1; 
const tahun = 1945;

let sentence = "";

if (tanggal < 1 || tanggal > 31) {
    console.log("Tanggal yang dimasukkan tidak valid.")
} else if (tahun < 1900 || tahun > 2200) {
    console.log("Tahun yang dimasukkan tidak valid.")
} else {
    switch (bulan) {
        case 1 :
            sentence = tanggal.toString().concat(" Januari ").concat(tahun.toString());
            break;
        case 2 :
            sentence = tanggal.toString().concat(" Februari ").concat(tahun.toString());
            break;
        case 3 :
            sentence = tanggal.toString().concat(" Maret ").concat(tahun.toString());
            break;
        case 4 :
            sentence = tanggal.toString().concat(" April ").concat(tahun.toString());
            break;
        case 5 :
            sentence = tanggal.toString().concat(" Mei ").concat(tahun.toString());
            break;
        case 6 :
            sentence = tanggal.toString().concat(" Juni ").concat(tahun.toString());
            break;
        case 7:
            sentence = tanggal.toString().concat(" Juli ").concat(tahun.toString());
            break;
        case 8:
            sentence = tanggal.toString().concat(" Agustus ").concat(tahun.toString());
            break;
        case 9:
            sentence = tanggal.toString().concat(" September ").concat(tahun.toString());
            break;
        case 10:
            sentence = tanggal.toString().concat(" Oktober ").concat(tahun.toString());
            break;
        case 11:
            sentence = tanggal.toString().concat(" November ").concat(tahun.toString());
            break;
        case 12:
            sentence = tanggal.toString().concat(" Desember ").concat(tahun.toString());
            break;
        default:
            sentence = "Bulan yang dimasukkan tidak valid.";
    }

    console.log(sentence);
}