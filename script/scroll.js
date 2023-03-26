const container = document.querySelector('.services_scroll')
const list = document.querySelector('.services_left')
list.scrollTop = 1

list.addEventListener('scroll', function (e) {
    let items = document.querySelectorAll('.services_li')
    if(parseInt(this.scrollTop) == 0) {
        this.scrollTop = items[items.length - 1].clientHeight
        this.prepend(items[items.length - 1])
        this.scrollTop = 1
    }
    else if(this.scrollTop > this.scrollHeight - this.clientHeight - 1){
        this.append(items[0])
    }

    const scrollPosition = e.target.scrollTop
    items.forEach((item, index) => {
        const itemPosition = item.offsetTop - list.offsetTop
        const distance = itemPosition - scrollPosition
        if (distance < 40 && distance > -40) {
            item.classList.add('highlight')
        } else {
            item.classList.remove('highlight')
        }
    })
})