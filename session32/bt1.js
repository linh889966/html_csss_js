document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("button");
    let div = document.querySelector(".ip");

    button.addEventListener("click", function () {
        // Tạo màu ngẫu nhiên
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = randomColor;
    });
});
