$(document).ready(function () {
    let $circles = document.getElementsByClassName('work_circle')
    const c = document.querySelector('.work_circles')
    let circles = Array.from($circles)
    // circles.forEach(element => {
    //     element.addEventListener('click', function() {
    //         let current = document.getElementsByClassName("active")
    //         current[0].className = current[0].className.replace(" active", "")
    //         this.className += " active"
    //     })
    // })
    circles[0].addEventListener('click', function () {
        circles[0].style.transform = "translateX(0%)"
        circles[1].style.transform = "translateX(50%)"
        circles[2].style.transform = "translateX(100%)"
        setTimeout(function () {
            circles[0].className = circles[0].className.replace(" neighbor", " active")
            circles[0].className = circles[0].className.replace(" far", " active")
            circles[1].className = circles[1].className.replace(" active", " neighbor")
            circles[2].className = circles[2].className.replace(" active", " far")
            circles[2].className = circles[2].className.replace(" neighbor", " far")
            circles[1].style.transform = "translateX(0%)"
            circles[2].style.transform = "translateX(0%)"
        }, 700)
        setTimeout(function () {
            
        }, 1400)
    })
    circles[1].addEventListener('click', function () {
        circles[0].style.transform = "translateX(0%)"
        circles[1].style.transform = "translateX(50%)"
        circles[2].style.transform = "translateX(100%)"
        setTimeout(function () {
            circles[1].className = circles[1].className.replace(" neighbor", " active")
            circles[1].className = circles[1].className.replace(" far", " active")
            circles[0].className = circles[0].className.replace(" active", " neighbor")
            circles[0].className = circles[0].className.replace(" far", " neighbor")
            circles[2].className = circles[2].className.replace(" active", " neighbor")
            circles[2].className = circles[2].className.replace(" far", " neighbor")
            circles[0].style.transform = "translateX(50%)"
            circles[2].style.transform = "translateX(50%)"
        }, 700)
        setTimeout(function () {
            
        }, 1400)
    })
    circles[2].addEventListener('click', function () {
        circles[0].style.transform = "translateX(0%)"
        circles[1].style.transform = "translateX(50%)"
        circles[2].style.transform = "translateX(100%)"
        setTimeout(function () {
            circles[2].className = circles[2].className.replace(" neighbor", " active")
            circles[2].className = circles[2].className.replace(" far", " active")
            circles[1].className = circles[1].className.replace(" active", " neighbor")
            circles[0].className = circles[0].className.replace(" active", " far")
            circles[0].className = circles[0].className.replace(" neighbor", " far")
            circles[0].style.transform = "translateX(100%)"
            circles[1].style.transform = "translateX(100%)"
        }, 700)
        setTimeout(function () {
            
        }, 1400)
    })
})