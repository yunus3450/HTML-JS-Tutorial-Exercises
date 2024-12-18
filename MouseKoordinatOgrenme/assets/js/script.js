function fareHareket(event){
  const x = event.clientX;
  const y = event.clientY;

  document.getElementById("koordinat").innerText = ` X: ${x}, Y:${y}`
}