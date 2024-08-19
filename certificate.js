function generateCertificate() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: "a4"
  });

  const name = document.getElementById("name").value;
  const event = document.getElementById("event").value;
  const date = document.getElementById("date").value;

  const pageWidth = doc.internal.pageSize.getWidth();
  const center = pageWidth / 2;
  const alignCenter = { align: "center" };

  doc.setFontSize(22);
  doc.text("Certificado de Participação", center, 60, alignCenter);

  doc.setFontSize(16);
  doc.text(`Certificamos que ${name}`, center, 110, alignCenter);
  doc.text(`participou do evento ${event}`, center, 140, alignCenter);
  doc.text(`realizado em ${new Date(date).toLocaleDateString()}`, center, 170, alignCenter);

  doc.setFontSize(14);
  doc.text("_____________________________", center, 230, alignCenter);
  doc.text("Assinatura", center, 250, alignCenter);

  doc.save("certificado-de-participacao.pdf");
}