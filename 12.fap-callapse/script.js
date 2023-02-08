let togger = document.querySelectorAll('.faq-togger')

togger.forEach(item => {
    item.addEventListener('click', () => {
        item.perantNode.classList.tagger("active")
    })
})