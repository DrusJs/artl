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