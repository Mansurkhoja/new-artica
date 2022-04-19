<template>
  <main class="content">
    <!-- <nuxt-link to="/contacts">s</nuxt-link> -->
    <div class="m-slider">
      <!--home-->
      <section class="home m-slider-slide">
        <div class="container container_display">
          <Logo class="home-logo" />
        </div>
      </section>
      <!--categories-->
      <section class="fast-categories m-slider-slide">
        <div class="container container_display">
          <div class="fast-categories__container row">
            <div 
                v-for="(category, idx) in categories" 
                :key="idx" 
                class="fast-categories-block col-lg-4 col-6">
              <a
                v-if="category.isLinkTarget"
                class="fast-categories-block__container js-3d-object"
                :href="category.link"
                data-cursor="reversed"
                rel="noopener noreferrer"
                target="_blank"
                >
                <span
                  class="fast-categories-block__bg js-3d-object__back"
                  data-rotation="10" />
                <div
                  class="label-item js-3d-object__forward"
                  data-rotation="20"
                  data-move="10"
                >
                  <span v-html="categoryIcons[category.name]" />
                  <div class="label-item__title splitted" data-splitting>{{category.testName}}</div>
                </div>
              </a>
              <NuxtLink 
                v-else 
                class="fast-categories-block__container js-3d-object" 
                :to="category.link"
                data-cursor="reversed"
              >
                <span
                  class="fast-categories-block__bg js-3d-object__back"
                  data-rotation="10" />
                <div
                  class="label-item js-3d-object__forward"
                  data-rotation="20"
                  data-move="10"
                >
                  <span v-html="categoryIcons[category.name]" />
                  <div class="label-item__title splitted" data-splitting>{{category.name}}</div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      <!--projects -->
      <section 
        v-for="(project, idx) in projects"
        :key="idx"
        class="project-preview m-slider-slide"
        :class="`${project.name}-preview`"
      >
        <div class="container container_display">
          <div class="project-preview__container row">
            <div class="project-preview__content col-lg-5 order-lg-1 order-2">
              <h2 v-html="project.title" class="project-preview__title splitted" data-splitting />
              <span class="project-preview__line"></span>
              <p class="project-preview__text" data-splitting>
                {{ project.description }}
              </p>
              <a
                v-if="project.isHasLink"
                class="project-preview__link"
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                data-splitting
                >
                {{ project.linkName }}
                <span class="line" />
              </a>
            </div>
            <div class="project-preview__image col-lg-7 order-lg-2">
              <NuxtLink 
                to="/" 
                class="project-preview-item js-3d-object"> 
                <div
                  class="image cover js-3d-object__back"
                  data-rotation="2.5"
                >
                  <img
                    class="lazyload"
                    :data-src="require(`~/assets/images/${project.imgBack}`)"
                    alt="bg"
                  >
                </div>
                <div
                  class="image contain js-3d-object__forward"
                  data-rotation="5"
                  data-move="10"
                >
                  <img
                    class="lazyload"
                    :data-src="require(`~/assets/images/${project.img}`)"
                    alt="bg"
                  >
                </div>
              </NuxtLink>
            </div>
            <div class="label-item" :class="{'label-item_graphic': project.category === 'graphDesign'}">
              <span v-html="categoryIcons[project.category]" />
              <div
                v-html="project.categoryName"
                class="label-item__title splitted" 
                data-splitting  />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="m-slider-pagination">
      <div class="container">
        <div class="m-slider-pagination__container">
          <span class="m-slider-pagination__item" />
          <a
            class="m-slider-pagination__link"
            :href="`#slide-${idx}`"
            v-for="idx in 8"
            :key="idx"
          />
        </div>
      </div>
    </div>
  </main>
  <!-- <img src="~/assets/images/Nce/back.png" /> -->
</template>

