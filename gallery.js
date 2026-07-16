/* Name this external file gallery.js */

function upDate(previewPic) {
    // 1. Kiểm tra sự kiện di chuột
    console.log("Hover event triggered!");

    // 2. In ra thuộc tính alt và src của ảnh đang di chuột
    console.log("Image Alt Text: " + previewPic.alt);
    console.log("Image Source URL: " + previewPic.src);

    // 3. Chọn phần tử hiển thị chính bằng ID
    const imageDiv = document.getElementById('image');

    // 4. Thay đổi nội dung chữ thành alt của ảnh
    imageDiv.innerHTML = previewPic.alt;

    // 5. Thay đổi hình nền thành src của ảnh
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    const imageDiv = document.getElementById('image');

    // Khôi phục lại hình nền và chữ mặc định ban đầu
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}