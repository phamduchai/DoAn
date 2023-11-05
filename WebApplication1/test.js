const districts = {
    hanoi: ["Quận Ba Đình", "Quận Hoàn Kiếm", "Quận Hai Bà Trưng", "Quận Đống Đa"],
    hochiminh: ["Quận 1", "Quận 2", "Quận 3", "Quận 4"]
};

const citySelect = document.getElementById("citySelect");
const districtSelect = document.getElementById("districtSelect");

// Xử lý sự kiện khi người dùng chọn thành phố
citySelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;
    districtSelect.innerHTML = ""; // Xóa các tùy chọn cũ

    // Tạo các tùy chọn quận/huyện tương ứng
    districts[selectedCity].forEach(function (district) {
        const option = document.createElement("option");
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
});

// Khi tải trang, chọn thành phố mặc định và khởi tạo quận/huyện tương ứng
const defaultCity = citySelect.value;
districts[defaultCity].forEach(function (district) {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
});