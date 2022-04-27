const speed = 1;
import gsap from 'gsap';
import Hammer from '@squadette/hammerjs';
import { TouchHoverEvents } from '@/helpers';
import VirtualScroll from 'virtual-scroll'

const brakepoints = {
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1441
}
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});
export const Home = {
  slideIndex: 0,
  isAppInit: false,
  preloaderDelay: 0,
  preloaderDurationFinal: 0,
  isDesktop: false,
  init: function () {
    return new Promise((resolve, reject) => {
      for (const $card of document.querySelectorAll('.fast-categories-block')) {
        const $icon = $card.querySelector('.icon'),
          $text = $card.querySelector('.label-item__title'),
          $chars = $card.querySelectorAll('.char'),
          $bg = $card.querySelector('.fast-categories-block__bg'),
          $item = $card.querySelector('.fast-categories-block__container');
        let rotation = 0,
          interval;
        const letters = gsap
          .timeline({ paused: true })
          .fromTo(
            $bg,
            { scale: 0.9 },
            { duration: 1 / 2, scale: 1, ease: 'power2.inOut' }
          )
          .fromTo(
            $text,
            { yPercent: 100, autoAlpha: 0 },
            { duration: 1, yPercent: 0, autoAlpha: 1, ease: 'power2.inOut' },
            `-=${1 / 2}`
          )
          .fromTo(
            $chars,
            { autoAlpha: 0, yPercent: 100 },
            {
              duration: 1 * 0.7,
              autoAlpha: 1,
              yPercent: 0,
              ease: 'power2.inOut',
              stagger: { amount: 1 * 0.3 }
            },
            `-=${1}`
          );

        function randomAnimation() {
          if (getRandom(1, 2) === 1 && rotation < 360) {
            rotation = rotation + 180
          } else if (rotation > -360) {
            rotation = rotation - 180
          }
          $icon.setAttribute('style', `transform:rotate(${rotation}deg)`)
          interval = setTimeout(randomAnimation, getRandom(1, 5) * 1000)
        }

        interval = setTimeout(randomAnimation, getRandom(1, 5) * 1000);

        $item.addEventListener('mouseenter', event);
        $item.addEventListener('mouseleave', event);
        $item.addEventListener('touchstart', event);
        $item.addEventListener('customTouchend', event);

        function event(event) {
          if ((event.type === 'mouseenter' && !TouchHoverEvents.touched) || event.type === 'touchstart') {
            letters.play()
            $icon.setAttribute('style', 'transform:rotation(0deg)')
            clearTimeout(interval)
          } else if (
            (event.type === 'mouseleave' && !TouchHoverEvents.touched) ||
            event.type === 'customTouchend'
          ) {
            letters.reverse()
            interval = setTimeout(randomAnimation, getRandom(1, 5) * 1000)
          }
        }
      }
      function getRandom(min, max) {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      //flag
      this.available = true;
      this.pagination = document.querySelector('.m-slider-pagination');
      this.pagitems = document.querySelectorAll('.m-slider-pagination__link');
      this.pagtrigger = document.querySelector('.m-slider-pagination__item');
      this.pagtrigger.setAttribute('style', `width:${100 / this.pagitems.length}%;`)
      this.slides = document.querySelectorAll('.m-slider-slide');
      this.slider = document.querySelector('.m-slider');
      this.slide = this.slides[this.slideIndex];
      this.slide.classList.add('active');
      //animations
      gsap.set(Home.pagtrigger, { xPercent: (100 * Home.slideIndex) });
      this.swipearea = new Hammer.Manager(this.slider);
      this.swipearea.add(new Hammer.Pan().set({ threshold: 1 }));
      //event click
      this.pagitems.forEach((element, index) => {
        element.addEventListener('click', (event) => {
          event.preventDefault();
          if (this.available) {
            this.available = false;
            this.change(index);
          }
        })
      })
      if (this.isDesktop) {
        //event scroll
        this.scrollListener = (event) => {
          if (event.target.closest('.m-slider') !== null && this.available) {
            if (event.deltaY > 0 && this.slides.length > this.slideIndex + 1) {
              this.available = false;
              this.change(this.slideIndex + 1);
            } else if (event.deltaY < 0 && this.slideIndex > 0) {
              this.available = false;
              this.change(this.slideIndex - 1);
            }
          }
        }
        window.addEventListener('wheel', (event) => { this.scrollListener(event) }, { passive: false });
        //event keydown
        this.keyListener = (event) => {
          if (this.available) {
            if (this.slideIndex + 1 < this.slides.length) {
              if (event.key === 'ArrowRight') {
                this.available = false;
                this.change(this.slideIndex + 1)
              }
            }
            if (this.slideIndex > 0) {
              if (event.key === 'ArrowLeft') {
                this.available = false;
                this.change(this.slideIndex - 1)
              }
            }
          }
        }
        window.addEventListener("keyup", (event) => { this.keyListener(event) });
      }
      //event swipe
      let cursorPos = {
        current: {
          x: 0,
          y: 0
        },
        start: {
          x: 0,
          y: 0,
          update: function (callback, func) {
            this.x = cursorPos.current.x;
            this.y = cursorPos.current.y;
            if (callback == 'onComplete') {
              func();
            }
          }
        }
      },
        swipeLength = 150,
        maxTime = 0.5,
        direction = false,
        swipeForward = false,
        swipeBack = false;

      this.swipearea.on("panleft panend panstart panup pandown panright", (event) => {
        cursorPos.current.x = event.center.x;
        cursorPos.current.y = event.center.y;

        if (this.available) {
          //если поставили палец
          if (event.type == 'panstart') {
            this.swiped = true;
            cursorPos.start.update();
          }
          //подняли палец с дисплея
          else if (event.type == 'panend') {
            this.swiped = false;
            direction = false;
            this.animationTime = 0;
            if (swipeForward == true) {
              this.back.play();
              this.triggerNextAnimation.reverse();
            } else if (swipeBack == true) {
              this.forward.play();
              this.triggerPrevAnimation.reverse();
            }
            swipeForward = false;
            swipeBack = false;
          }
          //если длина свайпа достаточная
          else if (this.animationTime >= maxTime) {
            this.available = false;
            direction = false;
            if (swipeForward == true) {
              this.change(this.slideIndex + 1);
            } else if (swipeBack == true) {
              this.change(this.slideIndex - 1);
            }
            swipeForward = false;
            swipeBack = false;
          }
          //процесс ерзанья пальцами
          else if (this.swiped == true) {
            let pos;
            if (direction == false) {
              if (event.type == 'panup' || event.type == 'pandown') {
                direction = 'vertical';
              } else if (event.type == 'panright' || event.type == 'panleft') {
                direction = 'horizontal';
              }
            }

            if (direction == 'vertical') {
              pos = event.center.y - cursorPos.start.y;
            } else if (direction == 'horizontal') {
              pos = event.center.x - cursorPos.start.x;
            }

            //управление временем анимации
            if (event.type == 'panup' || event.type == 'panleft') {
              if (swipeBack == false) {
                swipeForward = true;
                if (this.slideIndex == this.slides.length - 1) {
                  this.animationTime = (-pos / (swipeLength - pos)) * maxTime;
                } else {
                  this.animationTime = (-pos / swipeLength) * maxTime;
                }
              } else {
                if (this.slideIndex == 0) {
                  this.animationTime = (pos / (swipeLength + pos)) * maxTime;
                } else {
                  this.animationTime = (pos / swipeLength) * maxTime;
                }
                if (this.animationTime <= 0) {
                  swipeBack = false;
                  this.animationTime = 0;
                }
              }
            } else {
              if (swipeForward == false) {
                swipeBack = true;
                if (this.slideIndex == 0) {
                  this.animationTime = (pos / (swipeLength + pos)) * maxTime;
                } else {
                  this.animationTime = (pos / swipeLength) * maxTime;
                }
              } else {
                if (this.slideIndex == this.slides.length - 1) {
                  this.animationTime = (-pos / (swipeLength - pos)) * maxTime;
                } else {
                  this.animationTime = (-pos / swipeLength) * maxTime;
                }
                if (this.animationTime <= 0) {
                  swipeForward = false;
                }
              }
            }

            //последняя корректировка
            if (this.animationTime > maxTime) {
              this.animationTime = maxTime;
            } else if (this.animationTime == -0 || this.animationTime < 0) {
              this.animationTime = 0;
            }

            if (swipeForward == true) {
              this.back.reverse(speed - this.animationTime);
              this.triggerNextAnimation.play(this.animationTime);
              this.back.pause();
              this.triggerNextAnimation.pause();
            } else if (swipeBack == true) {
              this.forward.reverse(speed - this.animationTime);
              this.triggerPrevAnimation.play(this.animationTime);
              this.forward.pause();
              this.triggerPrevAnimation.pause();
            }
          }
        }
      });
      this.getAnimations().then(() => {
        this.initialized = true;
        resolve();
      });
    })
  },
  getAnimations: function () {
    return new Promise((resolve, reject) => {
      let index = this.slideIndex,
        $this = this.slide;

      //второстепенные анимации
      this.secondary = gsap.timeline(),
        this.forward = gsap.timeline({ paused: true }),
        this.back = gsap.timeline({ paused: true }),
        this.triggerAnimation = gsap.timeline({ paused: true }),
        this.triggerNextAnimation = gsap.timeline({ paused: true }),
        this.triggerPrevAnimation = gsap.timeline({ paused: true }),
        this.enterAnimation = gsap.timeline({ paused: true });

      //trigger
      this.triggerAnimation
        .to(Home.pagtrigger, { duration: speed * 2, xPercent: 100 * index, ease: 'power2.inOut' })
        .to(Home.pagtrigger, { duration: speed, scaleX: 1.5, ease: 'power2.in' }, `-=${speed * 2}`)
        .to(Home.pagtrigger, { duration: speed, scaleX: 1, ease: 'power2.out' }, `-=${speed}`)
      this.triggerNextAnimation
        .to(Home.pagtrigger, { duration: speed * 2, xPercent: 100 * (index + 1), ease: 'power2.inOut' })
        .to(Home.pagtrigger, { duration: speed, scaleX: 1.5, ease: 'power2.in' }, `-=${speed * 2}`)
        .to(Home.pagtrigger, { duration: speed, scaleX: 1, ease: 'power2.out' }, `-=${speed}`)
      this.triggerPrevAnimation
        .to(Home.pagtrigger, { duration: speed * 2, xPercent: 100 * (index - 1), ease: 'power2.inOut' })
        .to(Home.pagtrigger, { duration: speed, scaleX: 1.5, ease: 'power2.in' }, `-=${speed * 2}`)
        .to(Home.pagtrigger, { duration: speed, scaleX: 1, ease: 'power2.out' }, `-=${speed}`)

      //categories
      if (this.slide.classList.contains('fast-categories')) {

        let $slides = $this.querySelectorAll('.fast-categories-block');
        this.forward
          .set($this, { autoAlpha: 1 })
          .fromTo($slides, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3 } })
          .fromTo($slides, { xPercent: 50 }, { immediateRender: false, duration: speed * 0.7, xPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
        this.back
          .set($this, { autoAlpha: 1 })
          .fromTo($slides, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3, from: 'end' } })
          .fromTo($slides, { xPercent: -50 }, { immediateRender: false, duration: speed * 0.7, xPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3, from: 'end' } }, `-=${speed}`)
        this.enterAnimation
          .set($this, { autoAlpha: 1 })
          .fromTo($slides, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3 } })
          .fromTo($slides, { yPercent: 50 }, { immediateRender: false, duration: speed * 0.7, yPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
      }
      //projects
      else if (this.slide.classList.contains('project-preview')) {
        let $image = $this.querySelector('.project-preview__image'),
          $icon = $this.querySelector('.label-item .icon'),
          $iconback = $this.querySelector('.label-item__title'),
          $iconletters = $this.querySelectorAll('.label-item__title .char'),
          $line = $this.querySelectorAll('.project-preview__line, .project-preview__link .line'),
          $textchars = $this.querySelectorAll('.project-preview__text .char'),
          $titlechars = $this.querySelectorAll('.project-preview__title .char'),
          $linkchars = $this.querySelectorAll('.project-preview__link .char');

        this.forward
          .set($this, { autoAlpha: 1 })
          .fromTo($image, { autoAlpha: 0 }, {
            duration: speed, autoAlpha: 1, ease: 'power2.inOut',
            onStart: function () {
              gsap.fromTo($line, { scaleX: 0, xPercent: -50 }, { duration: speed * 2, scaleX: 1, xPercent: 0, ease: 'power2.out' })
            }
          })
          .fromTo($line, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' }, `-=${speed}`)
          .fromTo($image, { xPercent: 30 }, { immediateRender: false, duration: speed, xPercent: 0, ease: 'power2.out' }, `-=${speed}`)
          //text
          .fromTo($titlechars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($titlechars, { x: 50 }, { immediateRender: false, duration: speed * 0.7, x: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($textchars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($textchars, { x: 50 }, { immediateRender: false, duration: speed * 0.7, x: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($linkchars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($linkchars, { x: 50 }, { immediateRender: false, duration: speed * 0.7, x: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          //icon label
          .fromTo($icon, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' }, `-=${speed}`)
          .fromTo($icon, { yPercent: 50 }, { duration: speed, yPercent: 0, ease: 'power2.out' }, `-=${speed}`)
          .fromTo($iconletters, { autoAlpha: 0, yPercent: 100 }, { duration: speed * 0.7, autoAlpha: 1, yPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($iconback, { yPercent: 100, autoAlpha: 0 }, { duration: speed, yPercent: 0, autoAlpha: 1, ease: 'power2.out' }, `-=${speed}`)

        this.back
          .set($this, { autoAlpha: 1 })
          .fromTo($image, { autoAlpha: 0 }, {
            duration: speed, autoAlpha: 1, ease: 'power2.inOut',
            onStart: function () {
              gsap.fromTo($line, { scaleX: 0, xPercent: -50 }, { duration: speed * 2, scaleX: 1, xPercent: 0, ease: 'power2.out' })
            }
          })
          .fromTo($line, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' }, `-=${speed}`)
          .fromTo($image, { xPercent: -30 }, { immediateRender: false, duration: speed, xPercent: 0, ease: 'power2.out' }, `-=${speed}`)
          //text
          .fromTo($titlechars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3, from: 'end' } }, `-=${speed}`)
          .fromTo($titlechars, { xPercent: -50 }, { immediateRender: false, duration: speed * 0.7, xPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3, from: "end" } }, `-=${speed}`)
          .fromTo($textchars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3, from: 'end' } }, `-=${speed}`)
          .fromTo($textchars, { x: -50 }, { immediateRender: false, duration: speed * 0.7, x: 0, ease: 'power2.out', stagger: { amount: speed * 0.3, from: "end" } }, `-=${speed}`)
          .fromTo($linkchars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3, from: "end" } }, `-=${speed}`)
          .fromTo($linkchars, { x: -50 }, { immediateRender: false, duration: speed * 0.7, x: 0, ease: 'power2.out', stagger: { amount: speed * 0.3, from: "end" } }, `-=${speed}`)
          //icon label
          .fromTo($icon, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' }, `-=${speed}`)
          .fromTo($icon, { yPercent: -50 }, { duration: speed, yPercent: 0, ease: 'power2.out' }, `-=${speed}`)
          .fromTo($iconletters, { autoAlpha: 0, yPercent: -100 }, { duration: speed * 0.7, autoAlpha: 1, yPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3, from: 'end' } }, `-=${speed}`)
          .fromTo($iconback, { yPercent: -100, autoAlpha: 0 }, { duration: speed, yPercent: 0, autoAlpha: 1, ease: 'power2.out' }, `-=${speed}`)

        this.enterAnimation
          .set($this, { autoAlpha: 1 })
          .fromTo($image, { autoAlpha: 0, scale: 0.95 }, { immediateRender: false, duration: speed, autoAlpha: 1, scale: 1, ease: 'power2.inOut' })
          .fromTo($line, { autoAlpha: 0, scaleX: 0.5, xPercent: -25 }, { duration: speed, autoAlpha: 1, scaleX: 1, xPercent: 0, ease: 'power2.inOut' }, `-=${speed}`)
          .fromTo($titlechars, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3, from: 'random' } }, `-=${speed}`)
          .fromTo($textchars, { autoAlpha: 0 }, { duration: speed * 0.6, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.4, from: 'random' } }, `-=${speed}`)
          .fromTo($linkchars, { autoAlpha: 0 }, { duration: speed * 0.6, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.4, from: 'random' } }, `-=${speed}`)
          .fromTo($icon, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' }, `-=${speed}`)
          .fromTo($icon, { yPercent: 50 }, { duration: speed, yPercent: 0, ease: 'power2.out' }, `-=${speed}`)
          .fromTo($iconletters, { autoAlpha: 0, yPercent: 100 }, { duration: speed * 0.7, autoAlpha: 1, yPercent: 0, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
          .fromTo($iconback, { yPercent: 100, autoAlpha: 0 }, { duration: speed, yPercent: 0, autoAlpha: 1, ease: 'power2.out' }, `-=${speed}`)

        if (this.slide.classList.contains('navigator-preview')) {
          let $images = this.slide.querySelectorAll('.image');
          this.secondary
            .fromTo($images[0], { rotation: 180 }, { duration: speed * 2, rotation: 0, ease: 'power2.inOut' })
            .fromTo($images[1], { rotation: -360 }, { duration: speed * 2, rotation: 0, ease: "back.out(5)" }, `-=${speed * 2}`)
        }
        else if (this.slide.classList.contains('patron-preview')) {
          let $image = this.slide.querySelectorAll('.image')[1];
          this.secondary
            .fromTo($image, { scale: 0.7, rotation: 45 }, { duration: speed * 2, scale: 1, rotation: 0, ease: 'power2.out' })
        }
        else {
          let $image = this.slide.querySelectorAll('.image')[1];
          this.secondary
            .fromTo($image, { scale: 0.5 }, { duration: speed * 2, scale: 1, ease: 'power2.out' })
        }

      }
      //home
      else {
        let $logo = $this.querySelector('.home-logo'),
          $words = $logo.querySelectorAll('path');
        //animation
        this.forward = gsap.timeline({ paused: true })
          .set($this, { autoAlpha: 1 })
          .fromTo($logo, { scale: 1.1 }, { immediateRender: false, duration: speed, scale: 1, ease: 'power2.out' })
          .fromTo($words, { autoAlpha: 0 }, { duration: speed * 0.8, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.2, from: 'random' } }, `-=${speed}`)
        this.back = this.forward;

        if (this.isAppInit) {
          this.enterAnimation = this.forward;
        } else {
          this.enterAnimation = gsap.timeline({ paused: true })
            .set([$words, $this], { autoAlpha: 1 })
            .fromTo($logo, { scale: 1.1, autoAlpha: 0 }, { duration: this.preloaderDurationFinal, scale: 1, autoAlpha: 1, ease: 'power3.inOut' })
        }
      }

      if (!this.initialized) {
        let delay = this.isAppInit ? 0 : this.preloaderDelay;
        //line
        this.lineAnimation = gsap.timeline({ paused: true })
          .fromTo(Home.pagination, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' })
          .fromTo(Home.pagination, { y: 20 }, { duration: speed, y: 0, ease: 'power2.out' }, `-=${speed}`)

        this.enterAnimation.eventCallback('onStart', () => {
          gsap.set(document.querySelector('.content'), { autoAlpha: 1 });
          setTimeout(() => {
            gsap.fromTo(Home.pagtrigger, { scaleX: 0.5, xPercent: 100 * (Home.slideIndex - 0.25) }, { duration: speed, scaleX: 1, xPercent: 100 * Home.slideIndex, ease: 'power2.out' })
            this.lineAnimation.play();
          }, delay * 1000)
        })
      }

      resolve();
    })
  },
  change: function (index) {
    for (let $this of this.slides) {
      $this.classList.remove('active');
    }
    for (let $this of this.pagitems) {
      $this.classList.remove('active');
    }
    this.pagitems[index].classList.add('active');
    this.slide = this.slides[index];
    this.slide.classList.add('active');
    this.slideIndex < index ? this.direction = 'next' : this.direction = 'prev';
    this.slideIndex = index;

    if (this.direction == 'next') {
      this.back.progress() == 0 ? this.back.reverse(0) : this.back.reverse();
      this.back.eventCallback('onReverseComplete', () => {
        this.forward.play();
        this.secondary.play(0);
      })
    } else {
      this.forward.progress() == 0 ? this.forward.reverse(0) : this.forward.reverse();
      this.forward.eventCallback('onReverseComplete', () => {
        this.back.play();
        this.secondary.play(0);
      })
    }

    if (this.swiped == true) {
      this.swiped = false;
      if (this.direction == 'next') {
        this.triggerNextAnimation.play(this.animationTime);
      } else {
        this.triggerPrevAnimation.play(this.animationTime);
      }
      this.animationTime = 0;
      this.getAnimations();
    } else {
      this.getAnimations().then(() => {
        this.triggerAnimation.play();
      });
    }
    this.forward.eventCallback('onComplete', () => {
      this.available = true;
      document.querySelector('.wrapper').classList.remove('disabled')
    });
    this.back.eventCallback('onComplete', () => {
      this.available = true;
    });
    window.location.hash = index;
  },
  destroy: function () {
    this.initialized = false;
    this.swipearea.destroy();
    window.removeEventListener('wheel', this.scrollListener);
    window.removeEventListener('keyup', this.keyListener);
    this.lineAnimation.reverse();
    gsap.to(Home.pagtrigger, { duration: speed, scaleX: 0, xPercent: 100 * (this.slideIndex - 1), ease: 'power2.in' })
  }
};
export const Contacts = {
  getAnimations: function () {
    return new Promise((resolve, reject) => {
      this.enterAnimation = gsap.timeline({ paused: true })
        .set(document.querySelector('.contacts'), { autoAlpha: 1 })
        .fromTo(document.querySelectorAll('.contacts__animate-item'), { autoAlpha: 0 }, { autoAlpha: 1, duration: speed * 0.8, ease: 'power2.inOut', stagger: { amount: speed * 0.2, from: 'random' } })
      resolve();
    })
  },
}
export const Category = {
  animations: [],
  initialized: false,
  init: function () {
  },
  addHoverEvents: function () {
    const images = document.querySelectorAll('.projects-block__image')
    images.forEach(($image) => {
      let $chars = $image.querySelectorAll('.char'),
        animation;

      animation = gsap.timeline({ paused: true })
        .fromTo($chars, { autoAlpha: 0, yPercent: 50 }, { duration: speed, yPercent: 0, autoAlpha: 1, ease: 'power2.out', stagger: { amount: speed * 0.25, from: 'random' } })

      $image.addEventListener('mouseenter', event)
      $image.addEventListener('mouseleave', event)
      $image.addEventListener('touchstart', event)
      $image.addEventListener('customTouchend', event)

      function event(event) {
        if ((event.type == 'mouseenter' && !TouchHoverEvents.touched) || event.type == 'touchstart') {
          animation.timeScale(1).play()
        }
        else if ((event.type == 'mouseleave' && !TouchHoverEvents.touched) || event.type == 'customTouchend') {
          animation.timeScale(2).reverse();
        }
      }

    })
  },
  getAnimations: function () {
    return new Promise((resolve, reject) => {
      let $navitems = document.querySelectorAll('.projects-nav__item');
      this.enterAnimation = gsap.timeline({ paused: true })
        .set(document.querySelector('.projects'), { autoAlpha: 1 })
        .fromTo($navitems, { autoAlpha: 0 }, { duration: speed * 0.7, autoAlpha: 1, ease: 'power2.inOut', stagger: { amount: speed * 0.3 } })
        .fromTo($navitems, { yPercent: 100, autoAlpha: 0 }, { duration: speed * 0.7, yPercent: 0, autoAlpha: 1, ease: 'power2.out', stagger: { amount: speed * 0.3 } }, `-=${speed}`)
      resolve();
    })
  },
  getVisibleProjects: function () {
    let projects = document.querySelectorAll('.projects-block')
    projects.forEach(($project, index) => {
      let y = Math.round($project.getBoundingClientRect().top);
      if (!$project.classList.contains('visible') && y < window.innerHeight) {
        $project.classList.add('visible');
        let $image = $project.querySelector('.projects-block__image'),
          h = $image.getBoundingClientRect().height,
          $text = $project.querySelector('.projects-block__text'),
          idx;

        if ($project.classList.contains('projects-block_type-1') && window.innerWidth >= brakepoints.lg) {
          idx = 0.25;
        } else {
          idx = 0.75;
        }

        Category.animations[index] = gsap.timeline()
          .fromTo($project, { autoAlpha: 0 }, { duration: speed, autoAlpha: 1, ease: 'power2.inOut' })
          .fromTo($image, { scaleY: 1.5, yPercent: 50 }, { immediateRender: false, duration: speed, scaleY: 1, yPercent: 0, ease: 'power2.out' }, `-=${speed}`)
          .fromTo($text, { y: h * idx }, { duration: speed, y: 0, ease: 'power2.out' }, `-=${speed}`)
      }
    })
  },
  createGrid: function (callback) {
    let $blocks = document.querySelectorAll('.projects-block'),
      $container = document.querySelector('.row'),
      m = Math.round(document.querySelector('.row').getBoundingClientRect().width * 0.08333),
      order = 0;
    $blocks.forEach(($block, index, array) => {
      $block.classList.remove('projects-block_type-1', 'projects-block_type-2',
        'projects-block_type-3', 'projects-block_type-4', 'projects-block_type-5');
      order++;
      if (order > 5) order = 1;
      if (order == 1 || order == 5) {
        $block.classList.add('col-lg-7', 'col-sm-6');
      } else if (order == 2 || order == 4) {
        $block.classList.add('col-lg-4', 'col-sm-6');
      } else {
        $block.classList.add('col-sm-6');
      }
    })
    order = 0;


    if (window.innerWidth >= brakepoints.lg) {
      $blocks.forEach(($block, index, array) => {
        order++;
        if (order > 5) order = 1;
        $block.classList.add(`projects-block_type-${order}`);

        $block.style.top = 'auto';

        if (order == 2) {
          if (array[index + 1] === undefined) {
            $block.style.marginTop = `${m + 60}px`;
          } else {
            let top = array[index - 1].getBoundingClientRect().top - document.querySelector('.projects-category').getBoundingClientRect().top;
            $block.style.position = 'absolute';
            $block.style.right = '0';
            $block.style.top = `${top + m + 60}px`;
          }
        }
        if (index + 1 < array.length) {
          $block.style.marginBottom = `${m}px`;
        }

      })
    } else {
      let t1 = 0, t2 = 0;
      $blocks.forEach(($block, index, array) => {
        order++;
        if (order > 4) order = 1;
        $block.classList.add(`projects-block_type-${order}`);

        if (window.innerWidth >= brakepoints.sm) {
          if (order == 1 || order == 3) {
            $block.style.top = `${t1}px`;
            let h = $block.getBoundingClientRect().height + 45;
            t1 += h;
          } else {
            $block.style.top = `${t2}px`;
            let h = $block.getBoundingClientRect().height + 45;
            t2 += h;
          }
          $container.style.height = `${Math.max(t1, t2)}px`;
        }

      })
    }
    typeof callback === 'function' && callback()
  },
  change: function () {
    let projects = document.querySelectorAll('.projects-block');
    if (!Category.initialized) {
      Category.initialized = true;
      Category.createGrid(() => {
        gsap.set(document.querySelector('.projects-category'), { autoAlpha: 1 });
        Category.getVisibleProjects();
      });
    } else {
    Scroll.scrollTo(0, speed);
    projects.forEach(($project) => { $project.classList.remove('visible') });
    Category.createGrid(() => {
      gsap.set(document.querySelector('.projects-category'), { autoAlpha: 1 });
      Category.getVisibleProjects();
    });
    }
  },
  destroy: function () {
    clearTimeout(Projects.timeoutEnter);
    Projects.animations.forEach(($this) => {
      $this.reverse();
    })
    window.removeEventListener('resize', Projects.createGrid);
    window.removeEventListener('Scroll', Projects.getVisibleProjects);
    this.initialized = false;
  }
}
export const Scroll = {
  ease: 0.05,                 //easing
  scrollerMinHeight: 100,     //px
  init: function() {
    document.querySelector('.header').classList.add('header_scrollable');
    this.$scroll = document.querySelector('.scrollable');
    this.$scrollbar = document.querySelector('.scrollbar');
    this.$scrollbar_container = document.querySelector('.scrollbar__container');
    this.$scroller = document.querySelector('.scrollbar__scroller');
    this.ty = +localStorage.getItem('scroll') < 0 ? +localStorage.getItem('scroll') : 0;
    this.y = this.ty;
    this.currentY = this.ty;
    this.ty_old = this.ty;
    this.scrollerY = 0;
    this.oldH = 0;
    this.active = false;
    this.visible = undefined;
    this.currentEase = this.ease;
    this.sectionGetHeight=()=>{return this.$scroll.getBoundingClientRect().height};
    this.scrollbarGetHeight=()=>{return this.$scrollbar_container.getBoundingClientRect().height};
    this.scrollerGetHeight=()=>{return this.$scroller.getBoundingClientRect().height};
    this.scrollerCalcHeight=()=>{return Math.max(this.scrollerMinHeight, this.scrollbarGetHeight()/(this.sectionGetHeight()/window.innerHeight))};
    this.scrollingCalcHeight=()=>{return this.sectionGetHeight()-window.innerHeight};
    this.checkScrollSize();
    window.addEventListener('resize', Scroll.checkScrollSize);
    gsap.set(this.$scroll, {y:this.ty});

    this.initializeTimeout = setTimeout(()=>{
      /*==== Animation =====*/
      this.scrollbarAnimation = gsap.timeline({paused:true})
        .fromTo(this.$scrollbar, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.InOut'})
        .fromTo(this.$scrollbar, {x:15}, {duration:speed, x:0, ease:'power2.out'}, `-=${speed}`)
      /*==== Scrolling trigger =====*/
      this.instance = new VirtualScroll({passive:false});
      this.instance.on((event)=>{
        if(!Nav.state && !Scroll.inscroll && Scroll.initialized==true) {
          this.ty += event.deltaY;
          this.ty = Math.max(-this.scrollingCalcHeight(), this.ty);
          this.ty = Math.min(0, this.ty);
          this.ty = Math.round(this.ty);
        }
      });
      this.initialized = true;
      this.animation();
    }, speed*500)
  },
  //scrolling animation
  animation: function() {
    if(Scroll.initialized) {
      requestAnimationFrame(Scroll.animation);
      if(Scroll.scrollingCalcHeight()>0) {
        //scrollarea
        Scroll.currentY += (Scroll.ty - Scroll.currentY) * Scroll.currentEase;
        Scroll.$scroll.style.transform = `translate3d(0, ${Scroll.currentY}px, 0)`;
        //scroller
        Scroll.$scroller.style.transform = `translate3d(0, ${-(100*((Scroll.scrollbarGetHeight()-Scroll.scrollerGetHeight())/Scroll.scrollerGetHeight()) * (Scroll.currentY/Scroll.scrollingCalcHeight()))}%, 0)`;


        Scroll.y = Math.round(Scroll.currentY)>-1 ? 0 : Math.round(Scroll.currentY);
        Scroll.ty = Math.round(Scroll.ty)>-1 ? 0 : Math.round(Scroll.ty);
        
        //add scroll event
        if(Scroll.active) {
          if(Scroll.ty_old==Scroll.ty || Scroll.ty==Scroll.y) {
            Scroll.active=false;
          }
          window.dispatchEvent(new CustomEvent("Scroll"));
          if(Scroll.ty<Scroll.y || Scroll.ty_old>Scroll.ty) {
            window.dispatchEvent(new CustomEvent("ScrollBottom"));
          } else if(Scroll.ty>Scroll.y || Scroll.ty_old<Scroll.ty) {
            window.dispatchEvent(new CustomEvent("ScrollTop"));
          }
          localStorage.setItem('scroll', Scroll.currentY);
        } else if(Scroll.ty_old!==Scroll.ty || Scroll.ty!==Scroll.y) {
          Scroll.active=true;
        }
      }
      Scroll.ty_old = Scroll.ty;
      Scroll.checkScroller();
    }
  },
  scrollTo: function(value, scrollSpeed) {
    if(this.scrollTopTimeout) clearTimeout(this.scrollTopTimeout);
    value = Math.max(-this.scrollingCalcHeight(), value);
    value = Math.min(0, value);
    this.inscroll = true;
    this.currentEase = 1;

    this.scrollToAnimation = gsap
      .fromTo(Scroll, {ty:Scroll.currentY}, {ty:value, duration:scrollSpeed, ease:'power2.inOut'});

    this.scrollTopTimeout = setTimeout(()=>{
      this.currentEase = this.ease;
      this.inscroll = false;
    }, scrollSpeed*1000)
  },
  checkScrollSize: function() {
    let h1 = document.querySelector('.header').getBoundingClientRect().height,
        h2 = window.innerHeight;
    if(Header.isVisible) {
      gsap.set(Scroll.$scrollbar, {css:{height:h2-h1}});
    } else {
      gsap.set(Scroll.$scrollbar, {css:{height:h2}});
    }
    if(Scroll.initialized) {
      gsap.set(Scroll.$scroller, {css:{height:`${100*(Scroll.scrollerCalcHeight()/Scroll.scrollbarGetHeight())}%`}});
    }
  },
  checkScroller: function() {
    let h1 = document.querySelector('.header').getBoundingClientRect().height,
        h2 = window.innerHeight;
    if(Header.isVisible && !this.expanded) {
      this.expanded = true;
      if(this.expanded_animation) this.expanded_animation.pause();
      this.expanded_animation = gsap
        .to(Scroll.$scrollbar, {duration:speed, css:{height:h2-h1}, ease:'power2.out'})
    } else if(!Header.isVisible && this.expanded) {
      this.expanded = false;
      if(this.expanded_animation) this.expanded_animation.pause();
      this.expanded_animation = gsap
        .to(Scroll.$scrollbar, {duration:speed, css:{height:h2}, ease:'power2.inOut'})
    }

    if(Scroll.scrollingCalcHeight()>0) {
      if(Scroll.sectionGetHeight()!==Scroll.oldH) {
        Scroll.oldH = Scroll.sectionGetHeight();
        gsap.to(Scroll.$scroller, {duration:speed, css:{height:`${100*(Scroll.scrollerCalcHeight()/Scroll.scrollbarGetHeight())}%`}, ease:'power2.out'});
      }
      if(!Scroll.visible) {
        Scroll.visible=true;
        Scroll.scrollbarAnimation.play();
      }
    } else if(Scroll.scrollingCalcHeight()<=0) {
      if(Scroll.visible) {
        Scroll.oldH = Scroll.sectionGetHeight();
        gsap.to(Scroll.$scroller, {duration:speed, css:{height:'100%'}, ease:'power2.in'});
        Scroll.visible=false;
        Scroll.scrollbarAnimation.reverse();
      }
    }
  },
  destroy: function() {
    if(this.initializeTimeout) clearTimeout(this.initializeTimeout);
    if(this.initialized==true) {
      document.querySelector('.header').classList.remove('header_scrollable');
      window.removeEventListener('resize', Scroll.checkScrollSize);
      this.instance.destroy();
      this.scrollTo(this.currentY+window.innerHeight, speed);
      this.scrollbarAnimation.reverse();
      gsap.to(this.$scroller, {duration:speed, css:{height:this.$scroller.getBoundingClientRect().height/2}, ease:'power2.in', onComplete:function(){
        Scroll.initialized=false;
        localStorage.setItem('scroll', 0);
      }});
    }
  }
}
export const Nav = {
  isVisible: false,
  state: false,
}
export const Header = {
  init: function() {

    this.isVisible = true;
    this.animation = gsap.timeline({paused:true})
      .to(document.querySelector('.header'), {yPercent:-100, duration:speed, ease:'power2.in'})
    

    window.addEventListener('ScrollBottom', ()=>{
      this.hide();
    })

    window.addEventListener('ScrollTop', ()=>{
      this.show();
    })

  },
  hide: function() {
    if(this.isVisible && Scroll.y<-document.querySelector('.header').getBoundingClientRect().height && !Nav.state) {
      this.isVisible=false;
      if(this.animation) this.animation.pause();
      this.animation = gsap.timeline()
        .to(document.querySelector('.header'), {yPercent:-100, duration:speed, ease:'power2.inOut'})
    }
  },
  show: function() {
    if(!this.isVisible) {
      this.isVisible=true;
      if(this.animation) this.animation.pause();
      this.animation = gsap.timeline()
        .to(document.querySelector('.header'), {yPercent:0, duration:speed, ease:'power2.out'})
    }
  },
  fadeIn: function() {
    gsap.to(document.querySelector('.header'), {duration:speed, autoAlpha:1, ease:'power2.inOut'});
  }
}