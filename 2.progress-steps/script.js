let progress = document.getElementById("progress")
let pre = document.getElementById("pre")
let next = document.getElementById("next")
let circles = document.querySelectorAll(".circle")

//记录当前进度
let currentActive = 1

//点击pre按钮
pre.addEventListener("click", () => {
    console.log(currentActive);
    currentActive -= 1
    if(currentActive < 1) {
        currentActive = 1
    }
    console.log(currentActive);
    upDataProgress()
})

//点击next按钮
next.addEventListener("click", () => {
    currentActive += 1
    
    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    console.log(currentActive);
    upDataProgress()

})

//更新进度条的功能函数
function upDataProgress() {
    //判断进度条进度
    circles.forEach((item, index) => {
        if(index < currentActive) {
            item.classList.add("active")
        }else {
            item.classList.remove("active")
        }
    })

    //显示进度条长度
    let actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    if(currentActive === 1) {
        pre.disabled = true
    }else if (currentActive === circles.length) {
        next.disabled = true
    }else {
        pre.disabled = false
        next.disabled = false
    }
}