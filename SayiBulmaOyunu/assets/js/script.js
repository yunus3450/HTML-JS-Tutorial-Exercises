const dogruSayi = Math.floor(Math.random() * 10) + 1;

function kontrolEt() {
  const tahmin = document.getElementById("tahmin").value;
  const sonuc = document.getElementById("sonuc");
  if (tahmin == dogruSayi) {
    sonuc.innerText = "Bravo Doğru Bildiniz";
  } else {
    sonuc.innerText = "Yanlış";
  }
}
