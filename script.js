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
let selectedPDF = "";

const upiLink = "upi://pay?pa=astosm123-2@oksbi&pn=StudWeb&am=5&cu=INR";

function openQRModal(pdfName) {
  selectedPDF = pdfName;
  document.getElementById("qrModal").style.display = "block";

  // Generate QR code
  const qrCanvas = document.getElementById("upiQR");
  QRCode.toCanvas(qrCanvas, upiLink, function (error) {
    if (error) console.error(error);
  });

  document.getElementById("txnSection").style.display = "block";
  document.getElementById("txnInput").value = "";
  document.getElementById("accessLink").style.display = "none";
}

function closeQR() {
  document.getElementById("qrModal").style.display = "none";
}

function verifyTxn() {
  const txn = document.getElementById("txnInput").value.trim();
  if (txn.length >=3) {
    document.getElementById("accessLink").href = selectedPDF;
    document.getElementById("accessLink").style.display = "inline-block";
  } else {
    alert("❌ Please enter a valid UPI Transaction ID ");
  }
}
