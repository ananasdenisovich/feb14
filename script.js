function openEnvelope() {
  document.getElementById("letter").style.display = "block";
  document.getElementById("heartBtn").style.display = "none";
}



document.getElementById("heartBtn").addEventListener("click", openEnvelope);

