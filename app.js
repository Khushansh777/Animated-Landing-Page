// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function page1Aninmation() {
const tl = gsap.timeline()
tl.from('nav .logo',{
    y:30,
    opacity:0,
    stagger:0.1,
    delay:0.15,
})
tl.from('.nav-links, nav button',{
     y:30,
    opacity:0,
    stagger:.1,
})

tl.from('#hero #part1',{
    x:-200,
    opacity:0,
    // delay:0.2,
    // stagger:0.3,
},'-=0.6')

tl.from('#hero #part2',{
    opacity:0,
},'-=0.5')

gsap.from('.logos-test img',{
    y:-30,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        // markers:true,
        scroller:'body',
        trigger:'.logos-test',
        start:'top 90%',
        end:'bottom 100%'
    }
})
}

function page2animations(){
const container = document.querySelectorAll('.elem');
container.forEach(element => {
       element.addEventListener('mouseover',() =>{
   gsap.to(element,{
    scale:1.1,
}) 
})

element.addEventListener('mouseleave',() =>{
    gsap.to(element,{
        scale:1,
    })
})
});

const tl2 = gsap.timeline({
scrollTrigger:{
            // markers:true,
            scroller:'body',
            trigger:'.container',
            start:'top 80%',
            scrub:2,
            end:'top 20%'
        }
})
const leftConstainer = document.querySelectorAll('.elem.left');
const rightContainer = document.querySelectorAll('.elem.right');

tl2.from('.elem.line-1.left',{
    x:-300,
    opacity:0,
    delay:0.5,
},'lmao-1')
tl2.from('.elem.line-2.left',{
    x:300,
    opacity:0,
    delay:0.5,
},'lmao-1')
tl2.from('.elem.line-1.right',{
    x:-300,
    opacity:0,
    delay:0.5,
},'lmao-2','-=0.5')
tl2.from('.elem.line-2.right',{
    x:300,
    opacity:0,
    delay:0.5,
},'lmao-2','-=0.5')

}
function navbaranimation() {
    const navbar = document.querySelector('header');
    let lastScroll = window.scrollY;
    const threshold = 15;
    
    // Initial setup
    gsap.set(navbar, { y: 0 });
    
    // Use a single timeline for better performance
    const tl = gsap.timeline({ paused: true });
    tl.to(navbar, {
        y: -50,
        duration: 0.3,
        ease: "power1.out"
    });
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        const scrollDiff = currentScroll - lastScroll;
        
        if (Math.abs(scrollDiff) > threshold) {
            if (scrollDiff > 0 && currentScroll > 100) { // Scrolling down and past 100px
                tl.play();
            } else { // Scrolling up
                tl.reverse();
            }
        }
        lastScroll = currentScroll;
    });
}
navbaranimation()
// page1Aninmation()
// page2animations()


 

