// function downloadPDF() {
//   const { jsPDF } = window.jspdf;
//   const content = document.querySelector('.main');

//   // Create a new jsPDF instance
//   const pdf = new jsPDF({
//       orientation: 'portrait',
//       unit: 'mm',
//       format: 'a4',
//   });

//   // Generate the PDF from the HTML content
//   pdf.html(content, {
//       callback: function (doc) {
//           doc.save('MD_Abid_Sarkar_CV.pdf'); // Save the generated PDF
//       },
//       x: 10, // Horizontal margin
//       y: 10, // Vertical margin
//       autoPaging: true, // Automatically add pages if content overflows
//       html2canvas: {
//           scale: 1, // Keep scale 1 to avoid high-resolution rendering
//       },
//   });
// }
window.onload = function () {
  document.getElementById("downloadPdf").addEventListener("click", () => {
    const content = document.querySelector(".main");
    let opt = {
      margin: 1,
      filename: "MD_Abid_Sarkar_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(content).save();
  });
};
