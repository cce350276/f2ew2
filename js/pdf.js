// pdfjsLib.GlobalWorkerOptions.workerSrc = "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
const selectFile = document.querySelector(".select");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

async function renderPDF(data) {
  const pdfDoc = await pdfjsLib.getDocument(data).promise;
  const pdfPage = await pdfDoc.getPage(1);
  const viewport = pdfPage.getViewport({ scale: 1 });
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  pdfPage.render({
    canvasContext: ctx,
    viewport: viewport,
  });
}

renderPDF("./sample.pdf");