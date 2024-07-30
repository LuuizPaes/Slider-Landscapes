const btnBack = document.querySelector('.back')
const btnNext = document.querySelector('.next')

const container = document.querySelector('.container')
const list = document.querySelector('.container .list')
const thumb = document.querySelector('.container .thumb')

btnBack.onclick = () => moveItemsOnClick('back')
btnNext.onclick = () => moveItemsOnClick('next')

function moveItemsOnClick(type) {
    const listItems = document.querySelectorAll('.list .list-item')
    const thumbItems = document.querySelectorAll('.thumb .thumb-item')

    console.log(listItems)
    console.log(thumbItems)

    if(type === 'next') {
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else {
        list.prepend(listItems [listItems.length -1])
        thumb.prepend(thumbItems [thumbItems.length -1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}



