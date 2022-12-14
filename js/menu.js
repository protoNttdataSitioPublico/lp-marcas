const navigationHeightDesktop = document.querySelector('.nav-phone').offsetHeight;
const navigationHeightDesktopScroll = document.querySelector('.nav-phone-scroll').offsetHeight;
const navigationHeightMobile = document.querySelector('.nav-phone-scroll-mobile').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeightDesktop + "px");
document.documentElement.style.setProperty('--scroll-padding', navigationHeightDesktopScroll + "px");
document.documentElement.style.setProperty('--scroll-padding', navigationHeightMobile + "px");


const nav_scroll = document.querySelectorAll('.nav-phone-scroll a');
const nav_scroll_mobile = document.querySelectorAll('.nav-phone-scroll-mobile a');
const sections = document.querySelectorAll('section');


const observer = new IntersectionObserver((entradas, observador) =>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            const id = '#' + entrada.target.id;
            history.pushState({}, entrada.target.innerText, id);

            nav_scroll.forEach(nav =>{
                nav.classList.remove('active');

                const href = nav.attributes.href.nodeValue;
                if(href === id){
                    nav.classList.add('active');

                    if(href === '#inicio'){
                        document.querySelector('.nav-phone-scroll').classList.remove('active');
                    }else{
                        document.querySelector('.nav-phone-scroll').classList.add('active');
                    }
                }
            })

        }
    })
},{
    threshold: 1,
    rootMargin: '300px 400px 300px 800px',
});

sections.forEach(section =>{
    observer.observe(section);
});


const observer_menu_mobile = new IntersectionObserver((entradas, observador) =>{
    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            const id = '#' + entrada.target.id;
            history.pushState({}, entrada.target.innerText, id);

            nav_scroll_mobile.forEach(nav =>{
                nav.classList.remove('active');

                const href = nav.attributes.href.nodeValue;
                if(href === id){
                    nav.classList.add('active');

                    if(href === '#inicio'){
                        document.querySelector('.menu-mobile').classList.remove('active');
                    }else{
                        document.querySelector('.menu-mobile').classList.add('active');
                    }
                }

                
            })
        }
    })
},{
    threshold: 1,
    rootMargin: '200px',
});

sections.forEach(section =>{
    observer_menu_mobile.observe(section);
});