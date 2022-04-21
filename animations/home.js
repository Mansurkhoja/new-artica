const speed = 1;
import gsap from 'gsap';
import Hammer from '@squadette/hammerjs';
import { TouchHoverEvents } from '@/helpers'
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});
export const Home = {
    slideIndex: 0,
    init: function() {return new Promise((resolve, reject)=>{    
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
      this.available=true;
      this.pagination = document.querySelector('.m-slider-pagination');
      this.pagitems = document.querySelectorAll('.m-slider-pagination__link');
      this.pagtrigger = document.querySelector('.m-slider-pagination__item');
      this.pagtrigger.setAttribute('style',`width:${100/this.pagitems.length}%;`)
      this.slides = document.querySelectorAll('.m-slider-slide');
      this.slider = document.querySelector('.m-slider');
      //check start slide
      // this.slideIndex = 3;
      this.slide = this.slides[this.slideIndex ];
      // this.slides.forEach(($element,index)=>{
      //   if($element.classList.contains('active')) {
      //     this.slideIndex = index;
      //     console.log(this.slideIndex)
      //     this.slide = $element;
      //   }
      // })
      this.slide.classList.add('active');
      //animations
      gsap.set(Home.pagtrigger, {xPercent:(100*Home.slideIndex)});
      this.swipearea = new Hammer.Manager(this.slider);
      this.swipearea.add(new Hammer.Pan().set({threshold:1}));
      //event click
      this.pagitems.forEach((element,index)=>{
        element.addEventListener('click',(event)=>{
          event.preventDefault();
          // if(!barba.transitions.isRunning && this.available) {
          if(this.available) {
            this.available=false;
            this.change(index);
          }
        })
      })
      //event scroll
      this.scrollListener = (event)=>{
        // if(!barba.transitions.isRunning && event.target.closest('.m-slider')!==null && this.available) {
        if(event.target.closest('.m-slider')!==null && this.available) {
          if(event.deltaY>0 && this.slides.length>this.slideIndex+1) {
            this.available=false;
            this.change(this.slideIndex+1);
          } else if(event.deltaY<0 && this.slideIndex>0) {
            this.available=false;
            this.change(this.slideIndex-1);
          }
        }
      }
      window.addEventListener('wheel', (event)=>{this.scrollListener(event)}, {passive:false});
      //event keydown
      this.keyListener = (event)=>{
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
      window.addEventListener("keyup", (event)=>{this.keyListener(event)});
      //event swipe
      let cursorPos = {
            current: {
              x:0,
              y:0
            },
            start: {
              x:0,
              y:0,
              update: function(callback, func) {
                this.x = cursorPos.current.x;
                this.y = cursorPos.current.y;
                if(callback=='onComplete') {
                  func();
                }
              }
            }
          },
          swipeLength = 150,
          maxTime = 0.5,
          direction = false,
          swipeForward = false,
          swipeBack  = false;
  
      this.swipearea.on("panleft panend panstart panup pandown panright", (event)=>{
        cursorPos.current.x = event.center.x;
        cursorPos.current.y = event.center.y;
        
        // if(!barba.transitions.isRunning && this.available) {
        if(this.available) {
          //если поставили палец
          if(event.type=='panstart') {
            this.swiped = true;
            cursorPos.start.update();
          } 
          //подняли палец с дисплея
          else if(event.type=='panend') {
            this.swiped = false;
            direction = false;
            this.animationTime = 0;
            if(swipeForward == true) {
              this.back.play();
              this.triggerNextAnimation.reverse();
            } else if(swipeBack == true) {
              this.forward.play();
              this.triggerPrevAnimation.reverse();
            }
            swipeForward = false;
            swipeBack = false;
          }
          //если длина свайпа достаточная
          else if(this.animationTime>=maxTime) {
            this.available=false;
            //Circle.rotation((speed*2)-this.animationTime);
            direction = false;
            if(swipeForward == true) {
              this.change(this.slideIndex+1);
            } else if(swipeBack == true) {
              this.change(this.slideIndex-1);
            }
            swipeForward = false;
            swipeBack = false;
          }
          //процесс ерзанья пальцами
          else if(this.swiped==true) {
            let pos;
            if(direction==false) {
              if(event.type=='panup' || event.type=='pandown') {
                direction = 'vertical';
              } else if(event.type=='panright' || event.type=='panleft') {
                direction = 'horizontal';
              }
            }
  
            if(direction == 'vertical') {
              pos = event.center.y - cursorPos.start.y;
            } else if(direction == 'horizontal') {
              pos = event.center.x - cursorPos.start.x;
            }
  
            //управление временем анимации
            if(event.type=='panup' || event.type=='panleft') {
              if(swipeBack == false) {
                swipeForward = true;
                if(this.slideIndex == this.slides.length-1) {
                  this.animationTime = (-pos/(swipeLength-pos))*maxTime;
                } else {
                  this.animationTime = (-pos/swipeLength)*maxTime;
                }
              } else {
                if(this.slideIndex == 0) {
                  this.animationTime = (pos/(swipeLength+pos))*maxTime;
                } else {
                  this.animationTime = (pos/swipeLength)*maxTime;
                }
                if(this.animationTime<=0) {
                  swipeBack = false;
                  this.animationTime = 0;
                }
              }
            } else {
              if(swipeForward == false) {
                swipeBack = true;
                if(this.slideIndex == 0) {
                  this.animationTime = (pos/(swipeLength+pos))*maxTime;
                } else {
                  this.animationTime = (pos/swipeLength)*maxTime;
                }
              } else {
                if(this.slideIndex == this.slides.length-1) {
                  this.animationTime = (-pos/(swipeLength-pos))*maxTime;
                } else {
                  this.animationTime = (-pos/swipeLength)*maxTime;
                }
                if(this.animationTime<=0) {
                  swipeForward = false;
                }
              }
            }
  
            //последняя корректировка
            if(this.animationTime>maxTime) {
              this.animationTime = maxTime;
            } else if(this.animationTime==-0 || this.animationTime<0) {
              this.animationTime = 0;
            }
  
            if(swipeForward == true) {
              this.back.reverse(speed - this.animationTime);
              this.triggerNextAnimation.play(this.animationTime);
              this.back.pause();
              this.triggerNextAnimation.pause();
            } else if(swipeBack == true) {
              this.forward.reverse(speed - this.animationTime);
              this.triggerPrevAnimation.play(this.animationTime);
              this.forward.pause();
              this.triggerPrevAnimation.pause();
            }
          }
        }
      });
      // document.querySelector('.eurasia-preview .project-preview__title .word').insertAdjacentHTML('afterEnd', '</br>');
      this.getAnimations().then(()=>{
        this.initialized = true;
        resolve();
      });
    })},
    getAnimations: function() {return new Promise((resolve, reject)=>{
      let index = this.slideIndex,
          $this = this.slide;
  
      //второстепенные анимации
      this.secondary = gsap.timeline(),
      this.forward = gsap.timeline({paused:true}),
      this.back = gsap.timeline({paused:true}),
      this.triggerAnimation = gsap.timeline({paused:true}),
      this.triggerNextAnimation = gsap.timeline({paused:true}),
      this.triggerPrevAnimation = gsap.timeline({paused:true}),
      this.enterAnimation = gsap.timeline({paused:true});
  
      //trigger
      this.triggerAnimation
        .to(Home.pagtrigger, {duration:speed*2, xPercent:100*index, ease:'power2.inOut'})
        .to(Home.pagtrigger, {duration:speed, scaleX:1.5, ease:'power2.in'},`-=${speed*2}`)
        .to(Home.pagtrigger, {duration:speed, scaleX:1, ease:'power2.out'},`-=${speed}`)
      this.triggerNextAnimation
        .to(Home.pagtrigger, {duration:speed*2, xPercent:100*(index+1), ease:'power2.inOut'})
        .to(Home.pagtrigger, {duration:speed, scaleX:1.5, ease:'power2.in'},`-=${speed*2}`)
        .to(Home.pagtrigger, {duration:speed, scaleX:1, ease:'power2.out'},`-=${speed}`)
      this.triggerPrevAnimation
        .to(Home.pagtrigger, {duration:speed*2, xPercent:100*(index-1), ease:'power2.inOut'})
        .to(Home.pagtrigger, {duration:speed, scaleX:1.5, ease:'power2.in'},`-=${speed*2}`)
        .to(Home.pagtrigger, {duration:speed, scaleX:1, ease:'power2.out'},`-=${speed}`)
  
      //categories
      if(this.slide.classList.contains('fast-categories')) {
        
        let $slides = $this.querySelectorAll('.fast-categories-block');
        this.forward
          .set($this, {autoAlpha:1})
          .fromTo($slides, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}})
          .fromTo($slides, {xPercent:50}, {immediateRender:false, duration:speed*0.7, xPercent:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
        this.back
          .set($this, {autoAlpha:1})
          .fromTo($slides, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3,from:'end'}})
          .fromTo($slides, {xPercent:-50}, {immediateRender:false, duration:speed*0.7, xPercent:0, ease:'power2.out', stagger:{amount:speed*0.3,from:'end'}},`-=${speed}`)
        this.enterAnimation
          .set($this, {autoAlpha:1})
          .fromTo($slides, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}})
          .fromTo($slides, {yPercent:50}, {immediateRender:false, duration:speed*0.7, yPercent:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
      }
      //projects
      else if(this.slide.classList.contains('project-preview')) {
        let $image = $this.querySelector('.project-preview__image'),
            $icon = $this.querySelector('.label-item .icon'),
            $iconback = $this.querySelector('.label-item__title'),
            $iconletters = $this.querySelectorAll('.label-item__title .char'),
            $line = $this.querySelectorAll('.project-preview__line, .project-preview__link .line'),
            $textchars = $this.querySelectorAll('.project-preview__text .char'),
            $titlechars = $this.querySelectorAll('.project-preview__title .char'),
            $linkchars = $this.querySelectorAll('.project-preview__link .char');
  
        this.forward
          .set($this, {autoAlpha:1})
          .fromTo($image, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut',
            onStart:function(){
              gsap.fromTo($line, {scaleX:0, xPercent:-50}, {duration:speed*2,scaleX:1,xPercent:0,ease:'power2.out'})
            }})
          .fromTo($line, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($image, {xPercent:30}, {immediateRender:false, duration:speed, xPercent:0, ease:'power2.out'}, `-=${speed}`)
          //text
          .fromTo($titlechars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($titlechars, {x:50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($textchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($textchars, {x:50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($linkchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3}},`-=${speed}`)
          .fromTo($linkchars, {x:50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3}},`-=${speed}`)
          //icon label
          .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($icon, {yPercent:50}, {duration:speed, yPercent:0, ease:'power2.out'}, `-=${speed}`)
          .fromTo($iconletters, {autoAlpha:0,yPercent:100}, {duration:speed*0.7,autoAlpha:1,yPercent:0,ease:'power2.out', stagger:{amount:speed*0.3}}, `-=${speed}`)
          .fromTo($iconback, {yPercent:100,autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.out'},`-=${speed}`)
        
        this.back
          .set($this, {autoAlpha:1})
          .fromTo($image, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut',
            onStart:function(){
              gsap.fromTo($line, {scaleX:0, xPercent:-50}, {duration:speed*2,scaleX:1,xPercent:0,ease:'power2.out'})
            }})
          .fromTo($line, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($image, {xPercent:-30}, {immediateRender:false, duration:speed, xPercent:0, ease:'power2.out'}, `-=${speed}`)
          //text
          .fromTo($titlechars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from:'end'}},`-=${speed}`)
          .fromTo($titlechars, {xPercent:-50}, {immediateRender:false, duration:speed*0.7, xPercent:0, ease:'power2.out', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          .fromTo($textchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from:'end'}},`-=${speed}`)
          .fromTo($textchars, {x:-50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          .fromTo($linkchars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          .fromTo($linkchars, {x:-50}, {immediateRender:false, duration:speed*0.7, x:0, ease:'power2.out', stagger:{amount:speed*0.3, from: "end"}},`-=${speed}`)
          //icon label
          .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($icon, {yPercent:-50}, {duration:speed, yPercent:0, ease:'power2.out'}, `-=${speed}`)
          .fromTo($iconletters, {autoAlpha:0,yPercent:-100}, {duration:speed*0.7,autoAlpha:1,yPercent:0,ease:'power2.out', stagger:{amount:speed*0.3, from:'end'}},`-=${speed}`)
          .fromTo($iconback, {yPercent:-100,autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.out'},`-=${speed}`)
  
        this.enterAnimation
          .set($this, {autoAlpha:1})
          .fromTo($image, {autoAlpha:0, scale:0.95}, {immediateRender:false,duration:speed, autoAlpha:1, scale:1, ease:'power2.inOut'})
          .fromTo($line, {autoAlpha:0,scaleX:0.5, xPercent:-25}, {duration:speed, autoAlpha:1,scaleX:1,xPercent:0, ease:'power2.inOut'},`-=${speed}`)
          .fromTo($titlechars, {autoAlpha:0}, {duration:speed*0.7, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.3, from:'random'}},`-=${speed}`)
          .fromTo($textchars, {autoAlpha:0}, {duration:speed*0.6, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}},`-=${speed}`)
          .fromTo($linkchars, {autoAlpha:0}, {duration:speed*0.6, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}},`-=${speed}`)
          //icon label
          // .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'},`-=${speed}`)
          // .fromTo($iconletters, {autoAlpha:0}, {duration:speed*0.6,autoAlpha:1,ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}}, `-=${speed}`)
          // //.fromTo($iconback, {autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'}, `-=${speed}`)
          .fromTo($icon, {yPercent:50}, {duration:speed, yPercent:0, ease:'power2.out'}, `-=${speed}`)
          .fromTo($iconletters, {autoAlpha:0,yPercent:100}, {duration:speed*0.7,autoAlpha:1,yPercent:0,ease:'power2.out', stagger:{amount:speed*0.3}}, `-=${speed}`)
          .fromTo($iconback, {yPercent:100,autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.out'},`-=${speed}`)

        if(this.slide.classList.contains('navigator-preview')) {
          let $images = this.slide.querySelectorAll('.image');
          this.secondary
            .fromTo($images[0], {rotation:180}, {duration:speed*2, rotation:0, ease:'power2.inOut'})
            .fromTo($images[1], {rotation:-360}, {duration:speed*2, rotation:0, ease:"back.out(5)"},`-=${speed*2}`)
        } 
        else if(this.slide.classList.contains('patron-preview')) {
          let $image = this.slide.querySelectorAll('.image')[1];
          this.secondary
            .fromTo($image, {scale:0.7, rotation:45}, {duration:speed*2, scale:1, rotation:0, ease:'power2.out'})
        } 
        else {
          let $image = this.slide.querySelectorAll('.image')[1];
          this.secondary
            .fromTo($image, {scale:0.5}, {duration:speed*2, scale:1, ease:'power2.out'})
        } 
  
      }
      //home
      else {
        let $logo = $this.querySelector('.home-logo'),
            $words = $logo.querySelectorAll('path');
        //animation
        this.forward = gsap.timeline({paused:true})
          .set($this, {autoAlpha:1})
          .fromTo($logo, {scale:1.1}, {immediateRender:false, duration:speed, scale:1, ease:'power2.out'})
          .fromTo($words, {autoAlpha:0}, {duration:speed*0.8, autoAlpha:1, ease:'power2.inOut', stagger:{amount:speed*0.2, from:'random'}}, `-=${speed}`)
        this.back = this.forward;
  
        this.enterAnimation = this.forward;
        // if(App.initialized) {
        //   this.enterAnimation = this.forward;
        // } else {
        //   this.enterAnimation = gsap.timeline({paused:true})
        //     .set([$words, $this], {autoAlpha:1})
        //     .fromTo($logo, {scale:1.1, autoAlpha:0}, {duration:Preloader.duration_final, scale:1, autoAlpha:1, ease:'power3.inOut'})
        // }
  
      }
  
      if(!this.initialized) {
        console.log('!this.initialized');
        // let delay = App.initialized?0:Preloader.delay;
        let delay = 0;
        //line
        this.lineAnimation = gsap.timeline({paused:true})
          .fromTo(Home.pagination, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'})
          .fromTo(Home.pagination, {y:20}, {duration:speed, y:0, ease:'power2.out'}, `-=${speed}`)
  
        this.enterAnimation.eventCallback('onStart', ()=>{
          // gsap.set(window.$container, {autoAlpha:1});
          let wrapper = document.querySelector('.content')
          gsap.set(wrapper, {autoAlpha:1});
          setTimeout(()=>{
            gsap.fromTo(Home.pagtrigger, {scaleX:0.5,xPercent:100*(Home.slideIndex-0.25)}, {duration:speed, scaleX:1, xPercent:100*Home.slideIndex, ease:'power2.out'})
            this.lineAnimation.play();
          }, delay*1000)
        })
      }
  
      resolve();
    })},
    change: function(index) {
      for(let $this of this.slides) {
        $this.classList.remove('active');
      }
      for(let $this of this.pagitems) {
        $this.classList.remove('active');
      }
      this.pagitems[index].classList.add('active');
      this.slide = this.slides[index];
      this.slide.classList.add('active');
      this.slideIndex<index ? this.direction='next' : this.direction='prev';
      this.slideIndex=index;
  
      if(this.direction=='next') {
        this.back.progress()==0 ? this.back.reverse(0) : this.back.reverse();
        this.back.eventCallback('onReverseComplete',()=>{
          this.forward.play();
          this.secondary.play(0);
        })
      } else {
        this.forward.progress()==0 ? this.forward.reverse(0) : this.forward.reverse();
        this.forward.eventCallback('onReverseComplete',()=>{
          this.back.play();
          this.secondary.play(0);
        })
      }
  
      if(this.swiped==true) {
        this.swiped=false;
        if(this.direction=='next') {
          this.triggerNextAnimation.play(this.animationTime);
        } else {
          this.triggerPrevAnimation.play(this.animationTime);
        }
        this.animationTime=0;
        this.getAnimations();
      } else {
        this.getAnimations().then(()=>{
          this.triggerAnimation.play();
        });
      }
  
      this.forward.eventCallback('onComplete',()=>{
        this.available = true;
      })
      this.back.eventCallback('onComplete',()=>{
        this.available = true;
      })
      window.location.hash = index
    },
    destroy: function() {
      this.initialized = false;
      this.swipearea.destroy();
      window.removeEventListener('wheel', this.scrollListener);
      window.removeEventListener('keyup', this.keyListener);
      this.lineAnimation.reverse();
      gsap.to(Home.pagtrigger, {duration:speed, scaleX:0, xPercent:100*(this.slideIndex-1), ease:'power2.in'})
    }
};