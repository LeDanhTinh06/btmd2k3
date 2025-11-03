function update(previewPic) {
  // 🧠 Bước 1: Kiểm tra sự kiện có hoạt động không
  console.log("Sự kiện onmouseover được kích hoạt!");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  // 🧩 Bước 2: Lấy phần tử div có id="image"
  let imageDiv = document.getElementById("image");

  // 🧩 Bước 3: Cập nhật văn bản
  imageDiv.textContent = previewPic.alt;

  // 🧩 Bước 4: Cập nhật hình nền
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Hoàn tác - sự kiện onmouseout hoạt động!");

  let imageDiv = document.getElementById("image");

  // 🧩 Bước 5: Trả về trạng thái ban đầu
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.textContent = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