<script>
import Logo from '~/assets/icons/logo.svg?inline';
import gsap from 'gsap';
import Hammer from '@squadette/hammerjs';
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});
const speed = 1;
const Home = {
  init: function() {return new Promise((resolve, reject)=>{
    //flag
    this.available=true;
    this.pagination = document.querySelector('.m-slider-pagination');
    this.pagitems = document.querySelectorAll('.m-slider-pagination__link');
    this.pagtrigger = document.querySelector('.m-slider-pagination__item');
    this.pagtrigger.setAttribute('style',`width:${100/this.pagitems.length}%;`)
    this.slides = document.querySelectorAll('.m-slider-slide');
    this.slider = document.querySelector('.m-slider');
    //check start slide
    this.slideIndex = 0;
    this.slide = this.slides[0];
    this.slides.forEach(($element,index)=>{
      if($element.classList.contains('active')) {
        this.slideIndex = index;
        this.slide = $element;
      }
    })
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
          console.log(this.available)
          this.available=false;
          this.change(this.slideIndex+1);
        } else if(event.deltaY<0 && this.slideIndex>0) {
          console.log(this.available)
          this.available=false;
          this.change(this.slideIndex-1);
        }
      }
    }
    window.addEventListener('wheel', (event)=>{this.scrollListener(event)});
    
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
        .fromTo($icon, {autoAlpha:0}, {duration:speed, autoAlpha:1, ease:'power2.inOut'},`-=${speed}`)
        .fromTo($iconletters, {autoAlpha:0}, {duration:speed*0.6,autoAlpha:1,ease:'power2.inOut', stagger:{amount:speed*0.4, from:'random'}}, `-=${speed}`)
        //.fromTo($iconback, {autoAlpha:0}, {duration:speed,yPercent:0,autoAlpha:1,ease:'power2.inOut'}, `-=${speed}`)
      
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

  },
  destroy: function() {
    this.initialized = false;
    this.swipearea.destroy();
    window.removeEventListener('wheel', this.scrollListener);
    this.lineAnimation.reverse();
    gsap.to(Home.pagtrigger, {duration:speed, scaleX:0, xPercent:100*(this.slideIndex-1), ease:'power2.in'})
  }
};
export default {
  name: "IndexPage",
  components: {
    Logo
  },
  data() {
    return {
      animation: null,
      categories: [
        {
          name: "marketing",
          link: "http://marketingline.ru/",
          isLinkTarget: true,
          testName: 'Маркетинг'
        },
        {
          name: "ui",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Пользовательский<br>интерфейс'
        },
        {
          name: "graphDesign",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Графический<br>дизайн'
        },
        {
          name: "webDesign",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Веб-дизайн'
        },
        {
          name: "style",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Фирменный<br>стиль'
        },
        {
          name: "app",
          link: "/contacts",
          isLinkTarget: false,
          testName: 'Приложения'
        },
      ],
      categoryIcons: {
        ui: `<svg class="icon" viewBox="0 0 86 109">
                    <path d="M86,66.2V0L73,0v66.2c0,8.2-2.9,15.3-8.8,21.1C58.3,93.1,51.3,96,43,96s-15.3-2.9-21.2-8.7  C15.9,81.5,13,74.4,13,66.2V0L0,0l0,66.2C0,78,4.2,88.1,12.6,96.5C21,104.8,31.1,109,43,109c11.8,0,22-4.2,30.3-12.5  C81.8,88.1,86,78,86,66.2z"></path>
                  </svg>`,
        graphDesign: `<svg class="icon" viewBox="0 0 109 109">
                    <path d="M108.7,48.5H46.5v12h50.1C93.7,81.1,76,97,54.5,97C31,97,12,78,12,54.5S31,12,54.5,12c15.7,0,29.5,8.5,36.8,21.3l0.6,1h13.3l-1.3-2.8C95.2,12.9,76.4,0,54.5,0C24.4,0,0,24.4,0,54.5S24.4,109,54.5,109c30.1,0,54.5-24.4,54.5-54.5c0-1.4-0.1-2.8-0.2-4.2L108.7,48.5z"></path>
                  </svg>`,
        webDesign: `<svg class="icon" viewBox="0 0 187.3 109">
                    <path d="M72.5,0l49.8,83.5L172.1,0l15.2,0l-65,109L57.3,0L72.5,0z M130,0l-21.2,35.5l-7.6-12.7L114.8,0L130,0z M15.2,0  L65,83.5l13.5-22.7l7.6,12.7L65,109L0,0L15.2,0z"></path>
                  </svg>`,
        style: `<svg class="icon" viewBox="0 0 13 109">
                    <path d="M0,0h13v109H0V0z"></path>
                  </svg>`,
        marketing: `<svg class="icon" viewBox="0 0 127.1 108.9">
                        <path d="M63.5,83.5L13.8,0L0.5,0l0,0L0,0l0,108.9l13.6,0V25.2l49.9,83.8l49.9-83.8v83.8h13.6l0-108.9l-0.7,0l-13.1,0L63.5,83.5z"></path>
                      </svg>`,
        app: `<svg class="icon" viewBox="0 0 129 109">
                        <path d="M64.5,25.5l49.4,83.5H129L64.5,0L0,109h15.1L64.5,25.5z"></path>
                      </svg>`
      },
      projects: [
        {
          title: "Route 66",
          description: "Краткое описание проекта «Route 66»",
          img: "Route66/forward.png",
          imgBack: "Route66/back.jpg",
          imgCard: "Route66/card.jpg",
          link: "http://route66.ru/",
          linkName: "route66.ru",
          category: "graphDesign",
          isHasLink: true,
          name: "route66",
          categoryName: 'Графический<br>дизайн'
        },
        {
          title: "Patron",
          description: "Краткое описание проекта «Patron»",
          img: "Patron/forward.png",
          imgBack: "Patron/back.png",
          imgCard: "Patron/card.jpg",
          category: "graphDesign",
          isHasLink: false,
          name: "patron",
          categoryName: 'Графический<br>дизайн'
        },
        {
          title: "Навигатор",
          description: "Краткое описание проекта «Навигатор»",
          img: "Navigator/forward.png",
          imgBack: "Navigator/back.png",
          imgCard: "Navigator/card.png",
          category: "ui",
          isHasLink: false,
          name: "navigator",
          categoryName: 'Пользовательский<br>интерфейс'
        },
        {
          title: "Майолика",
          description: "Краткое описание проекта «Майолика»",
          img: "Majolika/forward.png",
          imgBack: "Majolika/back.png",
          imgCard: "Majolika/card.jpg",
          link: "https://remeslo36.ru/",
          linkName: "remeslo36.ru",
          category: "webDesign",
          isHasLink: true,
          name: "majolika",
          categoryName: 'Веб-дизайн'
        },
        {
          title: "National <br/> company Eurasia",
          description: "Краткое описание проекта «NCE»",
          img: "Nce/forward.png",
          imgBack: "Nce/back.png",
          imgCard: "Nce/card.jpg",
          category: "style",
          isHasLink: false,
          name: "eurasia",
          categoryName: 'Фирменный<br>стиль'
        },
        {
          title: "Twonp",
          description: "Краткое описание проекта «Twonp»",
          img: "Twonp/forward.png",
          imgBack: "Twonp/back.jpg",
          imgCard: "Twonp/card.png",
          link: "https://twonp.ru/",
          linkName: "twonp.ru",
          category: "webDesign",
          isHasLink: true,
          name: "twonp",
          categoryName: 'Веб-дизайн'
        },
      ],
    };
  },
  computed: {
    isPreloaderFinished() {
      const isFinished = this.$store.getters["preloader/isFinished"];
      return isFinished;
    },
  },
  watch: {
    isPreloaderFinished() {
      Home.init().then(() => {
        this.$animateCatCards();
        Home.enterAnimation.play().eventCallback("onComplete", () => {
          console.log("enterAnimationComplete");
        });
      });
    },
  },
  mounted() {
    console.log(this.isPreloaderFinished);
    if (this.isPreloaderFinished) {
      this.$animateCatCards();
      Home.init().then(() => {
        Home.enterAnimation.play();
      });
    }
  },
  beforeDestroy() {
    Home.enterAnimation.reverse(0);
    Home.destroy();
  },
  methods: {
    ss() {
      Home.enterAnimation.play();
    },
  },
};
</script>
