const prev = document.querySelector('.slider_arrows_prev')
const next = document.querySelector('.slider_arrows_next')

prev.addEventListener('mousedown', function(e) {
    document.querySelector('.slider_arrows_prev_active').style.opacity = 1
})

prev.addEventListener('mouseup', function(e) {
    document.querySelector('.slider_arrows_prev_active').style.opacity = 0
})

next.addEventListener('mousedown', function(e) {
    document.querySelector('.slider_arrows_next_active').style.opacity = 1
})

next.addEventListener('mouseup', function(e) {
    document.querySelector('.slider_arrows_next_active').style.opacity = 0
})