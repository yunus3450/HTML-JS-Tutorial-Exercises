function generatePassword(){

  const length = parseInt(document.getElementById("length").value);
  if(length < 4 ){
    alert("Şifrenizin uzunluğu en az 4 olmalıdır!!")
  }
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("password").textContent = `Üretilen Şifre: ${password}`;
}