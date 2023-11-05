let list = document.querySelector('.slider .list')
let item = document.querySelectorAll('.slider .list .item')
let dots = document.querySelectorAll('.slider .dots li')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

let active = 0;
let lengthItem = item.length - 1;
next.onclick = function () {
    if (active + 1 > item.length) {
        active = 0;
    }
    else {
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0) {
        active = lengthItem;
    } else {
        active = active - 1;
    }
    reloadSlider();
}

let refreshSlider = setInterval(() => { next.click(), 5000 })
function reloadSlider() {
    let CheckLeft = item[active].offsetLeft
    list.style.left = - CheckLeft + 'px';

    let LastActiveDot = document.querySelector('.slider .dots li.active');
    LastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})

var citySelect = document.getElementById("citySelect");
var showCitySelectButton = document.getElementById("showCitySelect");


showCitySelectButton.addEventListener("click", function () {
    citySelect.style.display = "block";
});

citySelect.addEventListener("change", function () {
    var selectedCity = citySelect.value;
    alert("Bạn đã chọn thành phố: " + selectedCity);
    citySelect.style.display = "none";
});



