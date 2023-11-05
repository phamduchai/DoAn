function toggleSelection(button) {
    // Loại bỏ lớp "selected" khỏi tất cả các ô button
    var buttons = document.querySelectorAll(".price-button");
    buttons.forEach(function (btn) {
        btn.classList.remove("selected");
    });

    // Thêm lớp "selected" cho ô button được click
    button.classList.add("selected");
}