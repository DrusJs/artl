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