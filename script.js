// MENGAMBIL PILIHAN KOMPUTER SECARA RANDOM
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp > 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// MENGAMBIL PILIHAN USER
function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "semut" ? "KALAH" : "MENANG";
  if (player == "orang") return comp == "semut" ? "MENANG" : "KALAH";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
}

const pilihan = document.querySelectorAll("ul li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    // AREA KOMPUTER
    const imgComputer = document.querySelector(".img-komputer");
    imgComputer.setAttribute(`src`, `img/${pilihanComputer}.png`);

    //  MENAMPILKAN HASIL
    const info = document.querySelector(".info");
    info.innerHTML = hasil;
  });
});



// // PLAYER MILIH GAJAH
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = "gajah";
//     const hasil = getHasil(pilihanComputer, pilihanPlayer)

//     // AREA KOMPUTER
//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute(`src`, `img/${pilihanComputer}.png`);

//     // MENAMPILKAN HASIL
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// // PLAYER MILIH ORANG
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = "orang";
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // AREA KOMPUTER
//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute(`src`, `img/${pilihanComputer}.png` );

//     // MENAMPILKAN HASIL
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// })

// // PLAYER MILIH ORANG
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function() {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = "semut";
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     // AREA KOMPUTER
//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute(`src`, `img/${pilihanComputer}.png` );

//     // MENAMPILKAN HASIL
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// })
