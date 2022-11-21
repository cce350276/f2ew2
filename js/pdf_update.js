pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
const selectFile = document.querySelector(".select");
const canvas = document.querySelector("#canvas");
const content = document.querySelector(".center_content");
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

selectFile.addEventListener("click", (e) => {
  if ((canvas.style.display = canvas.style.display === "none" ? "" : "none"));
  else content.style.display = content.style.display === "block" ? "none" : "";
});

renderPDF("./sample.pdf");
