let progress = document.getElementById("progress")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let circles = document.querySelectorAll(".circle")

//记录当前进度条的进度
let currentActive = 1
//点击prev的回调函数
prev.addEventListener('click', () => {
    currentActive -= 1
    if (currentActive < 1) {
        currentActive = 1
    }
    upDataActiveClass()
})

//点击next的回调函数
next.addEventListener('click', () => {
    currentActive += 1
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    upDataActiveClass()
})

//更新进度条显示的功能函数
function upDataActiveClass() {
    circles.forEach((circle, index) => {
        circle.classList.remove('active')
        if (index < currentActive) {
            circle.classList.add("active")
        }
    })

    let actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (actives.length === 1) {
        prev.disabled = true
    } else if (actives.length === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}