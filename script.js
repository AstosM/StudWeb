let currentPDF = "";

function openQRModal(pdfPath) {
  currentPDF = pdfPath;
  document.getElementById("qrModal").style.display = "flex";
}

function closeQR() {
  document.getElementById("qrModal").style.display = "none";
}

function continueToPDF() {
  window.open(currentPDF, "_blank");
  closeQR();
}
