const ArrayImg = [
    "../img/taikongpiaofu.jpg",
    "../img/yg.jpg",
    "../img/tk.jpg"
]

// 获取当前图片元素
const cur = document.querySelector(".scroll_box .cur");
// 获取前一个图片元素
const prev = document.querySelector(".scroll_box .prev");
// 获取下一个图片元素
const next = document.querySelector(".scroll_box .next");
// 获取滚动框元素
const scroll_box = document.querySelector(".scroll_box");
// 获取当前图片的id
let cur_id = +cur.dataset.id
let IsTransition = false;

function CreatScroll_Img(cur_id) {
    const prev_id = cur_id === 0 ? ArrayImg.length - 1 : cur_id - 1;
    const next_id = cur_id === ArrayImg.length - 1 ? 0 : cur_id + 1;
    cur.style.background = `url(${ArrayImg[cur_id]}) no-repeat center/cover`;
    prev.style.background = `url(${ArrayImg[prev_id]}) no-repeat center/cover`;
    next.style.background = `url(${ArrayImg[next_id]}) no-repeat center/cover`;
}

CreatScroll_Img(cur_id);

function scroll_Img(prevORNext, cur) {
    prevORNext.style.transition = "height 1s"
    prevORNext.style.height = "100vh"
    setTimeout(function () {
        prevORNext.style.transition = "none"
        cur.style.background = `url(${ArrayImg[cur_id]}) no-repeat center/cover`;
        prevORNext.style.height = "0"
        prevORNext.style.offsetWidth;
        CreatScroll_Img(cur_id)
        IsTransition = false
    }, 1000)
}

window.addEventListener("wheel", function (e) {
    if (IsTransition === true) return;
    IsTransition = true
    if (e.deltaY < 0) {
        cur_id--;
        if (cur_id < 0) cur_id = ArrayImg.length - 1;
        scroll_Img(prev, cur)

    }
    if (e.deltaY > 0) {
        cur_id = (cur_id + 1) % ArrayImg.length
        scroll_Img(next, cur)
    }
})