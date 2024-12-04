const tabs = document.querySelectorAll('.faq-tab-header')

tabs.forEach(el=>{
    el.addEventListener('click', (e)=>{
        if (e.currentTarget.parentElement.classList.contains('active')) {
            e.currentTarget.parentElement.classList.remove('active')            
        } else {
            let active = document.querySelector('.faq-tab-wrapper.active')
            if (active) { active.classList.remove('active') }
    
            e.currentTarget.parentElement.classList.add('active')
        }
    })
})

const jsResizer = document.querySelector('.js-resize')
const bgItem = document.querySelector('.table-bg')

if (jsResizer) {
    function reportWindowSize() {     
        console.log(jsResizer, jsResizer.clientWidth, bgItem.style.left)   
        bgItem.style.left = jsResizer.clientWidth+"px"
    }
    reportWindowSize()
    window.onresize = reportWindowSize;
}


const modals = document.querySelectorAll('.modal-wrapper')
console.log(modals)
modals.forEach(modal=>{
    modal.addEventListener('click', (e)=>{
        if (e.target.classList.contains('modal-wrapper')) {
            e.currentTarget.classList.remove('active')
        }
    })
})

const imgScale = document.querySelectorAll('.main_reviews_screen_block_list_img_container_cont_item')
const imgScaleParent = document.querySelector('#main_reviews_screen_block_list_img_container_cont')
if (imgScale.length > 0) {
    imgScale.forEach(img=>{
        img.addEventListener('click', ()=>{
            imgScaleParent.classList.add('active')
        })
    })
    imgScaleParent.addEventListener('click', (e)=>{
        if (e.target.classList.contains('active')) { imgScaleParent.classList.remove('active') }
    })
}