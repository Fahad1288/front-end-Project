let loadingAnimation = () => {
  let counter = document.querySelector('.counter')
  let grow = 0
  let tl = gsap.timeline({
    onComplete: function () {
      document.body.style.overflow = 'auto'
    },
  })

  document.body.style.overflow = 'hidden'

  tl.from('.line h1', {
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
  })
  tl.to('.line .now', {
    animationName: 'changeTxt',
  })
  tl.from('.line .count, .line .now', {
    opacity: 0,
    delay: -0.4,
    onStart: function () {
      let interval = setInterval(() => {
        if (grow < 100) {
          counter.innerHTML = grow++
        } else {
          counter.innerHTML = grow
          clearInterval(interval)
        }
      }, 45)
    },
  })
  tl.to('.loader', {
    opacity: 0,
    duration: 0.2,
    delay: 1.5,
    onComplete: function () {
      document.querySelector('.loader').style.display = 'none'
    },
  })
  tl.from('.page1', {
    y: '100%',
    delay: 0.3,
    ease: 'power4.out',
    onComplete: function () {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'auto'
    },
  })
  tl.from('.hero h1', {
    y: '100%',
    stagger: 0.1,
    delay: -0.5,
  })
  tl.from('nav , .number', {
    opacity: 0,
    delay: -0.4,
  })
}
let curserMove = () => {
  document.addEventListener('mousemove', (details) => {
    gsap.to('#crsr', {
      top: details.y,
      left: details.x,
      display: 'block',
      duration: 0.05,
    })
  })
  let h3 = document.querySelectorAll('.nav-part2 h3, .toggleBar')
  h3.forEach((elem) => {
    elem.addEventListener('mouseenter', () => {
      gsap.to('#crsr', {
        height: '4.3vw',
        width: '4.3vw',
      })
    })
    elem.addEventListener('mouseleave', () => {
      gsap.to('#crsr', {
        height: '3vw',
        width: '3vw',
      })
    })
  })

  Shery.makeMagnet('.nav-part2 h3, .toggleBar', {
    duration: 2,
  })
}
let scrollEffects = () => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.video-container', {
    scrollTrigger: {
      trigger: '.page2',
      start: 'top bottom',
      end: '100% center',
      scrub: 1,
    },
    y: '40%',
    ease: 'power1.in',
  })
  gsap.to('.btn', {
    scrollTrigger: {
      trigger: '.page2',
      start: 'top bottom',
      end: '80% center',
      scrub: 1,
    },
    y: '35%',
    ease: 'power1.in',
  })
}
let btnMove = () => {
  let videoContainer = document.querySelector('.video-container')
  let btn = document.querySelector('.btn')

  videoContainer.addEventListener('mousemove', (dets) => {
    const containerRect = videoContainer.getBoundingClientRect()
    const mouseX = dets.clientX - containerRect.left
    const mouseY = dets.clientY - containerRect.top

    gsap.to(btn, {
      top: mouseY,
      left: mouseX,
      transform: ' translate(-50%, -50%)',
      duration: 0.5,
      ease: 'power1.out',
    })
  })
  videoContainer.addEventListener('mouseleave', (dets) => {
    gsap.to(btn, {
      top: '-22%',
      left: '74%',
      transform: ' translate(0)',
      duration: 0.6,
      ease: 'power1.out',
    })
  })
}

gsap.to('.nav-part2', {
  scrollTrigger: {
    trigger: 'header',
    start: 'top 7%',
    end: 'top 7%',
    scrub: 1,
  },
  y: -35,
  opacity: 0,
})
// loadingAnimation()
curserMove()
scrollEffects()
btnMove()
