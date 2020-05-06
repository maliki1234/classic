const menu_bar = document.querySelector('.navbar-nav-menu-icon')
menu_bar.onclick = ()=>{
    let menu_container = document.querySelector('.navbar-nav-container');
   menu_bar.classList.toggle('toogle')
   menu_container.classList.toggle('navbar-active')
   let menu_items = document.querySelectorAll('.navbar-link')
   //console.log(menu_items.length)
   menu_items.forEach((menu, index)=>{
       //console.log(menu)
        if (menu.style.animation) {
            menu.style.animation = ''
        }
        else{
            menu.style.animation =  'animate 1s ease '+ (index / 7 + 0.3)+'s'
        }
    //    console.log('animate 1s ease '+ 0.5 * index  +'px')
   })
}

const nav = document.querySelector('nav')
const header = document.querySelector('header')
const headerOptions = {
    rootMargin : "-300px 0px 0px 0px",
}
const headerObserver = new IntersectionObserver((entries, headerObserver)=>{
    entries.forEach(entry =>{
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            nav.classList.add('navbar-scroled')
            console.log(header)
        }
        else{
            nav.classList.remove('navbar-scroled')
        }
    })
},headerOptions)


headerObserver.observe(header)




const about = document.querySelector('#about')
const about_container = document.querySelector('.about-container')
const aboutOptions = {
    rootMargin : "0px 0px -400px 0px",
}

const aboutObserver = new IntersectionObserver((entries, aboutObserver)=>{
    entries.forEach(entry =>{
        console.log(entry.target)
        if (!entry.isIntersecting) {
            return
        } else {
            console.log(about_container)
               about_container.classList.add('about-observed')        
        }
    })
},aboutOptions)

aboutObserver.observe(about)