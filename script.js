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
    }, 35)
  },
})
tl.to('.loader', {
  opacity: 0,
  duration: 0.2,
  delay: 1.1,
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
