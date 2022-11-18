selectFile.addEventListener("change", (e) => {
  if (e.target.files[0] === undefined) return;

  // 透過 input 所選取的檔案
  const file = e.target.files[0];

  // 產生fileReader物件
  const fileReader = new FileReader();

  // 將資料做處理
  fileReader.readAsArrayBuffer(file);

  // 綁入事件監聽
  fileReader.addEventListener("load", () => {
    // 獲取readAsArrayBuffer產生的結果，並用來渲染PDF
    const typedarray = new Uint8Array(fileReader.result);
    renderPDF(typedarray);
    // window.location.href = "PDF_download.html";
  });
});
