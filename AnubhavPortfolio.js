function valuesetter() {
    gsap.set("#navbar a", {
        y: "-100%",
        opacity: 0
    })
    gsap.set(".row h1", {
        y: "100%",
    })
    gsap.set(".row h2", {
        y: "120%",
    })
    gsap.set(".row img", {
        opacity: 0
    })
    gsap.set(".text h5", {
        opacity: 0
    })
    gsap.set("#imagep5", {
        height: 0
    })


}

function loader() {
    var tl = gsap.timeline();
    tl
        .from("#mid-heading", {
            x: "30%",
            duration: 1,
            stagger: .2,
            opacity: 0,
            ease: Power3.EaseInOut,
        })

        .to("#top-heading", {
            y: "-100%",
            ease: Circ.EaseInOut,
        }, "anim")

        .to("#mid-heading", {
            y: "-100%",
            duration: .5,
            opacity: 0,
            ease: Circ.EaseInOut,
        }, "anim")

        .to("#loader", {
            height: 0,
            top: 0,
            ease: Expo.EaseInOut
        }, "anim1")

        .to("#green", {
            height: "100%",
            duration: 2,
            top: 0,
            delay: -1.5,
            ease: Circ.EaseInOut,
        }, "anim1")

        .to("#green", {
            height: "0%",
            duration: 1.4,
            ease: Circ.EaseInOut,
            onComplete: function () {
                animateHomepage();
            }
        }, "anim")
}


function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
function cursor() {
    var cursor = document.querySelector("#cursor");
    var page = document.querySelector(".main");
    page.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            x: dets.x,
            y: dets.y
        })
    })
    page.addEventListener("mouseenter", function (dets) {
        gsap.to(cursor, {
            scale: 1
        })
    })
    page.addEventListener("mouseleave", function (dets) {
        gsap.to(cursor, {
            scale: 0
        })

    })

}
function animateHomepage() {
    var tl = gsap.timeline();
    tl
        .to("#navbar a", {
            y: 0,
            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut
        })
        .to(".line", {
            y: 0,

            opacity: 1,
            stagger: .05,
            ease: Expo.easeInOut
        })
        .to("#cursor", {
            opacity: 1,

        })
        .to(".row h1", {
            y: 0,
            stagger: .1,
            duration: 1.5,
            ease: Expo.easeInOut

        })
        .to(".row h2", {
            y: 0,
            stagger: .1,
            delay: -1.5,
            duration: 1.5,
            ease: Expo.easeInOut

        })
        .to(".row img", {
            opacity: 1,
            delay: -.5,
            ease: Expo.easeInOut
        })
        .to(".text h5", {
            opacity: 1,
            duration: 2,
            stagger: .1,
            delay: -1,
        })

}

function page5scroll(){
    gsap.to("#imagep5  ", {
        height: "100%",
        scrollTrigger: {
            trigger: "#page5 ",
            scroller: ".main",
            //  markers:true,
            start: "-50% 50%",
            end: "50% 50%",
            scrub: 2
        }
    
    })
    gsap.from("#infop5-head  ", {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
         scrollTrigger: {
            trigger: "#page5 ",
            scroller: ".main",
            //  markers:true,
            start: "-50% 50%",
            end: "50% 50%",
            scrub: 2
    }
    
    })
    gsap.from("#infop5-para ", {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page5 ",
            scroller: ".main",
            //  markers:true,
            start: "-50% 50%",
            end: "50% 50%",
            scrub: 2
    }
    
    })
    gsap.from("#infop5 button ", {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page5 ",
            scroller: ".main",
            //  markers:true,
            start: "-50% 50%",
            end: "50% 50%",
            scrub: 2
            }
    
    })

}
function page2scroll(){
    gsap.from("#top h1, #top img", {
        y: 200,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page2 ",
            scroller: ".main",
            // markers:true,
            start: "10% 50%",
            end: "17% 70%",
            scrub: 2
    }
    })
    gsap.from("#text-div", {
        x: -200,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        scrollTrigger: {
            trigger: "#page2 ",
            scroller: ".main",
            // markers:true,
            start: "18% 50%",
            end: "25% 70%",
            scrub: 2
    }
    })

}
function backchange(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".thing2 ",
            scroller: ".main",
            // markers: true,
            start: "240% 50%",
            end: "250% 50%",
            scrub: 3
        }
    })
    tl2.to(".main", {
        backgroundColor: "black",
    })


    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page4 ",
            scroller: ".main",
            // markers:true,
            start: "-20% 50%",
            end: "-10% 50%",
            scrub: 2
        }
    })
    tl3.to(".main", {
         backgroundColor: "#f2f2f2",
     })


}
function page3scroll(){
    tl3 = gsap.timeline()
tl3.from("#page3-head h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,

    scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        // markers:true,
        start: "2% 50%",
        end: "6% 50%",
        scrub: 2
}

})

tl3.to("#page3-head  ", {

    scale: 0.8,
    opacity: 0.2,
    scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        // markers:true,
        start: "8% 50%",

        end: "20% 50%",
        scrub: 2
}

}, "an")


tl3.to(".project1  ", {
    scale: 1.1,
   scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        // markers:true,
        start: "15% 50%",
        end: "30% 50%",
        scrub: 2
}

}, "an")
tl3.to(".project2  ", {
    scale: 1.1,
    scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        //  markers:true,
        start: "34% 50%",
        end: "50% 50%",
        scrub: 2
 }

})
tl3.to(".project3  ", {
    scale: 1.1,
    scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        // markers: true,
        start: "54% 50%",
        end: "67% 50%",
        scrub: 2



    }

},)
tl3.from("#page3-mid h1 span", {
    y: 100,
    opacity: 0,
     stagger: 0.1,

    scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        // markers:true,
        start: "75% 50%",
        end: "78% 50%",
        scrub: 2
}

},)
tl3.to("#page3-mid  ", {

    scale: 0.8,
    opacity: 0.2,
  scrollTrigger: {
        trigger: "#page3 ",
        scroller: ".main",
        // markers:true,
        start: "85% 50%",

        end: "97% 50%",
        scrub: 2
}

},)

}
function page4scroll(){
    gsap.from("#page4-heading", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
    
        scrollTrigger: {
            trigger: "#page4",
            scroller: ".main",
            // markers:true,
            start: "0% 50%",
            end: "5% 50%",
            scrub: 2
    }
    
    })

}
function footer(){
    
tl3.from("#footer-part1", {

    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,


    scrollTrigger: {
        trigger: "#footer ",
        scroller: ".main",
        //  markers:true,
        start: "-10% 50%",
        end: "20% 50%",
        scrub: 2
 }

},)
tl3.from("#footer-part2", {

    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
     scrollTrigger: {
        trigger: "#footer ",
        scroller: ".main",
        // markers: true,
        start: "30% 50%",
        end: "50% 50%",
        scrub: 2

 }

}, "ah")
tl3.from("#footer-part3", {

    y: 200,
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,


    scrollTrigger: {
        trigger: "#footer ",
        scroller: ".main",
        //  markers:true,
        start: "40% 50%",
        end: "60% 50%",
        scrub: 2



    }

}, "ah")
gsap.to("#footer svg  ", {
    y: 1000,
    stagger: 1,
        scrollTrigger: {
        trigger: "#footer ",
        scroller: ".main",
        // markers: true,
        start: "-20% 50%",
        end: "100% 50%",
        scrub: 2

}

},)
    
}
function swiperjs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
       
      });
}
swiperjs();
init();
valuesetter();
loader();
cursor();
page5scroll();
page2scroll();
backchange();
page3scroll();
page4scroll();
footer();






















